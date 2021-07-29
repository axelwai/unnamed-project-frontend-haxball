export function randonIntBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export function dateToString(date) {
	date = new Date(date);
	return [
		fancyNumber(date.getDate()),
		getMonthName(date.getMonth()).slice(0, 3),
	].join(' ');
}

function fancyNumber(number) {
	switch(number) {
		case 1: return `${number}st`; 
		case 2: return `${number}nd`; 
		case 3: return `${number}rd`; 
		default: return `${number}th`; 
	}
}

function getMonthName(monthNumber) {
	return [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	][monthNumber];
}