import { readFileSync } from "fs";

const input = readFileSync("input.txt", "utf-8");
const elves = input.split("\n\r");

const calories: number[] = [];

for (const elf of elves) {
  const caloryValues = elf.split("\n").map((calory) => +calory);
  const caloryTotal = caloryValues.reduce((total, value) => total + value, 0);
  calories.push(caloryTotal);
}

const highestCalories = calories.sort((a, b) => b - a);
const top3Calories = highestCalories.slice(0, 3).reduce((a, b) => a + b, 0);

console.log(`Answer: ${top3Calories}`);
