import { runWithInput } from "../runWithInput";

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const WIN = 6;
const DRAW = 3;
const LOSS = 0;

function main(input: string): void {
	console.log(calculateScore(input));
}

function calculateScore(input: string): number {
	return input
		.trim()
		.replaceAll(/A|X/g, ROCK.toString())
		.replaceAll(/B|Y/g, PAPER.toString())
		.replaceAll(/C|Z/g, SCISSORS.toString())
		.split("\n")
		.map((round) => round.split(" ").map((move) => parseInt(move, 10)))
		.map(([enemy, me]) => me + calculateResult(enemy, me))
		.reduce((accumulator, value) => accumulator + value, 0);
}

function calculateResult(enemy: number, me: number): number {
	if (me === enemy) {
		return DRAW;
	}

	if (me === ROCK) {
		return enemy === SCISSORS ? WIN : LOSS;
	}

	return me - enemy === 1 ? WIN : LOSS;
}

runWithInput(__dirname, "02.input", main);
