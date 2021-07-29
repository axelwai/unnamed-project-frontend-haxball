import NavigtaionItem from './NavigationItem';

export default function NavigationBar() {
	return (
		<nav className="navigationBar">
			<NavigtaionItem href="/" text="Home"/>
			<NavigtaionItem href="/about" text="About"/>
		</nav>
	)
}