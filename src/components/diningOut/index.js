import React from "react";
import { dining } from "../../data/dining";
import ExploreSection from "../common/exploreSection";
import Filters from "../common/filters";
import "./diningOut.css";

const diningList = dining;
const diningFilters = [
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
    title: "Online Bookings",
  },
  {
    id: 4,
    title: "Outdoor Seating",
  },
  {
    id: 6,
    title: "Rating: 4.0+",
  },
  {
    id: 7,
    title: "Cuisines",
    icon: <i className="fi fi-rr-angle-down absolute-center"></i>,
  },
  {
    id: 8,
    title: "Cafes",
  },
  {
    id: 9,
    title: "Open Now",
  },
];

const DiningOut = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={diningFilters} />
      </div>
      <ExploreSection
        restaurants={diningList}
        collectionName="Dine-Out Restaurants in Bangalore"
      />
    </div>
  );
};

export default DiningOut;
