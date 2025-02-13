import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Prenez place</h2>
      {user ? <p>Bienvenue, vous etes bien connecté !</p> : <p>ding ding ,ça charge </p>}
    </div>
  );
};

export default Dashboard;
