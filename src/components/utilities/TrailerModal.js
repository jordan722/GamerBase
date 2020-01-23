import React from "react";
import "antd/dist/antd.css";
import { Modal } from "antd";
import './TrailerModal.css'

class TrailerModal extends React.Component {
  constructor(props){
    super(props);
  }

  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <button className="trailer" onClick={this.showModal}>
          See Clip
        </button>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          bodyStyle={{
            backgroundColor: "black",
            padding: "0px",
            margin: "0px",
            color:'white'
          }}
          centered={true}
          footer={null}
        >
          <iframe
            width="560"
            height="315"
            src={this.props.video}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Modal>
      </div>
    );
  }
}

export default TrailerModal;
