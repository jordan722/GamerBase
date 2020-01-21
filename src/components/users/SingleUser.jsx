import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./user.css";

import LinkButton from "../utilities/LinkButton";

import { getUserThunk, removeUserThunk } from "../../actions";

class SingleUser extends Component {
  constructor(props) {
    super(props);
    props.getUser(this.props.userId);
  }

  render() {
    let userInfo = null;
    if (this.props.currUser) {
      const user = this.props.currUser;
      userInfo = (
        <div>
          <div>
            <h3>{user.name}</h3>
            Email: {user.email} <br />
            user: {user.id}
          </div>
          <Link
            className="button"
            to="/users"
            onClick={() => this.props.removeUser(user.id)}
          >
            Remove user
          </Link>
          <LinkButton className="button" to="/users">
            All Users
          </LinkButton>
          <LinkButton className="button" to={`/users/${user.id}/edit-user`}>
            Edit User
          </LinkButton>
        </div>
      );
    }
    return <div>{userInfo}</div>;
  }
}

const mapStateToProps = state => ({
  userId: parseInt(window.location.pathname.split("/")[2]),
  currUser: state.user.currUser
});

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(getUserThunk(id)),
  removeUser: user => dispatch(removeUserThunk(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleUser);
