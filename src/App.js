import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import {
	Home,
	NavBar,
	Game,
	AddUser,
	EditUser,
	SingleUser,
	Login,
	Signup
} from "./components";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router basename="">
					<NavBar />
					<div className="app-h">
						<Route exact path="/" render={() => <Home />} />
						<Route
							exact
							path="/users/:userId"
							render={props => <SingleUser {...props} />}
						/>
						<Route exact path="/users/add-user" render={() => <AddUser />} />
						<Route
							exact
							path="/users/:userid/edit-user"
							render={props => <EditUser {...props} />}
						/>
						<Route exact path="/games/:id" render={() => <Game />} />
						<Route exact path="/login" render={() => <Login />} />
						<Route exact path="/signup" render={() => <Signup />} />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
