import React from "react";
import { CiSettings } from "react-icons/ci";
import SettingDropdown from "./SettingDropdown";
import "./SettingNav.css";

const SettingNav = () => {
  return (
    <div className="settingnav">
      <div className="settingnav_left">
        <div>
          <SettingDropdown />
        </div>
        <div>
          Currency: <span>USD</span>
        </div>
      </div>

      <div className="settingnav_right">
        <CiSettings />
        <div> Engagement Settings</div>
      </div>
    </div>
  );
};

export default SettingNav;
