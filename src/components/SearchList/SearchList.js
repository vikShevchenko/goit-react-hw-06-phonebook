//import { ListForm } from 'components/ListForm/ListForm'
import { removeFilter} from "../../redux/userSlise";
import React from 'react'
import { useSelector } from 'react-redux'
import './SearchList.css'
import { useDispatch } from 'react-redux'

export const SearchList = () => {
    const search = useSelector(data => data.user.filter)
    const dispatch = useDispatch()

    console.log("search list: ", search)
    
  return (
    <ul className="cont_list">
    {search && search.map((item) => (
      <li style={{ listStyle: "none" }} key={item.id}> {item.name}: {item.number} <button onClick={() => dispatch(removeFilter())}>Dell</button></li>
    ))}
 </ul>
 
  )
}
