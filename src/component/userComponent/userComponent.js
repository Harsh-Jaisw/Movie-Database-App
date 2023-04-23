import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../cardComponent";
import getUsers from "../../redux/action/users";
import style from "./userComponent.module.css";
const Users = () => {
  //This is allow to dispatch the action for requesting to the
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <>
      <div className={style.card}>
        {users.results?.map((user) => (
          <Cards key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};
export default Users;
