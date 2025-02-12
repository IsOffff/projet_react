import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/register" className="nav-link">Inscription</Link>
        <Link to="/login" className="nav-link">Connexion</Link>
        
        {user ? (
          <>
            <span className="user-greeting">Bonjour, {user.name}</span>
            <Link to="/dashboard" className="nav-link">Tableau de Bord</Link>
            <button onClick={logout} className="logout-button">Se Déconnecter</button>
          </>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
