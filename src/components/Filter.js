import React from "react";

function Filter(props){
  return (
    <select onChange={props.onCategoryChange}>
      <option value={props.value1}>{props.data1}</option>
      <option value={props.value2}>{props.data2}</option>
      <option value={props.value3}>{props.data3}</option>
    <option value={props.value4}>{props.data4}</option>
    </select>
    )
  }

  export default Filter;