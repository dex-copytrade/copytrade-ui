import { useState } from "react";
import Home from "./pages/home";
import TraderList from "./pages/traderList";
import TraderDetail from "./pages/traderDetail";
import TransLog from "./pages/transLog";
import { Route, Routes } from "react-router-dom";
import "./index.less";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home />}>  </Route> */}
        <Route path="/" element={<TraderList />}>
          {" "}
        </Route>
        <Route path="/traderlist" element={<TraderList />}>
          {" "}
        </Route>
        <Route path="/traderdetail" element={<TraderDetail />}>  </Route>
        <Route path="/translog" element={<TransLog />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
