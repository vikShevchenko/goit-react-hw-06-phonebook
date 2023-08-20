import React from 'react';
import './SearchForm.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/userSlise';

export const SearchForm = () => {

  const dispatch = useDispatch();

  return (
    <div className="search_form">
      <label htmlFor="search">Find contacts by name</label>
      <input
        placeholder="Search contact"
        autoComplete="off"
        id="search"
        type="text"
        onInput={(e) => dispatch(setFilter(e.target.value))}
      ></input>
    </div>
  );
};
