import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header"; 
import Body from "./Body";
import RestaurentCard from "./RestaurentCard";
import resObj from "./mockData";

const AppLayout=()=>{
  return (<div className="app">
    <Header />
   <Body />
  </div>
  );
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);