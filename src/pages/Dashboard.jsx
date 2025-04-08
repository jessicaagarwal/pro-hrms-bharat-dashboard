
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/layout";
import { StatCard } from "../components/dashboard/stat-card";
import { PerformanceChart } from "../components/dashboard/performance-chart";
import { EmployeeStatus } from "../components/dashboard/employee-status";
import { DepartmentDistribution } from "../components/dashboard/department-distribution";
import { RecentActivities } from "../components/dashboard/recent-activities";
import { stats } from "../lib/data";
import { Users, UserCheck, UserMinus, LogOut } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../components/ui/button";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    // Welcome toast
    toast("Welcome to HRMS Pro", {
      description: "Manage your human resources efficiently with our comprehensive tools.",
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <Layout title="Dashboard" subtitle="View key metrics and updates">
      <div className="flex justify-end mb-4">
        <Button 
          variant="outline" 
          className="border-primary/20 text-primary flex gap-2"
          onClick={handleLogout}
        >
          <LogOut size={16} />
          Logout
        </Button>
      </div>

      <div className="space-y-8">
        {/* Stats Row */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="Total Employees"
            value={stats.totalEmployees}
            icon={Users}
            description={`Currently ${stats.activeEmployees} active`}
            iconColor="text-primary"
          />
          <StatCard
            title="Active Employees"
            value={stats.activeEmployees}
            icon={UserCheck}
            description={`${Math.round((stats.activeEmployees / stats.totalEmployees) * 100)}% of total workforce`}
            iconColor="text-green-500"
          />
          <StatCard
            title="Employees on Leave"
            value={stats.onLeave}
            icon={UserMinus}
            description={`${Math.round((stats.onLeave / stats.totalEmployees) * 100)}% of workforce`}
            iconColor="text-amber-500"
          />
        </div>
        
        {/* Charts Row */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <PerformanceChart />
        </div>
        
        {/* Tables Row */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-5">
          <EmployeeStatus />
        </div>
        
        {/* Department Distribution and Activities Row */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <DepartmentDistribution />
          <RecentActivities />
        </div>
      </div>
    </Layout>
  );
}
