import { useState, useEffect } from "react";
import { 
  BarChart, 
  Users, 
  BriefcaseBusiness,
  ClipboardCheck, 
  CalendarDays, 
  Award, 
  UserRound,
  Settings,
  HelpCircle,
  CreditCard,
  GraduationCap,
  Menu,
  X,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarLink } from "./sidebar-link";
import { SidebarSection } from "./sidebar-section";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "react-router-dom";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toast } = useToast();
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
    toast({
      title: collapsed ? "Sidebar expanded" : "Sidebar collapsed",
      description: "You can toggle the sidebar at any time",
      duration: 2000,
    });
  };

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-4 left-4 z-50 bg-background/80 backdrop-blur-sm hover:bg-background/90"
        onClick={toggleMobileMenu}
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      <aside
        className={cn(
          "h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out",
          collapsed ? "w-16" : "w-64",
          "fixed md:sticky top-0 left-0 z-40",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          "touch-manipulation"
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
              className="hover:bg-muted/50 ml-auto transition-transform duration-200"
              onClick={toggleSidebar}
            >
              <ChevronRight className={cn(
                "h-5 w-5 transition-transform duration-200",
                collapsed ? "rotate-180" : ""
              )} />
            </Button>
          </div>

          <div className={cn(
            "flex-1 overflow-auto glass-scrollbar",
            collapsed ? "px-1 py-2" : "p-2"
          )}>
            {collapsed ? (
              <div className="space-y-2 mt-2 flex flex-col items-center">
                <SidebarLink to="/" icon={BarChart} label="Dashboard" />
                <SidebarLink to="/employee-dashboard" icon={UserRound} label="My Dashboard" />
                <SidebarLink to="/employees" icon={Users} label="Employees" notificationCount={3} />
                <SidebarLink to="/payroll" icon={CreditCard} label="Payroll" />
                <SidebarLink to="/attendance" icon={ClipboardCheck} label="Attendance" />
                <SidebarLink to="/leave" icon={CalendarDays} label="Leave" notificationCount={2} />
                <SidebarLink to="/performance" icon={Award} label="Performance" />
                <SidebarLink to="/recruitment" icon={GraduationCap} label="Recruitment" />
                <SidebarLink to="/calendar" icon={CalendarDays} label="Calendar" />
                <SidebarLink to="/settings" icon={Settings} label="Settings" />
                <SidebarLink to="/help" icon={HelpCircle} label="Help" />
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

                <SidebarSection title="Development">
                  <SidebarLink to="/performance" icon={Award} label="Performance" />
                  <SidebarLink to="/recruitment" icon={GraduationCap} label="Recruitment" />
                </SidebarSection>
                
                <SidebarSection title="Tools">
                  <SidebarLink to="/calendar" icon={CalendarDays} label="Calendar" />
                  <SidebarLink to="/settings" icon={Settings} label="Settings" />
                  <SidebarLink to="/help" icon={HelpCircle} label="Help & Support" />
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
                  className="ml-auto hover:bg-muted/50"
                  onClick={() => window.location.href = "/profile"}
                >
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="w-full flex justify-center">
                <div 
                  className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors cursor-pointer" 
                  onClick={() => window.location.href = "/profile"}
                >
                  RS
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
