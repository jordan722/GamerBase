import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

import { Home, NavBar, Game, Forum, Thread, Login, Signup } from "./components";

import { me } from "./actions";

class App extends Component {
	componentDidMount() {
		this.props.loadInitialData();
	}
	render() {
		return (
			<div className="App">
				<Router basename="">
					<NavBar />
					<div className="app-h">
						<Route exact path="/" render={() => <Home />} />
						<Route exact path="/forums" render={() => <Forum />} />
						<Route
							exact
							path="/forums/:threadId"
							render={props => <Thread {...props} />}
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

const mapDispatchToProps = dispatch => {
	return {
		loadInitialData: () => dispatch(me())
	};
};

export default connect(null, mapDispatchToProps)(App);
