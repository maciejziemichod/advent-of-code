import { runWithInput } from "../runWithInput";

function main(input: string): void {
	console.log(sumCalibrationValues(input));
}

function sumCalibrationValues(input: string): any {
	return input
		.trim()
		.split("\n")
		.map((line) => findDigits(line))
		.map((digits) => parseInt(digits[0] + digits[digits.length - 1], 10))
		.reduce((accumulator, value) => accumulator + value, 0);
}

function findDigits(input: string): string[] {
	const digitMap = {
		one: "1",
		two: "2",
		three: "3",
		four: "4",
		five: "5",
		six: "6",
		seven: "7",
		eight: "8",
		nine: "9",
	};
	const pattern =
		/(?=(zero|one|two|three|four|five|six|seven|eight|nine|\d))/gi;

	return [...input.matchAll(pattern)]
		.map((matches) => matches[1])
		.map((digit) =>
			digit in digitMap
				? digitMap[digit as keyof typeof digitMap]
				: digit,
		);
}

runWithInput(__dirname, "01.input", main);
