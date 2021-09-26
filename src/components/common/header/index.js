import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-container">
          <div>THis is location</div>
          <div className="location-search-separator"></div>
          <div>This is search</div>
        </div>

        <div>THis is profile</div>
      </div>
    </div>
  );
};

export default Header;
