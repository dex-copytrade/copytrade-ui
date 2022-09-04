import { useState } from "react";
import Home from "./pages/home";
import TraderList from "./pages/traderList";
import { Route, Routes } from "react-router-dom";
import "./index.less";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />}>  </Route>
        <Route path="/traderlist" element={<TraderList />}>  </Route>
      </Routes>
    </div>
  );
}

export default App;
