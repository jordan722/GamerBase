import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import AddUserView from "./AddCampusView";

import { addUserThunk } from "../../actions";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      location: "",
      imageUrl:
        "https://s29068.pcdn.co/wp-content/uploads/hunter-new-york-city-street-view.jpg"
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let campus = {
      name: this.state.name,
      email: this.state.email,
      location: this.state.location,
      imageUrl: this.state.imageUrl
    };
    this.props.addCampus(campus);
    this.props.history.push(".");
  };

  render() {
    return (
      <div>
        <AddUserView
          name={this.state.name}
          email={this.state.email}
          location={this.state.location}
          imageUrl={this.state.imageUrl}
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
