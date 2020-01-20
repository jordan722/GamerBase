import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import AddUserView from "./AddUserView";

import { addUserThunk } from "../../actions";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      location: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let user = {
      name: this.state.name,
      email: this.state.email,
      location: this.state.location
    };
    this.props.addUser(user);
    this.props.history.push(".");
  };

  render() {
    return (
      <div>
        <AddUserView
          name={this.state.name}
          email={this.state.email}
          location={this.state.location}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapState = state => {
  return {
    allUsers: state.user.allUsers
  };
};

const mapDispatch = dispatch => {
  return {
    addUser: user => dispatch(addUserThunk(user))
  };
};

export default connect(mapState, mapDispatch)(withRouter(AddUser));
