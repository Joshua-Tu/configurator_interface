import React, { Component } from "react";
import MyTag from "./MyTag";

class BrowserType extends Component {
  render() {
    return (
      <>
        <MyTag>Chrome</MyTag>
        <MyTag>Firefox</MyTag>
        <MyTag defaultstatus="true">Explorer</MyTag>
        <MyTag>Safari</MyTag>
        <MyTag>Opera</MyTag>
        <MyTag defaultstatus="true">Incognito</MyTag>
      </>
    );
  }
}

export default BrowserType;
