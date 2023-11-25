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
		.replaceAll(/A/g, ROCK.toString())
		.replaceAll(/B/g, PAPER.toString())
		.replaceAll(/C/g, SCISSORS.toString())
		.replaceAll(/X/g, LOSS.toString())
		.replaceAll(/Y/g, DRAW.toString())
		.replaceAll(/Z/g, WIN.toString())
		.split("\n")
		.map((round) => round.split(" ").map((move) => parseInt(move, 10)))
		.map(([enemy, result]) => result + calculateMove(enemy, result))
		.reduce((accumulator, value) => accumulator + value, 0);
}

function calculateMove(enemy: number, result: number): number {
	switch (result) {
		case WIN:
			return enemy === SCISSORS ? ROCK : enemy + 1;
		case LOSS:
			return enemy === ROCK ? SCISSORS : enemy - 1;
		default:
			return enemy;
	}
}

runWithInput(__dirname, "02.input", main);
