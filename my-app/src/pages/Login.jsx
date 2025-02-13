import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    console.log("Tentative de connexion avec :", { email, password }); 
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log("Réponse du serveur :", data);
      if (response.ok) {
        setUser({ email, token: data.token }); 
        setMessage('Connexion réussie');
      } else {
        setMessage(data.error || 'Erreur de connexion');
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      setMessage('Erreur réseau');
    }
  };  

  return (
    <div>
      <h2>Connexion</h2>
      {message && <p>{message}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
};

export default Login;
