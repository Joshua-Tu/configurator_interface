import React from "react";
import "antd/dist/antd.css";
import SettingsPage from "./components/SettingsPage";
import BrowserType from "./components/BrowserType";
import Parameters from "./components/Parameters";

const App = () => {
  return (
    <div className="ui container">
      <SettingsPage>
        <BrowserType />
        <Parameters />
      </SettingsPage>
    </div>
  );
};
export default App;
