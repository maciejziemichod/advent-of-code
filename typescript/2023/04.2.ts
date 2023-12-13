import { runWithInput } from "../runWithInput";

function main(input: string): void {
	console.log(sumPiles(parsePiles(parseInput(input))));
}

type Pile = {
	instances: number;
	winning: number;
};

function parseInput(input: string): Pile[] {
	return input
		.trim()
		.split("\n")
		.map((line) =>
			line
				.split(": ")[1]
				.split(" | ")
				.map((group) =>
					group
						.split(" ")
						.map((char) => parseInt(char, 10))
						.filter((value) => !Number.isNaN(value)),
				),
		)
		.map(([winning, owned]) => ({
			instances: 1,
			winning: owned.filter((number) => winning.includes(number)).length,
		}));
}

function parsePiles(piles: Pile[]): Pile[] {
	const parsedPiles = structuredClone(piles);

	for (let i = 0; i < parsedPiles.length; i++) {
		const nextCards = parsedPiles[i].winning;
		const additionalInstances = parsedPiles[i].instances;

		for (
			let j = i + 1;
			j < i + 1 + nextCards && j < parsedPiles.length;
			j++
		) {
			parsedPiles[j].instances += additionalInstances;
		}
	}

	return parsedPiles;
}

function sumPiles(piles: Pile[]): number {
	return piles.reduce((accumulator, pile) => accumulator + pile.instances, 0);
}

runWithInput(__dirname, "04.input", main);
