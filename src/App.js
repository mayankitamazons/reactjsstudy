import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routesPath from "./Config/routes";
import React from "react";
import "./App.css";


function App() {
  
  return (
   
      <Router>
        <React.Suspense>
          <Routes>
            {routesPath.map((route) => (
              <Route exact path={route.path} key={route.path} element={<route.component />} />
            ))}
          </Routes>
        
        </React.Suspense>
      </Router>
   
  );
}

export default App;
