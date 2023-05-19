import React from 'react';
import './SearchForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/userSlise';

export const SearchForm = () => {
  const searchList = useSelector(list => list.user.contacts);
  const dispatch = useDispatch();

  const hendleClick = e => {
    if (!e) {
      return;
    } else {
      dispatch(
        setFilter(
          searchList.filter(val =>
            val.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
        )
      );
    }
  };

  return (
    <div className="search_form">
      <label htmlFor="search">Find contacts by name</label>
      <input
        placeholder="Search contact"
        id="search"
        type="text"
        onInput={hendleClick}
      ></input>
    </div>
  );
};
