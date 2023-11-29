import { runWithInput } from "../runWithInput";

function main(input: string): void {
	const [stacksInput, commands] = parseInput(input);
	const stacks = parseStacks(stacksInput);
	const rearrangedStacks = rearrangeStacks(stacks, commands);
	console.log(getTopStackItems(rearrangedStacks));
}

function parseInput(input: string): [string[][], number[][]] {
	const [stacks, commands] = input.split("\n\n");
	return [
		stacks
			.split("\n")
			.reverse()
			.slice(1)
			.map((row) => row.match(/.{1,4}/g)!.map((element) => element[1])),
		commands
			.trim()
			.split("\n")
			.map((command) =>
				command
					.split(" ")
					.map((element) => parseInt(element, 10))
					.filter((element) => !Number.isNaN(element)),
			),
	];
}

function parseStacks(input: string[][]): string[][] {
	return input.reduce(
		(accumulator, value) =>
			accumulator.map((stack, index) => {
				const item = value[index];
				return item === " " ? stack : [...stack, item];
			}),
		new Array(input[0].length).fill([]),
	);
}

function rearrangeStacks(
	stacks: string[][],
	commmands: number[][],
): string[][] {
	const newStacks = stacks.map((stack) => [...stack]);

	commmands.forEach(([amount, source, target]) => {
		for (let i = 1; i <= amount; i++) {
			const item = newStacks[source - 1].pop();
			if (item !== undefined) {
				newStacks[target - 1].push(item);
			}
		}
	});

	return newStacks;
}

function getTopStackItems(stacks: string[][]): string {
	return stacks.map((stack) => stack[stack.length - 1]).join("");
}

runWithInput(__dirname, "05.input", main);
