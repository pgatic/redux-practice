import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import Axios from "axios";
import { setUsers } from "./actions";
import UsersList from "./usersList";

const actionDispatch = (dispatch) => ({
  setUser: (users) => dispatch(setUsers(users)),
});

const HomePage = () => {
  const { setUser } = actionDispatch(useDispatch());

  const fetchUsers = useCallback(async () => {
    const response = await Axios.get("https://reqres.in/api/users").catch(
      (err) => {
        console.log("Err: ", err);
      }
    );
    setUser(response.data.data);
  }, [setUser]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <UsersList />
    </div>
  );
};

export default HomePage;
