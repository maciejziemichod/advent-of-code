import { runWithInput } from "../runWithInput";

class EnginePart {
	constructor(public value: number) {}
}

function main(input: string): void {
	console.log(sumEngineParts(input));
}

function sumEngineParts(input: string): number {
	return [
		...parseInput(input)
			.map((line, rowIndex, schema) =>
				line.reduce((accumulator, value, columnIndex) => {
					if (typeof value !== "string") {
						return accumulator;
					}

					return new Set([
						...accumulator,
						...getAdjacentParts(schema, rowIndex, columnIndex),
					]);
				}, new Set<EnginePart>()),
			)
			.reduce(
				(combinedSet, set) => new Set([...combinedSet, ...set]),
				new Set(),
			)
			.values(),
	].reduce((sum, part) => sum + part.value, 0);
}

function parseInput(input: string): Array<Array<EnginePart | null | string>> {
	return input
		.trim()
		.split("\n")
		.map((line) => {
			const chars = line.split("");
			const parsed: Array<EnginePart | null | string> = [];

			for (let i = 0; i < chars.length; i++) {
				const char = chars[i];

				if (char === ".") {
					parsed.push(null);
					continue;
				}

				if (!isDigit(char)) {
					parsed.push(char);
					continue;
				}

				const partials = peekChars(chars, i + 1);
				const value = parseInt(char + partials, 10);
				const part = new EnginePart(value);

				i += partials.length;

				for (let j = 0; j <= partials.length; j++) {
					parsed.push(part);
				}
			}

			return parsed;
		});
}

function getAdjacentParts(
	schema: Array<Array<string | EnginePart | null>>,
	rowIndex: number,
	columnIndex: number,
): Set<EnginePart> {
	const currentRow = schema[rowIndex];
	const possibleParts = [
		currentRow[columnIndex - 1],
		currentRow[columnIndex + 1],
	];

	const rowAbove = schema[rowIndex - 1];
	if (rowAbove !== undefined) {
		possibleParts.push(
			...[
				rowAbove[columnIndex - 1],
				rowAbove[columnIndex],
				rowAbove[columnIndex + 1],
			],
		);
	}

	const rowBelow = schema[rowIndex + 1];
	if (rowBelow !== undefined) {
		possibleParts.push(
			...[
				rowBelow[columnIndex - 1],
				rowBelow[columnIndex],
				rowBelow[columnIndex + 1],
			],
		);
	}

	return new Set(
		possibleParts.filter((item) => item instanceof EnginePart),
	) as Set<EnginePart>;
}

function peekChars(chars: string[], index: number): string {
	let partials = "";

	while (index < chars.length) {
		const char = chars[index];

		if (!isDigit(char)) {
			break;
		}

		partials += char;
		index++;
	}

	return partials;
}

function isDigit(char: string): boolean {
	return /\d/.test(char);
}

runWithInput(__dirname, "03.input", main);
