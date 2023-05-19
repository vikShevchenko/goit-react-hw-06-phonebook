import React from 'react';
import { useDispatch } from 'react-redux';
import { setContacts } from '../../redux/userSlise';
import { nanoid } from 'nanoid';
import './Form.css';

const Form = () => {
  const dispatch = useDispatch();

  const hehdle = e => {
    e.preventDefault();
    console.log(e.currentTarget.name.value, e.currentTarget.phone.value);
    dispatch(
      setContacts({
        id: nanoid(3),
        name: e.currentTarget.name.value,
        number: e.currentTarget.phone.value,
      })
    );
    e.currentTarget.reset();
  };

  return (
    <div className="searchForm">
      <h2 className="searchForm_title">Phonebook</h2>
      <form className="searchForm_inputs" onSubmit={hehdle}>
        <label htmlFor="name">Name</label>
        <input
          placeholder="Enter name"
          autoComplete="off"
          id="name"
          type="text"
          name="name"
        ></input>

        <label htmlFor="number">Number</label>
        <input
          placeholder="Enter number"
          autoComplete="off"
          id="phone"
          type="number"
          name="phone"
        ></input>
        <button className="add-btn" type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
export default Form;
