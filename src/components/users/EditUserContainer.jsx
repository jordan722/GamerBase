import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import EditUserView from "./EditUserView";

import { editUserThunk, getUserThunk } from "../../actions";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      location: "",
      bio: ""
    };
  }

  componentDidMount() {
    //Error check if user attmepts to edit non existant user
    if (this.props.currUser !== undefined) {
      this.setState({
        name: this.props.currUser.name,
        email: this.props.currUser.email,
        location: this.props.currUser.location,
        bio: this.props.currUser.bio
      });
    }
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
      location: this.state.location,
      bio: this.state.bio
    };
    console.log(this.props);
    this.props.editUser(user, this.props.currUser.id);
    this.props.history.push(".");
  };

  render() {
    if (this.props.currUser === undefined) {
      return <div>This user does not exist</div>;
    }

    return (
      <div>
        <EditUserView
          name={this.state.name}
          email={this.state.email}
          location={this.state.location}
          bio={this.state.bio}
          id={this.props.currUser.id}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapState = state => {
  return {
    userId: parseInt(window.location.pathname.split("/")[2]),
    currUser: state.user.currUser
  };
};

const mapDispatch = dispatch => {
  return {
    editUser: (user, userId) => dispatch(editUserThunk(user, userId)),
    getUser: id => dispatch(getUserThunk(id))
  };
};

export default connect(mapState, mapDispatch)(withRouter(EditUser));
