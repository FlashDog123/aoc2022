import * as fs from 'fs';

const loadInputPart1 = (): { left: string[], right: string[] }[] => {
    const file = fs.readFileSync('./inputs/day3.txt', 'utf8');

    const backpacks = file.split('\n');
    return backpacks.map(backpack => {
        const index = Math.round(backpack.length / 2)
        return { left: [...backpack.slice(0, index)], right: [...backpack.slice(index)] };
    });
}

const part1 = () => {
    const backpacks = loadInputPart1();
    let totalScore = 0;
    let foundMatches: string[] = [];
    backpacks.forEach(backpack => {
        let foundMatch = backpack.left.filter(item => backpack.right.includes(item));
        foundMatches = [...foundMatches, ...new Set(foundMatch)];
    });
    foundMatches.forEach(match => {
        // if a = 1 and z =26 find the value of the match
        let matchValue = match.toLowerCase().charCodeAt(0) - 96;
        if (match === match.toUpperCase()) {
            matchValue += 26;
        }
        totalScore += matchValue;
    });
    return totalScore;
}

const loadInputPart2 = (): string[][] => {
    const file = fs.readFileSync('./inputs/day3.txt', 'utf8');
    const backpackGroups: string[][] = []
    let localGroup: string[] = [];
    const backpacks = file.split('\n');
    backpacks.forEach((backpack, index) => {
        // every 3 backpacks add them to the localGroup array
        if (index % 3 === 0 && index !== 0) {
            backpackGroups.push(localGroup);
            localGroup = [];
        }
        localGroup.push(backpack);
    });
    backpackGroups.push([...localGroup]);
    return backpackGroups;
}

const part2 = () => {
    const backpackGroups = loadInputPart2();
    let totalScore = 0;
    backpackGroups.forEach((group, index) => {
        let match = [...group[0]].find(x => group.every(elf => elf.includes(x))) ?? '';
        // if a = 1 and z =26 find the value of the match
        let matchValue = match.toLowerCase().charCodeAt(0) - 96;
        if (match === match.toUpperCase()) {
            matchValue += 26;
        }
        if (matchValue > 0) {
            totalScore += matchValue;
        }
    });

    return totalScore;
}

console.log(part1());
console.log(part2());