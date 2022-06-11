import { useState, useEffect } from 'react';
import menuForm from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import 'react-dropdown/style.css';
import './form.css';

function Form({ updateSubmitted }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dish, setDish] = useState('');
  const [categorySelected, setCategorySelected] = useState('');

  const saveInput = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else {
      setDish(e.target.value);
    }
  };

  const onChangeDropDown = (e) => {
    setCategorySelected(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let bodyToSend = {
      name: name,
      email: email,
      dish: { name: dish, category: categorySelected },
    };
    const response = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify(bodyToSend),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      const data = await response.json();
      updateSubmitted();
      console.log(data);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Form</h3>
      <Container>
        <div className='form-label-container'>
          <label className='form-label'>
            Name<span className='log-in-lable-star '>*</span>
          </label>
          <input
            className='form-input'
            onChange={saveInput}
            type='text'
            name='name'
            value={name}
          ></input>
        </div>
        <div className='form-label-container'>
          <label className='form-label'>
            Email<span className='log-in-lable-star '>*</span>
          </label>
          <input
            className='form-input'
            onChange={saveInput}
            type='email'
            name='email'
            value={email}
          ></input>
        </div>
        <div className='form-label-container'>
          <menuForm.Select
            onChange={onChangeDropDown}
            aria-label='Default select example'
          >
            <option>I will bring...</option>
            <option value='Appetizer'>Appetizer</option>
            <option value='Entre'>Entre</option>
            <option value='Dessert'>Dessert</option>
            <option value='Drink'>Drink</option>
            <option value='Utensils'>Utensils</option>
          </menuForm.Select>
        </div>
        <div className='form-label-container'>
          <label className='form-label'>
            Dish<span className='log-in-lable-star '>*</span>
          </label>
          <input
            className='form-input'
            onChange={saveInput}
            type='text'
            name='dish'
            value={dish}
          ></input>
        </div>

        <button>Sumbit</button>
      </Container>
    </form>
  );
}

export default Form;
