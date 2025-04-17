import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { AnimatePresence } from "framer-motion";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Payroll from "./pages/Payroll";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Performance from "./pages/Performance";
import Recruitment from "./pages/Recruitment";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import Profile from "./pages/Profile";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import Login from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AuthProvider>
              <AnimatePresence mode="wait">
                <Routes>
                  {/* Public routes */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/unauthorized" element={<Unauthorized />} />

                  {/* Protected HR routes */}
                  <Route
                    path="/"
                    element={
                      <ProtectedRoute allowedRoles={['HR']}>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/employees"
                    element={
                      <ProtectedRoute allowedRoles={['HR']}>
                        <Employees />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/payroll"
                    element={
                      <ProtectedRoute allowedRoles={['HR']}>
                        <Payroll />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/recruitment"
                    element={
                      <ProtectedRoute allowedRoles={['HR']}>
                        <Recruitment />
                      </ProtectedRoute>
                    }
                  />

                  {/* Protected Employee routes */}
                  <Route
                    path="/employee-dashboard"
                    element={
                      <ProtectedRoute allowedRoles={['EMPLOYEE']}>
                        <EmployeeDashboard />
                      </ProtectedRoute>
                    }
                  />

                  {/* Shared protected routes */}
                  <Route
                    path="/attendance"
                    element={
                      <ProtectedRoute allowedRoles={['HR', 'EMPLOYEE']}>
                        <Attendance />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/leave"
                    element={
                      <ProtectedRoute allowedRoles={['HR', 'EMPLOYEE']}>
                        <Leave />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/performance"
                    element={
                      <ProtectedRoute allowedRoles={['HR', 'EMPLOYEE']}>
                        <Performance />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/calendar"
                    element={
                      <ProtectedRoute allowedRoles={['HR', 'EMPLOYEE']}>
                        <Calendar />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/settings"
                    element={
                      <ProtectedRoute allowedRoles={['HR', 'EMPLOYEE']}>
                        <Settings />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/help"
                    element={
                      <ProtectedRoute allowedRoles={['HR', 'EMPLOYEE']}>
                        <Help />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/profile"
                    element={
                      <ProtectedRoute allowedRoles={['HR', 'EMPLOYEE']}>
                        <Profile />
                      </ProtectedRoute>
                    }
                  />

                  {/* Legacy and error routes */}
                  <Route path="/old" element={<Index />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </AuthProvider>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
