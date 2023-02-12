import React from "react";
import SankeyDiagram from "./SankeyDiagram";
import "./Main.css";
import Overview from "./Overview";
import OffsetAnalysis from "./OffsetAnalysis";
import MetricsBenchmark from "./MetricsBenchmark";
import RecentlyViewed from "./RecentlyViewed";
import SettingNav from "./SettingNav";

const Main = () => {
  const [userName, setUserName] = React.useState<string>("Amanda");

  return (
    <div className="main">
      <SettingNav />
      <div className="comp_wrapper">
        <span className="welcome_note">Welcome back {userName}</span>
      </div>
      <div className="main_wrapper main_wrapper_1">
        <Overview />
        <SankeyDiagram />
      </div>
      <div className="main_wrapper main_wrapper_2">
        <OffsetAnalysis />
        <MetricsBenchmark />
        <RecentlyViewed />
      </div>
    </div>
  );
};

export default Main;
