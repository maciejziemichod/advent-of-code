import { runWithInput } from "../runWithInput";

function main(input: string): void {
	console.log(calculateMax(input));
}

function calculateMax(input: string): number {
	return Math.max(
		...input.split("\n\n").map((items) =>
			items
				.trim()
				.split("\n")
				.map((item) => parseInt(item, 10))
				.reduce((accumulator, value) => accumulator + value, 0),
		),
	);
}

runWithInput(__dirname, "01.input", main);
