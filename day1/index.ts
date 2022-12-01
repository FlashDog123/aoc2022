import * as fs from 'fs';

const loadInput = (): number[] => {
    const file = fs.readFileSync('./inputs/day1.txt', 'utf8');

    // split the file by double new line characters
    const elfs = file.split('\n\n');

    // split the elfs by new line and convert the string values to numbers and sum them
    return elfs.map(elf => elf.split('\n').map(Number).reduce((a, b) => a + b, 0));
}

const part1 = () => {
    // return the max value from loadInput array
    return Math.max(...loadInput());
}

const part2 = () => {
    // sort the input array in descending order
    const sortedInput = loadInput().sort((a, b) => b - a);
    // grab the first 3 elements from the sortedInput array and sum them
    return sortedInput.slice(0, 3).reduce((a, b) => a + b, 0);
}

console.log(part1());
console.log(part2());