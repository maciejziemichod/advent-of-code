import { runWithInput } from "../runWithInput";

function main(input: string): void {
	const chars = input.trim().split("");
	console.log(findUniqueSequence(chars, 14));
}

function findUniqueSequence(array: any[], length: number): number {
	for (let i = length; i <= array.length; i++) {
		if (!hasDuplicates(array.slice(i - length, i))) {
			return i;
		}
	}
	return -1;
}

function hasDuplicates(array: any[]): boolean {
	return array.length !== new Set(array).size;
}

runWithInput(__dirname, "06.input", main);
