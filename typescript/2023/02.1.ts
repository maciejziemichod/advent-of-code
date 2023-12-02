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
	const maxCubes: CubesSet = {
		red: 12,
		green: 13,
		blue: 14,
	};

	console.log(sumGamesIds(findPossibleGames(parseInput(input), maxCubes)));
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

function findPossibleGames(games: Game[], maxCubes: CubesSet): Game[] {
	return games.filter(({ rounds }) =>
		rounds.every(
			(round) =>
				round.green <= maxCubes.green &&
				round.blue <= maxCubes.blue &&
				round.red <= maxCubes.red,
		),
	);
}

function sumGamesIds(games: Game[]): number {
	return games.reduce((accumulator, { id }) => accumulator + id, 0);
}

runWithInput(__dirname, "02.input", main);
