import { Link } from 'react-router-dom';

export default function NavigtaionItem({ href, text }) {
	return (
		<Link to={href}>
			{text}
		</Link>
	);
}