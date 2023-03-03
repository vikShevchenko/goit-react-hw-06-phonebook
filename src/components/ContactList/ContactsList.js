//import { ListForm } from "components/ListForm/ListForm";
import { removeItem } from "../../redux/userSlise";
import React from "react";
import { useSelector } from "react-redux";
import './ContactList.css'
import { useDispatch } from "react-redux";

export const ContactsList = () => {
  const search = useSelector((item) => item.user.contacts);
  const dispatch = useDispatch()

  return (
    <ul className="cont_list">
      {search.map((item) => (
        <li style={{ listStyle: "none" }} key={item.id}> {item.name}: {item.number} <button onClick={() => dispatch(removeItem(item.id))}>Dell</button></li>
      ))}
    </ul>
  );
};
