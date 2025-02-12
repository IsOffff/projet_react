import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Tableau de Bord</h2>
      {user ? <p>Bienvenue, vous êtes connecté !</p> : <p>Chargement...</p>}
    </div>
  );
};

export default Dashboard;
