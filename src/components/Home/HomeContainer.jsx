import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Home.css";
import HomeView from "./HomeView";

import { getHomeGamesThunk } from "../../actions";

const list = [
  {
    name: "League of Legends",
    img:
      "https://i.pinimg.com/originals/68/4e/df/684edf3c1cddd4bee8316a21ff426057.png"
  },
  {
    name: "Fortnite",
    img:
      "https://gamepedia.cursecdn.com/fortnite_gamepedia/archive/6/64/20190303040235%21Favicon.ico"
  },
  {
    name: "Clash of Clans",
    img:
      "https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/8c/f8/f6/8cf8f6ff-a555-ff7b-6f1b-1356d267e80c/source/256x256bb.jpg"
  },
  {
    name: "Megaman Zero",
    img:
      "https://upload.wikimedia.org/wikipedia/en/9/92/Mega_Man_Zero_cover.jpg"
  },
  {
    name: "Mario Party Advance",
    img:
      "https://m.media-amazon.com/images/M/MV5BZWE3YmZkMTctZmZiOC00Mzc3LWEyNjQtYjIwYjRlMzVjYmQ0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjg3MDM4Mzc@._V1_.jpg"
  }
];

const MenuItem = ({ img, selected }) => {
  return (
    <div className={`menu-item ${selected}`}>
      <img src={img} />
    </div>
  );
};

export const Menu = (list, selected) =>
  list.map(el => {
    const { name, img } = el;

    return <MenuItem img={img} key={name} selected={selected} />;
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
    itemsCount: list.length,
    selected: "item1",
    translate: 0,
    upcomingTranslate: 0,
    top100Translate: 0,
    trendingTranslate: 0,
    transition: 0.3,
    wheel: false
  };

  constructor(props) {
    super(props);
    props.getHomeGames();
    this.menu = null;
    this.menuItems = Menu(list, this.state.selected);
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
        <HomeView
          state={this.state}
          trending={this.props.trending}
          toprated={this.props.toprated}
          upcoming={this.props.upcoming}
          menu={this.menuItems}
          onUpdate={this.onUpdate}
          onSelect={this.onSelect}
          setSelected={this.setSelected}
          ArrowLeft={ArrowLeft}
          ArrowRight={ArrowRight}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trending: state.game.trending,
  toprated: state.game.toprated,
  upcoming: state.game.upcoming,
});

const mapDispatchToProps = dispatch => ({
  getHomeGames: () => dispatch(getHomeGamesThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
