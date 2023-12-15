import React, { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";

// IGNOR PLEASE-------Note---------------- Check the data visualization in gitIgnore----------------------------

const UpdatedInput = () => {
  const [data, setData] = useState([]); // Define the 'data' state here
  
//   The useEffect is used to ensure that when the component mounts (i.e., when the page loads), the initial data is fetched from local storage and set as the initial state. This way, the component starts with the latest data stored in local storage, and the user sees the existing data right away.
 
  useEffect(() => { // Retrieve and update data from local storage
    const storedData = JSON.parse(localStorage.getItem("productData")) || [];
    setData(storedData);
  }, []); // empty array because ek baar bs chale useEffect page load hone me ye data rahe aaye taki

//stringify() takes a JavaScript object and then transforms it into a JSON string. JSON. parse() takes a JSON string and then transforms it into a JavaScript object.

  const addDataHandler = (gotData) => {
    setData((prevData) => {
      const category = gotData.category;
      const newData = { ...prevData };//newData is object here hmne pura previous data liya new data me taki original privous data change na ho good for mutability

      // Check kiye ki jo latest data ki category h us category ka array already newData obj me already h to latest 
      if (newData[category]) {// data ko add kr diye us perticular category ke array me
        // NOTE- we dynamically adding category array and all data inside perticular category array it means inside data array we having newata(previous data) as object and inside object having array of cetegory but at last this newdata is obj of all value so data will also be a obj here
        newData[category].push(gotData);
      } else {
        // If it doesn't exist, initialize a new array and gave latest data to that array and asigned to that perticular category array of previousData object-it means we adding all data to newData obj.
        newData[category] = [gotData];// newData ki perticular category ke array me wo input data s an array pass ki
      }

       // Update local storage
       localStorage.setItem("productData", JSON.stringify(newData));

       //NOT-- The state (data) is initialized as an array, but due to the logic in addDataHandler, it is transformed into an object with categories as keys.

      return newData;// this newData object having all updated property and sets to data as obj above in useState
    });
  };

  return (
    <React.Fragment>
      <Form showData={addDataHandler} />
      <List data={data} setData={setData} />{/*The reason for passing setData down the component hierarchy is to allow child components(Item.js) to update the state in the parent component9(updatedInput.js) jb Item.js me delte kr rhe to ye setData use kr rhe state change liy taki deleted element show na ho baki bs sare show ho*/}
    </React.Fragment>
  );
};

export default UpdatedInput;

