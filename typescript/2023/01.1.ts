import { runWithInput } from "../runWithInput";

function main(input: string): void {
	console.log(sumCalibrationValues(input));
}

function sumCalibrationValues(input: string): number {
	return removeNonDigits(input)
		.split("\n")
		.map((line) => line.split(""))
		.map((digits) => parseInt(digits[0] + digits[digits.length - 1], 10))
		.reduce((accumulator, value) => accumulator + value, 0);
}

function removeNonDigits(input: string): string {
	return input.replaceAll(/[^0-9\n]/g, "").trim();
}

runWithInput(__dirname, "01.input", main);
