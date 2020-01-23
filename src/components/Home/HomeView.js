import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./Home.css";

const HomeView = props => {
  const {
    state,
    menu,
    onUpdate,
    onSelect,
    setSelected,
    ArrowLeft,
    ArrowRight
  } = props;

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Trending Games -- Click arrow or drag items!</h2>
      <div className="scroll">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          hideArrows={state.hideArrows}
          hideSingleArrow={state.hideSingleArrow}
          transition={+state.transition}
          onUpdate={onUpdate}
          onSelect={onSelect}
          setSelected={setSelected}
          selected={state.selected}
          translate={state.trendingTranslate}
          alignCenter={state.alignCenter}
          scrollToSelected={true}
          dragging={state.dragging}
          wheel={state.wheel}
        />
      </div>
      <h2>Top 100</h2>
      <div className="scroll">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          hideArrows={state.hideArrows}
          hideSingleArrow={state.hideSingleArrow}
          transition={+state.transition}
          onUpdate={onUpdate}
          onSelect={onSelect}
          setSelected={setSelected}
          selected={state.selected}
          translate={state.top100translate}
          alignCenter={state.alignCenter}
          scrollToSelected={true}
          dragging={state.dragging}
          wheel={state.wheel}
        />
      </div>
      <h2>Upcoming</h2>
      <div className="scroll">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          hideArrows={state.hideArrows}
          hideSingleArrow={state.hideSingleArrow}
          transition={+state.transition}
          onUpdate={onUpdate}
          onSelect={onSelect}
          setSelected={setSelected}
          selected={state.selected}
          translate={state.upcomingTranslate}
          alignCenter={state.alignCenter}
          scrollToSelected={true}
          dragging={state.dragging}
          wheel={state.wheel}
        />
      </div>
    </div>
  );
};

export default HomeView;
