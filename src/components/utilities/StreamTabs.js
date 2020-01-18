import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const StreamTabs = () => {
  return(
    <div style={{width:'85%', margin:'0 auto', height:'600px', overflowY:'auto'}}>
      <Tabs
        defaultActiveKey="1"
        tabBarStyle={{ backgroundColor: "black", color: "#8545e1"}}
        style={{ backgroundColor: "#18181b", borderRadius:'10px', boxShadow: '0 0 10px black' }}
        tabBarGutter={100}
      >
        <TabPane tab="Twitch" key="1">
          <div>
            <a href="http://google.com">
              <img className="stream-box" src="https://i.ytimg.com/vi/Kavmf3RYEjI/maxresdefault.jpg"/>
            </a>
            <a href="http://google.com">
              <img className="stream-box-blue" src="https://i.ytimg.com/vi/Kavmf3RYEjI/maxresdefault.jpg"/>
            </a>
              <a href="http://google.com">
            </a>
            <a href="http://google.com">
              <img className="stream-box" src="https://i.ytimg.com/vi/Kavmf3RYEjI/maxresdefault.jpg"/>
            </a>
            <a href="http://google.com">
              <img className="stream-box-blue" src="https://i.ytimg.com/vi/Kavmf3RYEjI/maxresdefault.jpg"/>
            </a>
          </div>
        </TabPane>
        <TabPane tab="Mixer" key="2">
          <div>
            <img className="stream-box" src="https://i.ytimg.com/vi/Tuxg1EY-lk4/maxresdefault.jpg"/>
            <img className="stream-box-blue" src="https://i.ytimg.com/vi/Tuxg1EY-lk4/maxresdefault.jpg"/>
            <img className="stream-box" src="https://i.ytimg.com/vi/Tuxg1EY-lk4/maxresdefault.jpg"/>
            <img className="stream-box-blue" src="https://i.ytimg.com/vi/Tuxg1EY-lk4/maxresdefault.jpg"/>
          </div>
        </TabPane>
        <TabPane tab="Youtube" key="3">
          <div>
            <img className="stream-box" src="https://i.pinimg.com/originals/c4/f6/ba/c4f6bae376fed4e064d0f6c4ed0a32c4.jpg"/>
            <img className="stream-box-blue" src="https://i.pinimg.com/originals/c4/f6/ba/c4f6bae376fed4e064d0f6c4ed0a32c4.jpg"/>
            <img className="stream-box" src="https://i.pinimg.com/originals/c4/f6/ba/c4f6bae376fed4e064d0f6c4ed0a32c4.jpg"/>
            <img className="stream-box-blue" src="https://i.pinimg.com/originals/c4/f6/ba/c4f6bae376fed4e064d0f6c4ed0a32c4.jpg"/>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default StreamTabs
