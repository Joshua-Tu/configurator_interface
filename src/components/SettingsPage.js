import React from "react";

const SettingsPage = props => {
  return (
    <div>
      <h3>Settings</h3>
      <br />
      {props.children}
      <br />
      <button>Export Report</button>
      <button>Stop</button>
      <button>Start</button>
    </div>
  );
};

export default SettingsPage;
