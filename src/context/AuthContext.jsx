
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in from localStorage
    const userRole = localStorage.getItem("userRole");
    
    if (userRole) {
      setUser({ role: userRole });
    }
    
    setLoading(false);
  }, []);

  const login = (role) => {
    localStorage.setItem("userRole", role);
    setUser({ role });
    
    if (role === "admin") {
      navigate("/");
    } else {
      navigate("/employee-dashboard");
    }
  };

  const logout = () => {
    localStorage.removeItem("userRole");
    setUser(null);
    navigate("/login");
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
