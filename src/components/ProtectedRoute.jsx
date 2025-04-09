
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Loader2 } from "lucide-react";

export function ProtectedRoute({ allowedRoles = ["admin", "employee"] }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.includes(user.role)) {
    return <Outlet />;
  } else {
    // Redirect to appropriate dashboard based on role
    return <Navigate to={user.role === "admin" ? "/" : "/employee-dashboard"} replace />;
  }
}
