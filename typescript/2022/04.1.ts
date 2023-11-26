import { runWithInput } from "../runWithInput";

function main(input: string): void {
	console.log(countContained(input));
}

function countContained(input: string) {
	return input
		.trim()
		.split("\n")
		.map((line) => line.split(","))
		.map((elves) =>
			elves.map((elf) =>
				elf.split("-").map((item) => parseInt(item, 10)),
			),
		)
		.filter(
			([[aStart, aEnd], [bStart, bEnd]]) =>
				(aStart >= bStart && aEnd <= bEnd) ||
				(bStart >= aStart && bEnd <= aEnd),
		).length;
}

runWithInput(__dirname, "04.input", main);
