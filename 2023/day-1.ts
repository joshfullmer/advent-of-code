async function day1Part1(filename: string) {
	const file = Bun.file(filename);

	const input = await file.text();

	return input.split('\n').reduce((sum, line) => {
		const lineNumbers = line.replace(/\D/g, '');

		if (lineNumbers.length === 0) return sum;

		return sum + parseInt(`${lineNumbers.at(0)}${lineNumbers.at(-1)}`, 10);
	}, 0);
}

const part1Result = await day1Part1('2023/day-1.txt');

console.log('Day 1 Part 1 Result:', part1Result);

const numbers = {
	one: 'o1e',
	two: 't2o',
	three: 't3e',
	four: 'f4r',
	five: 'f5e',
	six: 's6x',
	seven: 's7n',
	eight: 'e8t',
	nine: 'n9e',
};

async function day1Part2(filename: string) {
	const file = Bun.file(filename);

	const input = await file.text();

	return input
		.split('\n')
		.map((line) => {
			let currentLine = `${line}`;
			for (const [number, numberString] of Object.entries(numbers)) {
				currentLine = currentLine.replaceAll(number, numberString);
			}

			return currentLine;
		})
		.reduce((sum, line) => {
			const lineNumbers = line.replace(/\D/g, '');

			if (lineNumbers.length === 0) return sum;

			return sum + parseInt(`${lineNumbers.at(0)}${lineNumbers.at(-1)}`, 10);
		}, 0);
}

const part2Result = await day1Part2('2023/day-1.txt');

console.log('Day 1 Part 2 Result:', part2Result);
