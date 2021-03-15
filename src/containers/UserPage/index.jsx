import { useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();

  return <h2>UserPage - user: {userId}</h2>;
};

export default UserPage;
