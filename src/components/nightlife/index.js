import React from "react";
import { nightLife } from "../../data/nightLife";
import ExploreSection from "../common/exploreSection";
import Filters from "../common/filters";
import "./nightlife.css";

const nightLifeList = nightLife;
const nightFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Pro Offers",
    icon: <i className="fi fi-rr-angle-down absolute-center"></i>,
  },
  {
    id: 3,
    title: "Distance",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 5,
    title: "Rating: 4.0+",
  },
  {
    id: 4,
    title: "Pubs & Bars",
  },
];

const Nightlife = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={nightFilters} />
      </div>
      <ExploreSection
        restaurants={nightLifeList}
        collectionName="Nightlife Restaurants in Bangalore"
      />
    </div>
  );
};

export default Nightlife;
