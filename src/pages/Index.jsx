
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the dashboard
    navigate("/");
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to HRMS Pro</h1>
        <p className="text-xl text-muted-foreground mb-4">Redirecting to dashboard...</p>
      </div>
    </div>
  );
};

export default Index;
