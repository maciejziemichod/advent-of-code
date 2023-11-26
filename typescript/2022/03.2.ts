import { runWithInput } from "../runWithInput";

function main(input: string): void {
	console.log(sumCommonItemPriorities(input));
}

function sumCommonItemPriorities(input: string): number {
	return splitIntoChunks(input.trim().split("\n"), 3)
		.map((group) => group.map((elf) => elf.split("")))
		.map(([a, b, c]) => charToValue(findCommonElement(a, b, c)))
		.reduce((accumulator, value) => accumulator + value, 0);
}

function splitIntoChunks(array: string[], length: number): string[][] {
	return array.reduce((resultArray, item, index) => {
		const chunkIndex = Math.floor(index / length);

		if (!resultArray[chunkIndex]) {
			resultArray[chunkIndex] = [];
		}

		resultArray[chunkIndex].push(item);

		return resultArray;
	}, [] as string[][]);
}

function charToValue(char: string): number {
	const value = char.charCodeAt(0) - "a".charCodeAt(0) + 1;

	return value > 0 ? value : value + 58;
}

function findCommonElement(a: string[], b: string[], c: string[]): string {
	return a.find((element) => b.includes(element) && c.includes(element))!;
}

runWithInput(__dirname, "03.input", main);
