import React from "react";
import "./Forum.css";

const ForumView = props => {
  const { threadBoxes } = props;

  return (
    <div className="forum-container">
      <p style={{color:'white', fontSize:'40px', paddingTop:"80px", fontWeight: 'bold'}}> Forum </p>

      <table id="threads">
        <tr>
          <th> Topic </th>
          <th> Created By </th>
          <th> Replies </th>
        </tr>
        {threadBoxes}
      </table>


    </div>
  );
};

export default ForumView;
