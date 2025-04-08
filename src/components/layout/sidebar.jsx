
import { useState } from "react";
import { 
  BarChart, 
  Users, 
  BriefcaseBusiness,
  ClipboardCheck, 
  CalendarDays, 
  UserRound,
  Settings,
  CreditCard,
  Menu
} from "lucide-react";
import { Button } from "../ui/button";
import { SidebarLink } from "./sidebar-link";
import { SidebarSection } from "./sidebar-section";
import { cn } from "../../lib/utils";
import { useToast } from "../../hooks/use-toast";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { toast } = useToast();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
    toast({
      title: collapsed ? "Sidebar expanded" : "Sidebar collapsed",
      description: "You can toggle the sidebar at any time",
      duration: 2000,
    });
  };

  return (
    <aside
      className={cn(
        "h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 sticky top-0 left-0 z-30",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between h-16 px-3 border-b border-sidebar-border">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <BriefcaseBusiness className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">MasterHR</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="hover-lift ml-auto"
            onClick={toggleSidebar}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        <div className={cn("flex-1 overflow-auto glass-scrollbar", collapsed && "px-1 py-2")}>
          {collapsed ? (
            <div className="space-y-2 mt-2 flex flex-col items-center">
              <SidebarLink to="/" icon={BarChart} label="Dashboard" />
              <SidebarLink to="/employee-dashboard" icon={UserRound} label="My Dashboard" />
              <SidebarLink to="/employees" icon={Users} label="Employees" notificationCount={3} />
              <SidebarLink to="/payroll" icon={CreditCard} label="Payroll" />
              <SidebarLink to="/attendance" icon={ClipboardCheck} label="Attendance" />
              <SidebarLink to="/leave" icon={CalendarDays} label="Leave" notificationCount={2} />
              <SidebarLink to="/calendar" icon={CalendarDays} label="Calendar" />
              <SidebarLink to="/settings" icon={Settings} label="Settings" />
            </div>
          ) : (
            <>
              <SidebarSection title="Dashboards">
                <SidebarLink to="/" icon={BarChart} label="Admin Dashboard" />
                <SidebarLink to="/employee-dashboard" icon={UserRound} label="My Dashboard" />
              </SidebarSection>
              
              <SidebarSection title="HR Management">
                <SidebarLink to="/employees" icon={Users} label="Employees" notificationCount={3} />
                <SidebarLink to="/payroll" icon={CreditCard} label="Payroll" />
                <SidebarLink to="/attendance" icon={ClipboardCheck} label="Attendance" />
                <SidebarLink to="/leave" icon={CalendarDays} label="Leave Management" notificationCount={2} />
              </SidebarSection>
              
              <SidebarSection title="Tools">
                <SidebarLink to="/calendar" icon={CalendarDays} label="Calendar" />
                <SidebarLink to="/settings" icon={Settings} label="Settings" />
              </SidebarSection>
            </>
          )}
        </div>
        
        <div className="h-16 border-t border-sidebar-border flex items-center px-4">
          {!collapsed ? (
            <div className="flex items-center w-full gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                RS
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">Rahul Singh</p>
                <p className="text-xs text-sidebar-foreground/60 truncate">Administrator</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="ml-auto hover-lift"
                onClick={() => window.location.href = "/profile"}
              >
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="w-full flex justify-center">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover-lift cursor-pointer" onClick={() => window.location.href = "/profile"}>
                RS
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
