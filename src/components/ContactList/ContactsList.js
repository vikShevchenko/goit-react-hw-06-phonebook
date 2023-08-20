import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { removeItem } from '../../redux/userSlise';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from '../../redux/selectors'
import { setFilter } from '../../redux/selectors';

import './ContactList.css';

export const ContactsList = () => {

  const dispatch = useDispatch();
  const tasks = useSelector(setContacts);
  const sortedList = useSelector(setFilter);

  const filteredItems = (sortList) => {

    const test = tasks.filter(todo =>
      todo.name.toLowerCase().includes(sortList.toLowerCase()))
    return test

  }

  return (
    <ul className="cont_list">
      {filteredItems(sortedList).map(item => (
        <li style={{ listStyle: 'none' }} key={item.id}>
          <IconContext.Provider value={{ color: '#349e11ab' }}>
            <BsFillTelephoneFill />
          </IconContext.Provider>
          {item.name}: {<a href={`tel:${item.number}`}>{item.number}</a>}
          <button
            className="dell-btn"
            onClick={() => dispatch(removeItem(item.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
