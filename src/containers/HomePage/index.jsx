import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./selectors";
import Axios from "axios";
import { setUsers } from "./actions";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

const actionDispatch = (dispatch) => ({
  setUser: (users) => dispatch(setUsers(users)),
});

const HomePage = () => {
  const { users } = useSelector(stateSelector);
  const { setUser } = actionDispatch(useDispatch());

  const fetchData = async () => {
    const response = await Axios.get("https://reqres.in/api/users").catch(
      (err) => {
        console.log("Err: ", err);
      }
    );
    setUser(response.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(users);

  return (
    <div>
      <h3>Hello world</h3>
    </div>
  );
};

export default HomePage;
