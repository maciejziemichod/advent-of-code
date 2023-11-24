import { runWithInput } from "../runWithInput";

function main(input: string): void {
	console.log(sumMaxThree(input));
}

function sumMaxThree(input: string): number {
	return input
		.split("\n\n")
		.map((items) =>
			items
				.trim()
				.split("\n")
				.map((item) => parseInt(item, 10))
				.reduce((accumulator, value) => accumulator + value, 0),
		)
		.sort((a, b) => b - a)
		.slice(0, 3)
		.reduce((accumulator, value) => accumulator + value, 0);
}

runWithInput(__dirname, "01.input", main);
