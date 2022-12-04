import { readFileSync } from "fs";

const input = readFileSync("input.txt", "utf-8");
const elfPairs = input.split("\r\n");

const elfPairRanges = elfPairs.map((pair) =>
  pair.split(",").map((x) => x.split("-").map(Number))
) as [number, number][][];

let totalOverlappingPairs = 0;

for (const elfPairRange of elfPairRanges) {
  const [
    [pair1AssignmentLower, pair1AssignmentUpper],
    [pair2AssignmentLower, pair2AssignmentUpper],
  ] = elfPairRange;

  if (
    pair1AssignmentLower <= pair2AssignmentUpper &&
    pair2AssignmentLower <= pair1AssignmentUpper
  )
    totalOverlappingPairs++;
}

console.log(`Answer: ${totalOverlappingPairs}`);
