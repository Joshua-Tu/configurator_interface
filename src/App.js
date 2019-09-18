import React from "react";
import SettingsPage from "./components/SettingsPage";
import MyTag from "./components/MyTag";

const App = () => {
  return (
    <>
      <SettingsPage>
        <MyTag>Chrome</MyTag>
        {/* <MyTag>Firefox</MyTag>
        <MyTag>Explorer</MyTag>
        <MyTag>Safari</MyTag>
        <MyTag>Opera</MyTag>
        <MyTag>Incognito</MyTag> */}
      </SettingsPage>
    </>
  );
};
export default App;
