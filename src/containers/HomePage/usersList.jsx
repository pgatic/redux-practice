import { useHistory } from "react-router-dom";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./selectors";
import styled from "styled-components";
import { useSelector } from "react-redux";

const UsersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const UserImage = styled.div`
  width: 8em;
  height: 8em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const UserName = styled.h3`
  font-size: 20px;
  color: #000;
  margin: 0;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

const UsersList = () => {
  const { users } = useSelector(stateSelector);

  const history = useHistory();
  const goToUserPage = (id) => {
    history.push(`/user/${id}`);
  };

  const isEmptyUsers = !users || (users && users.lenght === 0);

  if (isEmptyUsers) {
    console.log("no users");
    return null;
  }

  return (
    <UsersContainer>
      {users.map((user, idx) => (
        <UserWrapper key={idx} onClick={() => goToUserPage(user.id)}>
          <UserImage>
            <img src={user.avatar} alt="" />
          </UserImage>
          <UserName>
            {user.first_name} {user.last_name}
          </UserName>
        </UserWrapper>
      ))}
    </UsersContainer>
  );
};

export default UsersList;
