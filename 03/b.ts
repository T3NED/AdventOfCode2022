import { readFileSync } from "fs";

const input = readFileSync("input.txt", "utf-8");
const rucksacks = input.split("\r\n");

const rucksackGroups = rucksacks.reduce((groups, rucksack) => {
  const lastGroup = groups[groups.length - 1];
  if (!lastGroup || lastGroup.length === 3) groups.push([rucksack]);
  else lastGroup.push(rucksack);
  return groups;
}, [] as string[][]);

const uppercaseAsciiOffset = "A".charCodeAt(0) - 27;
const lowercaseAsciiOffset = "a".charCodeAt(0) - 1;

let prioritiesTotal = 0;

for (const rucksacks of rucksackGroups) {
  const firstRucksack = rucksacks[0].split("");
  const secondRucksack = rucksacks[1].split("");
  const thirdRucksack = rucksacks[2].split("");

  const item = firstRucksack.find(
    (x) => secondRucksack.includes(x) && thirdRucksack.includes(x)
  )!;

  const asciiCode = item.charCodeAt(0);
  const offset =
    asciiCode < "a".charCodeAt(0) //
      ? uppercaseAsciiOffset
      : lowercaseAsciiOffset;

  prioritiesTotal += asciiCode - offset;
}

console.log(`Answer: ${prioritiesTotal}`);
