import React from "react";
import "./Forum.css";

const ForumView = props => {
  const { threadBoxes } = props;

  return (
    <div>
      <p style={{color:'white', fontSize:'40px', paddingTop:"80px", fontWeight: 'bold'}}> Forum </p>

      <div style={{backgroundColor: '#18181b', width:'90%', borderRadius:'10px', margin:'auto', paddingTop:'20px', paddingBottom:'20px'}}>
        <table id="threads">
          <tr style={{fontSize:'26px'}}>
            <th> Topic </th>
            <th> Created By </th>
            <th> Replies </th>
          </tr>
          {threadBoxes}
        </table>
      </div>


    </div>
  );
};

export default ForumView;
