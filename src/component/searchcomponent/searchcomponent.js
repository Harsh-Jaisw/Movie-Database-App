import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../../redux/action/users";
import Cards from "../cardComponent";
import style from "./Searchcomponent.module.css"
import {AiOutlineSearch} from "react-icons/ai"
export default function SearchField() {
  const { users } = useSelector((state) => state.users);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  function handleSearch() {
    dispatch(getSearch(search));
  }
  console.log(users);
  return (
    <>
    <div className={style.searchWrapper}>
      <input className={style.input} value={search} placeholder="search movie" onChange={(e) => setSearch(e.target.value)} />
      <button className={style.button} onClick={handleSearch}><AiOutlineSearch/></button></div>
      <div className={style.card}>{users.results?.map((user)=> <Cards  key={user.id} user={user}/>)}</div>
    </>
  );
}
