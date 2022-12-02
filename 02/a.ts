import { readFileSync } from "fs";

const input = readFileSync("input.txt", "utf-8");
const rounds = input.split("\r\n");
const guides = rounds.map(
  (round) => round.split(" ") as ["A" | "B" | "C", "X" | "Y" | "Z"]
);

const opponentConversionMap = { X: "A", Y: "B", Z: "C" } as const;
const outcomeScoreMap = { win: 6, draw: 3, loss: 0 };
const scoreMap = { A: 1, B: 2, C: 3 };

let totalScore = 0;

for (const guide of guides) {
  const [opponent, beforeMe] = guide;
  const me = opponentConversionMap[beforeMe];

  if (opponent === me) totalScore += outcomeScoreMap.draw;
  if (opponent === "A" && me === "B") totalScore += outcomeScoreMap.win;
  if (opponent === "B" && me === "C") totalScore += outcomeScoreMap.win;
  if (opponent === "C" && me === "A") totalScore += outcomeScoreMap.win;

  totalScore += scoreMap[me];
}

console.log(`Answer: ${totalScore}`);
