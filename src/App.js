import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import PageBody from './components/PageBody';
import './App.css';

function App() {
	return (
		<div className="app">
			<Router>
				<Header />
				<PageBody />
			</Router>
		</div>
	);
}

export default App;
