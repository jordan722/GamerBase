import React from "react";
import { Link } from "react-router-dom";
import "./user.css";

const UserCard = props => {
  const user = props.user;
  return (
    <div className="user-card">
      <div className="user-info">
        <Link to={"/users/" + user.id}>{`Name: ${user.name}`}</Link>
        <p>{`User id: ${user.id}`}</p>
      </div>
    </div>
  );
};

export default UserCard;
