import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import api from "../axiosInstance";

const AuthContext = createContext();

export const AuthProvider = ({ children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');

      if(!token) {
        setLoading(false)
        return
      }

      try {
        const { data } = await api.get('/api/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(data);

      } catch (error) {
        console.log('Error fetching user', error);
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }

    };

    fetchUser();
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


