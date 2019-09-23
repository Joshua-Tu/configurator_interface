import React, { Component } from "react";
import { InputNumber } from "antd";
import MinMaxPair from "./MinMaxPair";

class Parameters extends Component {
  render() {
    return (
      <div>
        <MinMaxPair min="40" max="55" onClick="someMethod" />
      </div>
    );
  }
}

export default Parameters;
