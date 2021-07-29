import Banner from './Banner';
import UserBar from './UserBar';
import NavigationBar from './NavigationBar';

export default function Header() {
	return (
		<header>
			<UserBar></UserBar>
			<Banner></Banner>
			<NavigationBar></NavigationBar>
		</header>
	);
};