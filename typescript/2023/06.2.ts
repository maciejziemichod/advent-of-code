import { runWithInput } from "../runWithInput";

function main(input: string): void {
	const { time, distance } = parseInput(input);
	console.log(getWinningRacesAmount(time, distance));
}

type Race = {
	time: number;
	distance: number;
};

function parseInput(input: string): Race {
	const [time, distance] = input
		.trim()
		.split("\n")
		.map((line) => parseInt(line.replace(/\D/gi, ""), 10));

	return { time, distance };
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

runWithInput(__dirname, "06.input", main);
