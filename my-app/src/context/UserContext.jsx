import { createContext, useState, useEffect, useMemo, useCallback } from "react";


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token });
    }
  }, []);
  const login = useCallback((token) => {
    localStorage.setItem("token", token);
    setUser({ token });
  }, []);
  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setUser(null);
  }, []);
  const contextValue = useMemo(() => ({ user, login, logout }), [user, login, logout]);

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
