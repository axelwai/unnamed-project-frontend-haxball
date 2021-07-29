/**
 * for medical reasons, all dates are expected to be (and should be)
 * milliseconds elapsed since January 1, 1970 00:00:00 UTC.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
 * @see https://www.youtube.com/watch?v=-5wpm-gesOY
 */
import {
	randonIntBetween,
	dateToString,
} from '../utils';

function createDummyMatches(amount) {
	const DAY = 1000 * 60 * 60 * 24;
	const matches = [];
	let created = 0;

	while(created < amount) {
		created++
		matches.push({
			'date': Date.now() + DAY * created,
			'pleaseTellMeWhatAmI': 'L' + randonIntBetween(1, 2),
			'team1': {
				'name': 'team left',
				'score': randonIntBetween(0, 5),
			},
			'team2': {
				'name': 'team right',
				'score': randonIntBetween(0, 5),
			},
		});
	}

	return matches;
}
function matchToRow(match, rowIndex) {
	return (
		<tr key={rowIndex}>
			<td>{dateToString(match.date)}</td>
			<td>{match.pleaseTellMeWhatAmI}</td>
			<td className="team1">{match.team1.name}</td>
			<td>{match.team1.score}</td>
			<td>-</td>
			<td>{match.team2.score}</td>
			<td>{match.team2.name}</td>
		</tr>
	);
}

export default function MatchesTable({matches = createDummyMatches(20)}) {
	const rows = matches.map(matchToRow);
	return (
		<table className="matchesTable">
			<tbody>
				{rows}
			</tbody>
		</table>
	);
}