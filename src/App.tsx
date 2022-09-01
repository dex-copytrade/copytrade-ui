import { useState } from "react";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/page1" element={<Page1 />}>  </Route>
        <Route path="/page2" element={<Page2 />}>  </Route>
       
      </Routes>

      {/* <Routes>
        {routes.map(({ path, component: RouteComp, async }) => {
          return (
            <Route key={path} path={path}>
              <RouteComp />
            </Route>
          );
        })}
      </Routes> */}
    </div>
  );
}

export default App;
