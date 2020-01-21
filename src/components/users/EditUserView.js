import React from "react";

import LinkButton from "../utilities/LinkButton";

const EditUserView = props => {
  const { name, email, location, bio, id, handleSubmit, handleChange } = props;

  return (
    <>
      <div>
        <h1>Edit User</h1>
        <div />
        <div className="input">
          <form
            style={{
              display: "flex",
              flexDirection: "column"
            }}
            onSubmit={handleSubmit}
          >
            <div>
              {" "}
              Name:
              <input
                className="box"
                name="name"
                type="text"
                value={name}
                onChange={handleChange}
                required
              />{" "}
            </div>
            <div>
              {" "}
              Email:{" "}
              <input
                className="box"
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              Location:
              <input
                className="box"
                name="location"
                type="text"
                value={location}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <p class="input_field">Location:</p>
              <input
                className="box"
                name="bio"
                type="text"
                value={bio}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input className="box" type="submit" value="Submit" id="submit" />
            </div>
          </form>
        </div>
      </div>
      <LinkButton className="button" to={`/users/${id}`}>
        {" "}
        Return to Users{" "}
      </LinkButton>
    </>
  );
};

export default EditUserView;
