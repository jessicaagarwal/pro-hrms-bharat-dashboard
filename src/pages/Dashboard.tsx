
import { useEffect } from "react";
import { Layout } from "@/components/layout";
import { StatCard } from "@/components/dashboard/stat-card";
import { PerformanceChart } from "@/components/dashboard/performance-chart";
import { EmployeeStatus } from "@/components/dashboard/employee-status";
import { EventsMeetings } from "@/components/dashboard/events-meetings";
import { Birthdays } from "@/components/dashboard/birthdays";
import { DepartmentDistribution } from "@/components/dashboard/department-distribution";
import { RecentActivities } from "@/components/dashboard/recent-activities";
import { stats } from "@/lib/data";
import { Users, UserCheck, UserMinus, UserPlus } from "lucide-react";
import { toast } from "sonner";

export default function Dashboard() {
  useEffect(() => {
    // Welcome toast
    toast("Welcome to HRMS Pro", {
      description: "Manage your human resources efficiently with our comprehensive tools.",
    });
  }, []);

  return (
    <Layout title="Dashboard" subtitle="View key metrics and updates">
      <div className="space-y-8">
        {/* Stats Row */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
          <StatCard
            title="New Joinings"
            value={stats.newJoining}
            icon={UserPlus}
            description="This month's new recruits"
            iconColor="text-blue-500"
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
        
        {/* Events and Distribution Row */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <EventsMeetings />
          <Birthdays />
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
