import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
function App() {
	return (
		<div>
			<Nav />
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/profile" component={Profile} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
