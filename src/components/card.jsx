import React from "react";
import Info from "./info.jsx";
import Avatar from "./avatar.jsx";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar image={props.image} />
      </div>
      <div className="bottom ">
        <Info detail={props.contact} />
        <Info detail={props.email} />
      </div>
    </div>
  );
}

export default Card;
