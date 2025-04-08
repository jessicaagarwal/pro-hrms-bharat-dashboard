
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
  ChevronLeft,
  ChevronRight,
  Menu
} from "lucide-react";
import { Button } from "../ui/button";
import { SidebarLink } from "./sidebar-link";
import { SidebarSection } from "./sidebar-section";
import { cn } from "../../lib/utils";
import { useToast } from "../../hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { toast } = useToast();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
    toast({
      title: collapsed ? "Sidebar expanded" : "Sidebar collapsed",
      description: "You can toggle the sidebar at any time",
      duration: 1500,
    });
  };

  const sidebarVariants = {
    expanded: { width: "256px", transition: { duration: 0.2, ease: "easeInOut" }},
    collapsed: { width: "64px", transition: { duration: 0.2, ease: "easeInOut" }}
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.15, delay: 0.05 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.15 }  
    }
  };

  return (
    <motion.aside
      className="h-screen bg-sidebar border-r border-sidebar-border sticky top-0 left-0 z-30"
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
            className="transition-transform duration-200 hover:bg-sidebar-accent/40 ml-auto"
            onClick={toggleSidebar}
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
                <SidebarLink to="/" icon={BarChart} label="Dashboard" />
                <SidebarLink to="/employee-dashboard" icon={UserRound} label="My Dashboard" />
                <SidebarLink to="/employees" icon={Users} label="Employees" notificationCount={3} />
                <SidebarLink to="/payroll" icon={CreditCard} label="Payroll" />
                <SidebarLink to="/attendance" icon={ClipboardCheck} label="Attendance" />
                <SidebarLink to="/leave" icon={CalendarDays} label="Leave" notificationCount={2} />
                <SidebarLink to="/calendar" icon={CalendarDays} label="Calendar" />
                <SidebarLink to="/settings" icon={Settings} label="Settings" />
              </motion.div>
            ) : (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInVariants}
                key="expanded-menu"
              >
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
                  RS
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">Rahul Singh</p>
                  <p className="text-xs text-sidebar-foreground/60 truncate">Administrator</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-auto transition-all duration-150 hover:bg-sidebar-accent/40"
                  onClick={() => window.location.href = "/profile"}
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
                  className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary transition-transform duration-200 hover:shadow-md cursor-pointer" 
                  onClick={() => window.location.href = "/profile"}
                >
                  RS
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.aside>
  );
}
