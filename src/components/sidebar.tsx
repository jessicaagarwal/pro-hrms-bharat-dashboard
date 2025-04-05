import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  FileText,
  HelpCircle,
  Home,
  LayoutDashboard,
  Settings,
  Star,
  Timer,
  User,
  UserPlus,
  Users,
  UserCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SidebarNavItemProps {
  icon: React.ElementType;
  title: string;
  href: string;
  expanded: boolean;
  active: boolean;
  badge?: string | number;
  hasChildren?: boolean;
  children?: React.ReactNode;
}

const SidebarNavItem = ({
  icon: Icon,
  title,
  href,
  expanded,
  active,
  badge,
  hasChildren = false,
  children,
}: SidebarNavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn(hasChildren ? "flex flex-col" : "")}>
      <Link
        to={href}
        className={cn(
          "relative flex items-center py-2 px-3 my-1 rounded-md transition-colors",
          expanded ? "justify-start" : "justify-center",
          active
            ? "bg-primary/20 text-primary backdrop-blur-sm"
            : "hover:bg-muted/80 hover:backdrop-blur-sm text-foreground/80 hover:text-foreground"
        )}
        onClick={(e) => {
          if (hasChildren) {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        <Icon className="sidebar-icon shrink-0" />
        {expanded && (
          <span className="ml-2 text-sm font-medium duration-200">{title}</span>
        )}
        {badge && expanded && (
          <Badge 
            variant="secondary" 
            className="ml-auto text-xs font-semibold bg-primary/10 text-primary"
          >
            {badge}
          </Badge>
        )}
        {hasChildren && expanded && (
          <ChevronRight
            className={cn(
              "h-4 w-4 ml-auto transition-transform",
              isOpen && "rotate-90"
            )}
          />
        )}
        {badge && !expanded && (
          <Badge 
            variant="secondary" 
            className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px] font-semibold bg-primary text-primary-foreground"
          >
            {badge}
          </Badge>
        )}
      </Link>
      {hasChildren && isOpen && expanded && (
        <div className="ml-4 mt-1 pl-4 border-l border-border/40 backdrop-blur-sm">{children}</div>
      )}
    </div>
  );
};

export function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      className={cn(
        "group flex flex-col border-r border-border/40 bg-sidebar/40 backdrop-blur-lg h-screen overflow-hidden transition-all duration-300 ease-in-out sticky top-0 left-0",
        expanded ? "w-64" : "w-16"
      )}
    >
      <div className="flex items-center h-16 px-3 border-b border-border/40">
        <div className="flex items-center">
          {expanded ? (
            <Link 
              to="/" 
              className="flex items-center gap-2 font-bold text-xl text-primary"
            >
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-white">
                HR
              </div>
              <span className="text-gradient-primary">HRMS Pro</span>
            </Link>
          ) : (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link 
                    to="/" 
                    className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-white mx-auto"
                  >
                    HR
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">HRMS Pro</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto hover:bg-muted/50"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      </div>

      <div className="flex-1 overflow-auto py-2 px-3 glass-scrollbar">
        <div className="mb-4">
          <p className={cn("text-xs font-semibold text-muted-foreground mb-2", !expanded && "text-center")}>
            {expanded ? "GENERAL" : "..."}
          </p>
          <nav className="flex flex-col">
            <SidebarNavItem
              icon={LayoutDashboard}
              title="Admin Dashboard"
              href="/"
              expanded={expanded}
              active={isActive("/")}
              badge="3"
            />
            <SidebarNavItem
              icon={UserCheck}
              title="Employee Dashboard" 
              href="/employee-dashboard"
              expanded={expanded}
              active={isActive("/employee-dashboard")}
              badge="New"
            />
            <SidebarNavItem
              icon={Users}
              title="Employees"
              href="/employees"
              expanded={expanded}
              active={isActive("/employees")}
            />
            <SidebarNavItem
              icon={FileText}
              title="Payroll"
              href="/payroll"
              expanded={expanded}
              active={isActive("/payroll")}
            />
            <SidebarNavItem
              icon={ClipboardList}
              title="Attendance"
              href="/attendance"
              expanded={expanded}
              active={isActive("/attendance")}
            />
            <SidebarNavItem
              icon={Timer}
              title="Leave Tracker"
              href="/leave"
              expanded={expanded}
              active={isActive("/leave")}
              badge="5"
            />
          </nav>
        </div>

        <div className="mb-4">
          <p className={cn("text-xs font-semibold text-muted-foreground mb-2", !expanded && "text-center")}>
            {expanded ? "MANAGEMENT" : "..."}
          </p>
          <nav className="flex flex-col">
            <SidebarNavItem
              icon={Star}
              title="Performance"
              href="/performance"
              expanded={expanded}
              active={isActive("/performance")}
            />
            <SidebarNavItem
              icon={UserPlus}
              title="Recruitment"
              href="/recruitment"
              expanded={expanded}
              active={isActive("/recruitment")}
              badge="2"
            />
            <SidebarNavItem
              icon={Calendar}
              title="Calendar"
              href="/calendar"
              expanded={expanded}
              active={isActive("/calendar")}
            />
          </nav>
        </div>

        <div className="mb-4">
          <p className={cn("text-xs font-semibold text-muted-foreground mb-2", !expanded && "text-center")}>
            {expanded ? "SUPPORT" : "..."}
          </p>
          <nav className="flex flex-col">
            <SidebarNavItem
              icon={HelpCircle}
              title="Help Center"
              href="/help"
              expanded={expanded}
              active={isActive("/help")}
            />
            <SidebarNavItem
              icon={Settings}
              title="Settings"
              href="/settings"
              expanded={expanded}
              active={isActive("/settings")}
            />
            <SidebarNavItem
              icon={User}
              title="Profile"
              href="/profile"
              expanded={expanded}
              active={isActive("/profile")}
            />
          </nav>
        </div>

        {expanded && (
          <div className="mt-auto mb-4 p-3">
            <div className="rounded-lg glass-card p-3 border border-primary/10">
              <h4 className="text-sm font-medium mb-1">Need help?</h4>
              <p className="text-xs text-muted-foreground mb-2">Check our documentation</p>
              <Button size="sm" variant="outline" className="w-full text-xs bg-white/80 backdrop-blur-sm hover:bg-white">
                View Docs
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
