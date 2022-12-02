import * as fs from 'fs';

const loadInput = (): { challenger: string, you: string }[] => {
    const file = fs.readFileSync('./inputs/day2.txt', 'utf8');

    const matches = file.split('\n');
    return matches.map(match => {
        const splittedMatch = match.split(' ');
        return { challenger: splittedMatch[0], you: splittedMatch[1] };
    });
}

const part1 = () => {
    let totalScore = 0;
    loadInput().forEach(match => {
        switch (match.you) {
            case 'X':
                totalScore += 1 + (match.challenger === 'A' ? 3 : (match.challenger === 'C' ? 6 : 0));
                break;
            case 'Y':
                totalScore += 2 + (match.challenger === 'B' ? 3 : (match.challenger === 'A' ? 6 : 0));
                break;
            case 'Z':
                totalScore += 3 + (match.challenger === 'C' ? 3 : (match.challenger === 'B' ? 6 : 0));
                break;
        }
    });

    return totalScore;
}

const part2 = () => {
    let totalScore = 0;
    loadInput().forEach(match => {
        switch (match.you) {
            //Lose
            case 'X':
                totalScore += (match.challenger === 'A' ? 3 : (match.challenger === 'B' ? 1 : 2));
                break;
            // Draw
            case 'Y':
                totalScore += (match.challenger === 'A' ? 4 : (match.challenger === 'B' ? 5 : 6));
                break;
            //Win
            case 'Z':
                totalScore += (match.challenger === 'A' ? 8 : (match.challenger === 'B' ? 9 : 7));
                break;
        }
    });

    return totalScore;
}

console.log(part1());
console.log(part2());