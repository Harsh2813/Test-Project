import React, {useState} from 'react'

const Form = (props) => {

    const [id, setId] = useState();
    const [price, setPrice] = useState();
    const [name, setName] = useState();
    const [category, setCategory] = useState('select');

    const idChangeHandler = (event) =>{
        setId(event.target.value);
    }
    const priceChangeHandler = (event) => {
        setPrice(event.target.value);
    }
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }
    const categoryChangeHandler = (event) => {
        setCategory(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const data = {
            id: id,
            price: price,
            name: name,
            category: category,
        }
        props.showData(data);

        setId('');
        setName('');
        setPrice('');
        setCategory('select')
    }

  return (
    <React.Fragment>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='ID'>Product ID</label>
                <input id='ID' type='number' value={id} onChange={idChangeHandler}></input>
                <label htmlFor='price'>Selling Price</label>
                <input id='price' type='number' value={price} onChange={priceChangeHandler}></input>
                <label htmlFor='name'>Product Name</label>
                <input id='name' type='text' value={name} onChange={nameChangeHandler}></input>
                <select onChange={categoryChangeHandler} value={category}>
            <option value='select'>Select Category</option>
            <option value='Electronic Items'>Electronic Items</option>
            <option value='Food Items'>Food Items</option>
            <option value='Skin Care Items'>Skin Care Items</option>
          </select>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </React.Fragment>
  )
}

export default Form
