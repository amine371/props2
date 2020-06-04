import React from "react";
import PropTypes from "prop-types";
import Profile from "./Profile/Profile";
import image from "./amine.jpg";
import "./App.css";

function App() {
  return (
    <Profile fullName="amine" profession="Student">
      <img src={image} alt="img" />
    </Profile>
  );
}

Profile.proptypes = {
  fullName: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  bio: PropTypes.string
};

export default App;
