import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";



function Header(props){
  return (
    <header>
    <h2>{props.heading}</h2>
    <button onClick={props.event}>
      {props.data} {props.label}
    </button>
  </header>
  )
}


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const data = isDarkMode ? "Dark" : "Light"

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header heading = "Shopster" event = {onDarkModeClick} data = {data} label = "Mode"/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
