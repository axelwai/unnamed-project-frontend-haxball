import { Switch, Route } from 'react-router-dom';
import About from './About';
import SideBar from './SideBar';

export default function PageBody() {
	return (
		<div className="pageBody">
			<Switch>
				<Route path="/about" component={About} />
				<Route>
					<main>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum et quod veniam quia architecto! Enim voluptatibus exercitationem reiciendis similique! Neque.
					</main>
				</Route>
			</Switch>
			<SideBar />
		</div>
	);
}