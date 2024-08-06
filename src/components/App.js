import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";



function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const data = isDarkMode ? "Dark" : "Light"

  function handleModeChange() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "light" : "dark")}>
      <Header 
          heading = "Shopster" 
          onDarkModeClick = {handleModeChange} 
          data = {data} 
          label = "Mode"
      />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
