import React, { Component } from "react";
import { connect } from "react-redux";
import "./user.css";

import LinkButton from "../utilities/LinkButton";
import UserCard from "./UserCard";

import { getUsersThunk } from "../../actions";

class AllUsers extends Component {
  constructor(props) {
    super(props);
    props.getAllUsers();
  }

  render() {
    const { allUsers } = this.props;
    let userCards = null;

    if (allUsers !== undefined && allUsers.length === 0) {
      userCards = <div className="notFound"> No users currently listed! </div>;
    } else if (allUsers) {
      userCards = allUsers.map((user, index) => (
        <UserCard key={index} user={user} />
      ));
    }

    return (
      <div className="all-users-container">
        <h1>All Users</h1>
        <div className="user-card-container">{userCards}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allUsers: state.user.allUsers
});

const mapDispatchToProps = dispatch => ({
  getAllUsers: () => dispatch(getUsersThunk())
});

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
