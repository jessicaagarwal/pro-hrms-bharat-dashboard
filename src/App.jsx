
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Payroll from "./pages/Payroll";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Performance from "./pages/Performance";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import Login from "./pages/Login";

// Create a client
const queryClient = new QueryClient();

// Auth checking component
const ProtectedRoute = ({ children, requiredRole }) => {
  const userRole = localStorage.getItem("userRole");
  
  if (!userRole) {
    return <Navigate to="/login" replace />;
  }
  
  if (requiredRole && userRole !== requiredRole) {
    return userRole === "admin" ? 
      <Navigate to="/" replace /> : 
      <Navigate to="/employee-dashboard" replace />;
  }
  
  return children;
};

// Animation wrapper component
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<Login />} />
        
        {/* Admin Routes */}
        <Route path="/" element={
          <ProtectedRoute requiredRole="admin">
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/employees" element={
          <ProtectedRoute requiredRole="admin">
            <Employees />
          </ProtectedRoute>
        } />
        <Route path="/payroll" element={
          <ProtectedRoute requiredRole="admin">
            <Payroll />
          </ProtectedRoute>
        } />
        <Route path="/attendance" element={
          <ProtectedRoute requiredRole="admin">
            <Attendance />
          </ProtectedRoute>
        } />
        <Route path="/leave" element={
          <ProtectedRoute requiredRole="admin">
            <Leave />
          </ProtectedRoute>
        } />
        <Route path="/performance" element={
          <ProtectedRoute requiredRole="admin">
            <Performance />
          </ProtectedRoute>
        } />
        
        {/* Employee Routes */}
        <Route path="/employee-dashboard" element={
          <ProtectedRoute requiredRole="employee">
            <EmployeeDashboard />
          </ProtectedRoute>
        } />
        
        {/* Common Routes */}
        <Route path="/calendar" element={
          <ProtectedRoute>
            <Calendar />
          </ProtectedRoute>
        } />
        <Route path="/settings" element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/old" element={<Index />} />
        
        {/* Redirect to 404 for any unknown routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => {
  // Check for stored login info and redirect accordingly
  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole && window.location.pathname === "/login") {
      window.location.href = userRole === "admin" ? "/" : "/employee-dashboard";
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <AnimatedRoutes />
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
