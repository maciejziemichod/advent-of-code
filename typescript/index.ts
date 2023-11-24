(async () => {
	if (process.argv.length !== 4) {
		console.error("provide year and file name arguments");
		process.exit(1);
	}

	const year = process.argv[2];
	const name = process.argv[3];
	const path = `./${year}/${name}.ts`;

	try {
		await import(path);
	} catch (e) {
		console.error(e);
	}
})();
