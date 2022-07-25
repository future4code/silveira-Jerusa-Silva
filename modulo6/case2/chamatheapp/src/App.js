import React from "react";
import { BrowserRouter } from 'react-router-dom';
import GlobalState from "./global/GlobalState";
import Router from "./router/router";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <GlobalState>
          <Router/>
        </GlobalState>
      </BrowserRouter>
    </div>
  )
};

export default App;