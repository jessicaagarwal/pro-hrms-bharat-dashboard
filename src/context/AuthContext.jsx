
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../hooks/use-toast";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

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
    
    toast({
      title: "Logged in successfully",
      description: `Welcome back, ${role === "admin" ? "Administrator" : "Employee"}!`,
    });

    if (role === "admin") {
      navigate("/");
    } else {
      navigate("/employee-dashboard");
    }
  };

  const logout = () => {
    localStorage.removeItem("userRole");
    setUser(null);
    
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });

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
