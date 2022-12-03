import { readFileSync } from "fs";

const input = readFileSync("input.txt", "utf-8");
const rucksacks = input.split("\r\n");

const rucksackCompartments = rucksacks.map((rucksack) => [
  rucksack.substring(0, rucksack.length / 2),
  rucksack.substring(rucksack.length / 2),
]);

const uppercaseAsciiOffset = "A".charCodeAt(0) - 27;
const lowercaseAsciiOffset = "a".charCodeAt(0) - 1;

let prioritiesTotal = 0;

for (const compartments of rucksackCompartments) {
  const [firstCompartment, secondCompartment] = compartments;

  for (const item of new Set(firstCompartment.split(""))) {
    if (secondCompartment.includes(item)) {
      const asciiCode = item.charCodeAt(0);
      const offset =
        asciiCode < "a".charCodeAt(0)
          ? uppercaseAsciiOffset
          : lowercaseAsciiOffset;

      prioritiesTotal += asciiCode - offset;
    }
  }
}

console.log(`Answer: ${prioritiesTotal}`);
