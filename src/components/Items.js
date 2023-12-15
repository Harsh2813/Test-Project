import React from 'react';

const Items = (props) => {
  const deleteHandler = () => {
    // Create a shallow copy of the data
    const updatedData = { ...props.data };
    
    // Access the array of items for the specific category
    const categoryItems = updatedData[props.category];
    
    // Filter out the item to be deleted based on its 'id'
    const updatedCategoryItems = categoryItems.filter(item => item.id !== props.id);
    //Here, categoryItems is an array of items belonging to a specific category, and props.id is the 'id' of the item that needs to be deleted.
    
    // Update the state by setting the new array of items for the category
    updatedData[props.category] = updatedCategoryItems;
    props.setData(updatedData);
    
    // Update local storage only for the specific category
    localStorage.setItem("productData", JSON.stringify({
      ...updatedData,
      [props.category]: updatedCategoryItems
    })); //Updates local storage with the modified data. It spreads the existing data, then adds or updates the specific category with the filtered array of items.
  };

  return (
    <div>
      <li>
        {`${props.price} - ${props.category} - ${props.name}`}{' '}
        <button onClick={deleteHandler}>Delete</button>{' '}
      </li>
    </div>
  );
};

export default Items;
