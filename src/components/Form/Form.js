import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from '../../redux/userSlise';
import { nanoid } from 'nanoid';
import './Form.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(setContacts);

  const hehdle = e => {
    e.preventDefault();
    const inputName = e.currentTarget.name.value
    const inputNumber = e.currentTarget.phone.value

    if (tasks.payload.user.contacts.some(i => i.name === inputName)) {
      toast(`The name ${inputName} is already on your list`)
      return

    } else {

      if (inputName !== '' && inputNumber !== '') {

        dispatch(
          setContacts({
            id: nanoid(3),
            name: inputName,
            number: inputNumber,
          })
        );
        e.currentTarget.reset();
        return

      } else {
        toast(`The name field and the number field are blank.`)
      }
    }
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
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
export default Form;
