import React from "react";

import "./assets/style.css";
import "./App.css";
import Header from "./components/Header";
import Tasklist from "./components/Tasklist";

function App() {
  return (
    <div className="Appmx-auto">
      <Header />
      <Tasklist />
    </div>
  );
}

export default App;
