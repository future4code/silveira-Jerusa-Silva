import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Router />
      </div>
    </BrowserRouter>
  );
};

export default App;
