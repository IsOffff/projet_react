import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Les mots de passe ne correspondent pas !");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Réponse du serveur:", data);

      if (response.ok) {
        setMessage("Inscription réussie ! Vous pouvez vous connecter.");
      } else {
        // Affiche l'erreur renvoyée par le backend, qu'elle soit dans data.error ou data.message
        setMessage(data.error || data.message || "Erreur d'inscription.");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      setMessage("Erreur serveur. Vérifiez votre connexion.");
    }
  };

  return (
    <div>
      <h2>Inscription</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Register;
