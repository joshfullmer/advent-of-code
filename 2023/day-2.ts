const MAX_RED = 12;
const MAX_GREEN = 13;
const MAX_BLUE = 14;

async function day2Part1() {
	const file = Bun.file('2023/day-2.txt');
	const input = await file.text();
	const lines = input.split('\n');
	return lines.reduce((sum, line) => {
		if (line.length === 0) return sum;

		const [game, pulls] = line.split(':');
		const gameId = game.replaceAll(/\D/g, '');
		const pullList = pulls.split(';');
		let isPullInvalid = false;

		for (const pull of pullList) {
			const pullColors = pull
				.trim()
				.split(',')
				.map((i) => i.trim());

			for (const pullColor of pullColors) {
				const [count, color] = pullColor.split(' ');
				if (color === 'red' && parseInt(count) > MAX_RED) {
					isPullInvalid = true;
					break;
				} else if (color === 'green' && parseInt(count) > MAX_GREEN) {
					isPullInvalid = true;
					break;
				} else if (color === 'blue' && parseInt(count) > MAX_BLUE) {
					isPullInvalid = true;
					break;
				}
			}
		}

		if (!isPullInvalid) {
			sum += parseInt(gameId, 10);
		}

		return sum;
	}, 0);
}

const part1Result = await day2Part1();
console.log('Day 2 Part 1 Result:', part1Result);

async function day2Part2() {
	const file = Bun.file('2023/day-2.txt');
	const input = await file.text();
	const lines = input.split('\n');
	return lines.reduce((sum, line) => {
		if (line.length === 0) return sum;

		const [game, pulls] = line.split(':');
		const gameId = game.replaceAll(/\D/g, '');
		const pullList = pulls.split(';');
		let redCount = 0;
		let greenCount = 0;
		let blueCount = 0;

		for (const pull of pullList) {
			const pullColors = pull
				.trim()
				.split(',')
				.map((i) => i.trim());

			for (const pullColor of pullColors) {
				const [count, color] = pullColor.split(' ');
				const countInt = parseInt(count, 10);
				if (color === 'red' && countInt > redCount) {
					redCount = countInt;
				} else if (color === 'green' && countInt > greenCount) {
					greenCount = countInt;
				} else if (color === 'blue' && countInt > blueCount) {
					blueCount = countInt;
				}
			}
		}

		const power = redCount * greenCount * blueCount;

		return sum + power;
	}, 0);
}

const part2Result = await day2Part2();
console.log('Day 2 Part 2 Result:', part2Result);
