import { runWithInput } from "../runWithInput";

function main(input: string): void {
	console.time();
	const { seeds, maps } = parseInput(input);
	console.log(findLowestLocation(seeds, maps));
	console.timeEnd();
	// 4 minutes lol
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

function findLowestLocation(seeds: number[], maps: Maps): number {
	if (seeds.length % 2 !== 0) {
		return -1;
	}

	let lowestLocation = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < seeds.length; i += 2) {
		const value = seeds[i];
		const count = seeds[i + 1];

		for (let j = 0; j < count; j++) {
			const seed = value + j;

			const location = mapSeed(seed, maps);

			if (location < lowestLocation) {
				lowestLocation = location;
			}
		}
	}

	return lowestLocation;
}

function mapSeed(seed: number, maps: Maps): number {
	return maps.reduce((accumulator, map) => {
		const match = map.find(
			(range) => range.start <= accumulator && accumulator <= range.end,
		);

		return match === undefined ? accumulator : accumulator + match.shift;
	}, seed);
}

runWithInput(__dirname, "05.input", main);
