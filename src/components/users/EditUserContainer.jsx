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
      imageUrl:
        "https://s3.amazonaws.com/freestock-prod/450/freestock_565622158.jpg"
    };
  }

  componentDidMount() {
    //Error check if user attmepts to edit non existant user
    if (this.props.currUser !== undefined) {
      this.setState({
        name: this.props.currUser.name,
        email: this.props.currUser.email,
        location: this.props.currUser.location,
        imageUrl: this.props.currUser.imageUrl
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
    let campus = {
      name: this.state.name,
      email: this.state.email,
      location: this.state.location,
      imageUrl: this.state.imageUrl
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
          imageUrl={this.state.imageUrl}
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
    campusId: parseInt(window.location.pathname.split("/")[2]),
    currCampus: state.campus.currCampus
  };
};

const mapDispatch = dispatch => {
  return {
    editCampus: (campus, campusId) =>
      dispatch(editCampusThunk(campus, campusId)),
    getCampus: id => dispatch(getCampusThunk(id))
  };
};

export default connect(mapState, mapDispatch)(withRouter(EditCampus));
