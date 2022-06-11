import { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './form.css'


function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [dish, setDish] = useState('')
    const [buttonSelected, setButtonSelected] = useState('')
    const saveInput = (e) => {
        if (e.target.name === 'name') {
            setName(e.target.value)
        } else if (e.target.name === 'email') {
            setEmail(e.target.value)
        } else {
            setDish(e.target.value)
        }
    }

    const onClickBtn = (e) => {
        e.preventDefault();
        setButtonSelected(e.target.name)
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form sumbitted", "name:", name, "email:", email, "dish:", dish, "category:", buttonSelected);
    }

    // const onSelect = (e) => {
    //     setSelectedOption(e.target.value)
    // }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Form</h3>
            <div className="form-label-container">
                <label className='form-label'>Name<span className='log-in-lable-star '>*</span></label>
                <input className="form-input" onChange={saveInput} type="text" name='name' value={name}></input>
            </div>
            <div className="form-label-container">
                <label className='form-label'>Email<span className='log-in-lable-star '>*</span></label>
                <input className="form-input" onChange={saveInput} type="email" name='email' value={email}></input>
            </div>
            <div className="form-label-container">
                <label className='form-label'>Dish Type<span className='log-in-lable-star '>*</span></label>
                <button onClick={onClickBtn} name="Appetizer" className={buttonSelected && buttonSelected !== 'Appetizer' ? 'form-button-inactive'
                    : buttonSelected === 'Appetizer' ? 'form-button-active' : 'form-button'}>Appetizer</button>
                <button onClick={onClickBtn} name="Entre" className={buttonSelected && buttonSelected !== 'Entre' ? 'form-button-inactive'
                    : buttonSelected === 'Entre' ? 'form-button-active' : 'form-button'}>Entre</button>
                <button onClick={onClickBtn} name="Dessert" className={buttonSelected && buttonSelected !== 'Dessert' ? 'form-button-inactive'
                    : buttonSelected === 'Dessert' ? 'form-button-active' : 'form-button'}>Dessert</button>
                <button onClick={onClickBtn} name="Drinks" className={buttonSelected && buttonSelected !== 'Drinks' ? 'form-button-inactive'
                    : buttonSelected === 'Drinks' ? 'form-button-active' : 'form-button'}>Drinks</button>
                <button onClick={onClickBtn} name="Utensils" className={buttonSelected && buttonSelected !== 'Utensils' ? 'form-button-inactive'
                    : buttonSelected === 'Utensils' ? 'form-button-active' : 'form-button'}>Plates/Utensils</button>
            </div>
            <div className="form-label-container">
                <label className='form-label'>Dish<span className='log-in-lable-star '>*</span></label>
                <input className="form-input" onChange={saveInput} type="text" name='dish' value={dish}></input>
            </div>

            <button>Sumbit</button>
        </form >
    );
}

export default Form;