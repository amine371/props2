import React from "react";

const Profile = props => {
  const handleName = () => {
    alert(`Profile: ${props.fullName}`);
  };
  return (
    <div>
      <div style={{ margin: 40 }}>
        <h1 style={{ textTransform: "uppercase" }}>{props.fullName}</h1>
      </div>
      <div style={{ color: "red" }}>
        {props.profession}
        <p style={{ color: "red" }}>{props.bio}</p>
        {props.children}
      </div>
      <button onClick={handleName} type={{ color: "red" }}>
        Click
      </button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "No Name",
  bio: "No Biography",
  profession: "No Profession"
};
export default Profile;

