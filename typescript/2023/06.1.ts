import { runWithInput } from "../runWithInput";

function main(input: string): void {
	console.log(
		countRecordsPermutations(
			parseInput(input).map((race) =>
				getWinningRacesAmount(race.time, race.distance),
			),
		),
	);
}

type Race = {
	time: number;
	distance: number;
};

function parseInput(input: string): Race[] {
	const parts = input
		.trim()
		.split("\n")
		.map((line) =>
			line
				.replace(/\s+/g, " ")
				.split(" ")
				.slice(1)
				.map((str) => parseInt(str, 10)),
		);

	const races: Race[] = [];

	for (let i = 0; i < parts[0].length; i++) {
		races.push({ time: parts[0][i], distance: parts[1][i] });
	}

	return races;
}

function getWinningRacesAmount(
	time: number,
	recordDistance: number,
	speed: number = 1,
): number {
	let count = 0;

	for (let hold = 1; hold < time; hold++) {
		const distance = (time - hold) * (hold * speed);

		if (distance > recordDistance) {
			count++;
		}
	}

	return count;
}

function countRecordsPermutations(races: number[]): number {
	return races.reduce((accumulator, race) => accumulator * race);
}

runWithInput(__dirname, "06.input", main);
