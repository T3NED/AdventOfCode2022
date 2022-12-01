import { readFileSync } from "fs";

const input = readFileSync("input.txt", "utf-8");
const elves = input.split("\n\r");

const calories: number[] = [];

for (const elf of elves) {
  const caloryValues = elf.split("\n").map((calory) => +calory);
  const caloryTotal = caloryValues.reduce((total, value) => total + value, 0);
  calories.push(caloryTotal);
}

const highestCalories = Math.max(...calories);

console.log(`Answer: ${highestCalories}`);
