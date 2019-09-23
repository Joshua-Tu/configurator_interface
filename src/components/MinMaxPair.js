import React, { Component } from "react";
import { InputNumber } from "antd";

class MinMaxPair extends Component {
  state = {
    min: parseInt(this.props.min),
    max: parseInt(this.props.max)
  };

  onChangeMin = value => {
    console.log("Min changed", value);
    this.setState({ min: value });
    console.log("Min is ", this.state.min);
    if (value === null || value > this.state.max || value > 120) {
      this.setState({ min: this.state.max });
    }
  };

  onChangeMax = value => {
    console.log("Max changed", value);
    this.setState({ max: value });
    console.log("Max is ", this.state.max);
    if (value === null || value < this.state.min || value < 1) {
      this.setState({ max: this.state.min });
    }
  };

  render() {
    return (
      <div>
        <InputNumber
          min={1}
          max={this.state.max}
          defaultValue={this.state.min}
          onChange={this.onChangeMin}
        />

        <InputNumber
          min={this.state.min}
          max={120}
          defaultValue={this.state.max}
          onChange={this.onChangeMax}
        />
      </div>
    );
  }
}

export default MinMaxPair;
