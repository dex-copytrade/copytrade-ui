import { useState } from "react";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import { Route, Routes } from "react-router-dom";
import { ConfigProvider } from "react-vant";

const themeVars = {
};

function App() {

  return (
    <div className="App">
      <ConfigProvider themeVars={themeVars}>
        <Routes>
          <Route path="/page1" element={<Page1 />}>
          </Route>
          <Route path="/page2" element={<Page2 />}>
          </Route>
        </Routes>
      </ConfigProvider>
    </div>
  );
}

export default App;

