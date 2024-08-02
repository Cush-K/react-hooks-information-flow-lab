import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <Filter 
        name="filter" 
        onCategoryChange={handleCategoryChange} 
        value1 = "All" data1 = "Filter by category"
        value2 ="Produce" data2 = "Produce"
        value3 = "Dairy" data3 = "Dairy"
        value4 = "Dessert" data4 = "Dessert"
        />
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
