import { runWithInput } from "../runWithInput";

function main(input: string): void {
	console.log(calculatePoints(parseInput(input)));
}

function parseInput(input: string): number[][][] {
	return input
		.trim()
		.split("\n")
		.map((line) =>
			line
				.split(": ")[1]
				.split(" | ")
				.map((group) =>
					group
						.split(" ")
						.map((char) => parseInt(char, 10))
						.filter((value) => !Number.isNaN(value)),
				),
		);
}

function calculatePoints(cards: number[][][]): number {
	return cards
		.map(([winning, owned]) =>
			owned
				.filter((number) => winning.includes(number))
				.reduce((_, __, index) => Math.pow(2, index), 0),
		)
		.reduce((sum, value) => sum + value, 0);
}

runWithInput(__dirname, "04.input", main);
