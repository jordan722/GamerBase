import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./Home.css";

//

const HomeView = props => {
  const { state, menu, onUpdate, ArrowLeft, ArrowRight } = props;

  return (
    <div>
      <h2 className="Heading"> Trending Games </h2>
      <div className="scroll">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          hideArrows={state.hideArrows}
          hideSingleArrow={state.hideSingleArrow}
          transition={+state.transition}
          onUpdate={onUpdate}
          onSelect={state.TrendingOnSelect}
          setSelected={state.trendingSetSelected}
          selected={state.selected}
          translate={state.trendingTranslate}
          alignCenter={state.alignCenter}
          scrollToSelected={true}
          dragging={state.dragging}
          wheel={state.wheel}
        />
      </div>
      <h2 className="Heading">Top 100</h2>
      <div className="scroll">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          hideArrows={state.hideArrows}
          hideSingleArrow={state.hideSingleArrow}
          transition={+state.transition}
          onUpdate={onUpdate}
          onSelect={state.tip100OnSelect}
          setSelected={state.top100SetSelected}
          selected={state.top100Selected}
          translate={state.top100translate}
          alignCenter={state.alignCenter}
          scrollToSelected={true}
          dragging={state.dragging}
          wheel={state.wheel}
        />
      </div>
      <h2 className="Heading">Upcoming</h2>
      <div className="scroll">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          hideArrows={state.hideArrows}
          hideSingleArrow={state.hideSingleArrow}
          transition={+state.transition}
          onUpdate={onUpdate}
          onSelect={state.upcomingOnSelect}
          setSelected={state.upcomingSetSelected}
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
