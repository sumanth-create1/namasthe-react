import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToRDT1WsNEwjFGAAcO1lFpQs66pjhkJ5T0PRtI0-4KWg&s=10"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Log In</li>
          <li>SignIn</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <div className="res-logo-container">
        <img src={props.foodLogo} />
      </div>
      {/* res-Info */}

      <div className="res-Info">
        <div className="restaurant-name-row">
          <h3>{props.resName}</h3>

          <span className="rating">{props.rating}⭐</span>
        </div>

        <div className="details-row">
          <span className="cuisine">{props.cuisine}</span>

          <span className="price">₹ {props.price} for one</span>
        </div>

        <div className="time">{props.time} min</div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          foodLogo="https://b.zmtcdn.com/data/pictures/3/18826243/d422a41eca24ea574443bbf680875d66_o2_featured_v2.jpg"
          resName="Hotel Riyaz"
          rating="3.8"
          cuisine="Biriyani, kebab"
          price="150"
          time="29"
        />
        <RestaurantCard
          foodLogo="https://b.zmtcdn.com/data/pictures/8/21772208/81389ebffc03243769353ada46c5666f_o2_featured_v2.jpg"
          resName="Raju Gari Kodi Pulao"
          rating="4.0"
          cuisine="Middle Eastern ,South Indian"
          price="250"
          time="24"
        />
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
