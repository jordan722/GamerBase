import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Home.css";
import HomeView from "./HomeView";

import { getHomeGamesThunk } from "../../actions";

const MenuItem = ({ img, selected, name, id }) => {
	return (
		<div style={{ display: "inline-block" }} key={id}>
			<Link to={`/games/${id}`}>
				<img className="box-blue" src={img} alt="game thumbnail" />
				<div className="text">{name}</div>
			</Link>
		</div>
	);
};

export const Menu = (list, selected) =>
	list.map(el => {
		const { name, background_image, id } = el;

		return (
			<MenuItem
				img={background_image}
				name={name}
				id={id}
				key={name}
				selected={selected}
			/>
		);
	});

const Arrow = ({ text, className }) => {
	return <div className={className}>{text}</div>;
};
Arrow.propTypes = {
	text: PropTypes.string,
	className: PropTypes.string
};

export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

class Home extends Component {
	state = {
		alignCenter: true,
		clickWhenDrag: false,
		dragging: false,
		hideArrows: true,
		hideSingleArrow: true,
		selected: "item1",
		translate: 0,
		trendingOnSelect: "",
		trendingSetSelected: "",
		topratedOnSelect: "",
		topratedSetSelected: "",
		upcomingOnSelect: "",
		upcomingSetSelected: "",
		upcomingTranslate: 0,
		topratedTranslate: 0,
		trendingTranslate: 0,
		transition: 0.3,
		wheel: false
	};

	async componentDidMount(props) {
		if (!this.props.trending) {
			await this.props.getHomeGames();
		}
	}

	onUpdate = ({ translate }) => {
		console.log(`onUpdate: translate: ${translate}`);
		this.setState({ translate });
	};

	onSelect = key => {
		console.log(`onSelect: ${key}`);
		this.setState({ selected: key });
	};

	setSelected = ev => {
		const { value } = ev.target;
		this.setState({ selected: String(value) });
	};
	render() {
		return (
			<div className="App">
				{this.props.trending && this.props.toprated && this.props.upcoming && (
					<HomeView
						state={this.state}
						trending={Menu(this.props.trending, 1)}
						toprated={Menu(this.props.toprated, 1)}
						upcoming={Menu(this.props.upcoming, 1)}
						menu={this.menuItems}
						onUpdate={this.onUpdate}
						onSelect={this.onSelect}
						setSelected={this.setSelected}
						ArrowLeft={ArrowLeft}
						ArrowRight={ArrowRight}
					/>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		trending: state.game.trending.results,
		toprated: state.game.toprated.results,
		upcoming: state.game.upcoming.results
	};
};

const mapDispatchToProps = dispatch => ({
	getHomeGames: () => dispatch(getHomeGamesThunk())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
