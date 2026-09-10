import React from "react";
import ReactDOM from "react-dom/client";

const styleCard = {
  backgroundColor: "#F3DAD8",
}

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1 id="mainIcon">
          <i>
            <b>FoodSite</b>
          </i>
        </h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2026/2/8/046d2492-b606-4a4f-b395-ffe59ded7143_a7c263a5-750c-4d98-a3fa-b45a37471039.JPG" />
      <h3>Megana Foods</h3>
      <h4>Biriyani, South Indian, Pan-Asian</h4>
      <h4>20mins</h4>
      <h4>4.5 stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
