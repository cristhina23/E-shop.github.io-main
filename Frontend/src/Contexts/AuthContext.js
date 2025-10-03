import { createContext, useContext, useEffect, useState } from "react";
import api from "../axiosInstance";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token"); // <-- verifica el token primero
    if (!token) {
      setLoading(false);
      return; // no hace fetch si no hay token
    }

    const fetchUser = async () => {
      try {
        const { data } = await api.get("/api/user/profile"); 
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
        localStorage.removeItem("token"); // limpia token inválido
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
