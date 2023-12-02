import { runWithInput } from "../runWithInput";

type CubesSet = {
	red: number;
	green: number;
	blue: number;
};

type Game = {
	id: number;
	rounds: CubesSet[];
};

function main(input: string): void {
	console.log(sumCubesSetsPower(findMinCubesSet(parseInput(input))));
}

function parseInput(input: string): Game[] {
	return input
		.trim()
		.split("\n")
		.map((line) => line.split(": "))
		.map(([id, rounds]) => ({
			id: parseInt(id.replaceAll(/\D/g, ""), 10),
			rounds: rounds.split("; ").map((round) =>
				round
					.split(", ")
					.map((cube) => cube.split(" "))
					.map(([amount, color]) => [parseInt(amount, 10), color])
					.reduce(
						(cubes: CubesSet, [amount, color]) => {
							cubes[color as keyof CubesSet] += amount as number;

							return cubes;
						},
						{ red: 0, green: 0, blue: 0 },
					),
			),
		}));
}

function findMinCubesSet(games: Game[]): CubesSet[] {
	return games.map(({ rounds }) =>
		rounds.reduce(
			(minCubes, round) => ({
				red: Math.max(minCubes.red, round.red),
				blue: Math.max(minCubes.blue, round.blue),
				green: Math.max(minCubes.green, round.green),
			}),
			{
				red: 0,
				green: 0,
				blue: 0,
			},
		),
	);
}

function sumCubesSetsPower(sets: CubesSet[]): number {
	return sets
		.map(({ green, blue, red }) => green * blue * red)
		.reduce((accumulator, value) => accumulator + value, 0);
}

runWithInput(__dirname, "02.input", main);
