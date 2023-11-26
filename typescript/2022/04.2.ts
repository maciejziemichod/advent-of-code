import { runWithInput } from "../runWithInput";

function main(input: string): void {
	console.log(countOverlaps(input));
}

function countOverlaps(input: string) {
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
				isInRange(aStart, bStart, bEnd) ||
				isInRange(aEnd, bStart, bEnd) ||
				isInRange(bStart, aStart, aEnd) ||
				isInRange(bEnd, aStart, aEnd),
		).length;
}

function isInRange(element: number, start: number, end: number): boolean {
	return start <= element && element <= end;
}

runWithInput(__dirname, "04.input", main);
