import React from "react";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";
import './TrailerModal.css'

class TrailerModal extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <button className="trailer" onClick={this.showModal}>
          See Trailer
        </button>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          bodyStyle={{
            backgroundColor: "black",
            padding: "0px",
            margin: "0px"
          }}
          footer={null}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3KgmY5NrEzU"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </Modal>
      </div>
    );
  }
}

export default TrailerModal;
