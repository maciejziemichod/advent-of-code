import { runWithInput } from "../runWithInput";

function main(input: string): void {
	console.log(sumCommonItemPriorities(input));
}

function sumCommonItemPriorities(input: string): number {
	return input
		.trim()
		.split("\n")
		.map((rucksack) =>
			[
				rucksack.slice(0, rucksack.length / 2),
				rucksack.slice(rucksack.length / 2),
			].map((compartment) => compartment.split("")),
		)
		.map(([a, b]) => charToValue(findCommonElement(a, b)))
		.reduce((accumulator, value) => accumulator + value, 0);
}

function charToValue(char: string): number {
	const value = char.charCodeAt(0) - "a".charCodeAt(0) + 1;

	return value > 0 ? value : value + 58;
}

function findCommonElement(a: string[], b: string[]): string {
	return a.find((element) => b.includes(element))!;
}

runWithInput(__dirname, "03.input", main);
