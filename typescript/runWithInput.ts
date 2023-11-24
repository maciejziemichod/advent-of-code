import { readFileSync } from "fs";
import { resolve } from "path";

export function runWithInput(
	dirname: string,
	path: string,
	fn: (input: string) => void,
): void {
	try {
		const absolutePath = resolve(dirname, path);

		const input = readFileSync(absolutePath, "utf-8");

		fn(input);
	} catch (error) {
		console.error(error);
	}
}
