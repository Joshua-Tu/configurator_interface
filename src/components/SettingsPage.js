import React, { Component } from "react";
import { Icon, Row, Col } from "antd";

class SettingsPage extends Component {
  handleExport = () => {
    console.log("exported");
  };

  handleStop = () => {
    console.log("stopped");
  };

  handleStart = () => {
    console.log("started");
  };

  render() {
    return (
      <div>
        <Row>
          <Col span={1}>
            <Icon type="setting" theme="filled" />
          </Col>
          <Col span={4}>
            <h3>Settings</h3>
          </Col>
        </Row>
        <br />
        {this.props.children}
        <br />

        <Row>
          <Col span={8}>
            <button
              className="ui inverted green button"
              onClick={this.handleExport}
            >
              EXPORT REPORT
            </button>
          </Col>

          <Col span={8}>
            <button
              className="ui inverted orange button"
              onClick={this.handleStop}
            >
              STOP
            </button>
          </Col>

          <Col span={8}>
            <button
              className="ui inverted pink button"
              onClick={this.handleStart}
            >
              START
            </button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SettingsPage;
