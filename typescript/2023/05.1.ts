import { runWithInput } from "../runWithInput";

function main(input: string): void {
	const { seeds, maps } = parseInput(input);
	console.log(Math.min(...mapSeeds(seeds, maps)));
}

type Maps = {
	start: number;
	end: number;
	shift: number;
}[][];

function parseInput(input: string): {
	seeds: number[];
	maps: Maps;
} {
	const parts = input.trim().split("\n\n");

	return {
		seeds: parts[0]
			.split(" ")
			.slice(1)
			.map((str) => parseInt(str, 10)),
		maps: parts
			.slice(1)
			.map((part) =>
				part
					.split("\n")
					.slice(1)
					.map((range) =>
						range.split(" ").map((str) => parseInt(str, 10)),
					),
			)
			.map((map) =>
				map.map(([target, source, range]) => ({
					start: source,
					end: source + range - 1,
					shift: target - source,
				})),
			),
	};
}

function mapSeeds(seeds: number[], maps: Maps): number[] {
	return seeds.map((seed) =>
		maps.reduce((accumulator, map) => {
			const match = map.find(
				(range) =>
					range.start <= accumulator && accumulator <= range.end,
			);

			return match === undefined
				? accumulator
				: accumulator + match.shift;
		}, seed),
	);
}

runWithInput(__dirname, "05.input", main);
