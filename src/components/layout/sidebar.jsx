
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  BarChart, 
  Users, 
  BriefcaseBusiness,
  ClipboardCheck, 
  CalendarDays, 
  Award, 
  UserRound,
  Settings,
  CreditCard,
  ChevronLeft,
  ChevronRight,
  LogOut
} from "lucide-react";
import { Button } from "../ui/button";
import { SidebarLink } from "./sidebar-link";
import { SidebarSection } from "./sidebar-section";
import { cn } from "../../lib/utils";
import { useToast } from "../../hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Get user role from localStorage
    const role = localStorage.getItem("userRole");
    setUserRole(role);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    toast({
      title: "Logged out successfully",
      description: "You have been logged out",
      duration: 3000,
    });
    navigate("/login");
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
    toast({
      title: collapsed ? "Sidebar expanded" : "Sidebar collapsed",
      description: "You can toggle the sidebar at any time",
      duration: 1500,
    });
  };

  const sidebarVariants = {
    expanded: { width: "256px", transition: { duration: 0.3, ease: "easeInOut" }},
    collapsed: { width: "72px", transition: { duration: 0.3, ease: "easeInOut" }}
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.2, delay: 0.05 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.1 }  
    }
  };

  return (
    <motion.aside
      className="h-screen bg-sidebar border-r border-sidebar-border sticky top-0 left-0 z-30 shadow-sm"
      initial="expanded"
      animate={collapsed ? "collapsed" : "expanded"}
      variants={sidebarVariants}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between h-16 px-3 border-b border-sidebar-border">
          <AnimatePresence mode="wait">
            {!collapsed && (
              <motion.div 
                className="flex items-center gap-2"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInVariants}
                key="logo"
              >
                <BriefcaseBusiness className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold">MasterHR</span>
              </motion.div>
            )}
          </AnimatePresence>
          <Button
            variant="ghost"
            size="icon"
            className="transition-colors duration-200 hover:bg-sidebar-accent/40 ml-auto"
            onClick={toggleSidebar}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? 
              <ChevronRight className="h-4 w-4 transition-transform duration-200" /> : 
              <ChevronLeft className="h-4 w-4 transition-transform duration-200" />}
          </Button>
        </div>

        <div className={cn("flex-1 overflow-auto glass-scrollbar", collapsed && "px-1 py-2")}>
          <AnimatePresence mode="wait">
            {collapsed ? (
              <motion.div 
                className="space-y-2 mt-2 flex flex-col items-center"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInVariants}
                key="collapsed-menu"
              >
                {userRole === "admin" && (
                  <>
                    <SidebarLink to="/" icon={BarChart} label="Dashboard" />
                    <SidebarLink to="/employees" icon={Users} label="Employees" notificationCount={3} />
                    <SidebarLink to="/payroll" icon={CreditCard} label="Payroll" />
                    <SidebarLink to="/attendance" icon={ClipboardCheck} label="Attendance" />
                    <SidebarLink to="/leave" icon={CalendarDays} label="Leave" notificationCount={2} />
                    <SidebarLink to="/performance" icon={Award} label="Performance" />
                  </>
                )}
                
                {userRole === "employee" && (
                  <>
                    <SidebarLink to="/employee-dashboard" icon={UserRound} label="My Dashboard" />
                    <SidebarLink to="/calendar" icon={CalendarDays} label="Calendar" />
                  </>
                )}
                
                <SidebarLink to="/settings" icon={Settings} label="Settings" />
                
                <div className="mt-auto pt-4 w-full flex justify-center">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInVariants}
                key="expanded-menu"
              >
                {userRole === "admin" && (
                  <>
                    <SidebarSection title="Admin Dashboard">
                      <SidebarLink to="/" icon={BarChart} label="Dashboard" />
                    </SidebarSection>
                    
                    <SidebarSection title="HR Management">
                      <SidebarLink to="/employees" icon={Users} label="Employees" notificationCount={3} />
                      <SidebarLink to="/payroll" icon={CreditCard} label="Payroll" />
                      <SidebarLink to="/attendance" icon={ClipboardCheck} label="Attendance" />
                      <SidebarLink to="/leave" icon={CalendarDays} label="Leave Management" notificationCount={2} />
                      <SidebarLink to="/performance" icon={Award} label="Performance" />
                    </SidebarSection>
                  </>
                )}
                
                {userRole === "employee" && (
                  <>
                    <SidebarSection title="Employee">
                      <SidebarLink to="/employee-dashboard" icon={UserRound} label="My Dashboard" />
                      <SidebarLink to="/calendar" icon={CalendarDays} label="Calendar" />
                    </SidebarSection>
                  </>
                )}
                
                <SidebarSection title="Settings">
                  <SidebarLink to="/settings" icon={Settings} label="Settings" />
                </SidebarSection>
                
                <div className="px-3 py-2 mt-auto">
                  <Button 
                    variant="ghost" 
                    className="w-full text-red-500 hover:text-red-600 hover:bg-red-50 justify-start gap-3"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="h-16 border-t border-sidebar-border flex items-center px-4">
          <AnimatePresence mode="wait">
            {!collapsed ? (
              <motion.div 
                className="flex items-center w-full gap-3"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInVariants}
                key="user-expanded"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  {userRole === "admin" ? "A" : "E"}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    {userRole === "admin" ? "Admin User" : "Rahul Singh"}
                  </p>
                  <p className="text-xs text-sidebar-foreground/60 truncate">
                    {userRole === "admin" ? "Administrator" : "Employee"}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-auto transition-all duration-150 hover:bg-sidebar-accent/40"
                  onClick={() => navigate("/profile")}
                >
                  <Settings className="h-4 w-4" />
                </Button>
              </motion.div>
            ) : (
              <motion.div 
                className="w-full flex justify-center"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInVariants}
                key="user-collapsed"
              >
                <div 
                  className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary transition-shadow duration-200 hover:shadow-md cursor-pointer" 
                  onClick={() => navigate("/profile")}
                >
                  {userRole === "admin" ? "A" : "E"}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.aside>
  );
}
