
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
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarNavItemProps {
  icon: React.ElementType;
  title: string;
  href: string;
  expanded: boolean;
  active: boolean;
  hasChildren?: boolean;
  children?: React.ReactNode;
}

const SidebarNavItem = ({
  icon: Icon,
  title,
  href,
  expanded,
  active,
  hasChildren = false,
  children,
}: SidebarNavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn(hasChildren ? "flex flex-col" : "")}>
      <Link
        to={href}
        className={cn(
          "flex items-center py-2 px-3 my-1 rounded-md transition-colors",
          expanded ? "justify-start" : "justify-center",
          active
            ? "bg-primary/10 text-primary"
            : "hover:bg-muted text-foreground/80 hover:text-foreground"
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
        {hasChildren && expanded && (
          <ChevronRight
            className={cn(
              "h-4 w-4 ml-auto transition-transform",
              isOpen && "rotate-90"
            )}
          />
        )}
      </Link>
      {hasChildren && isOpen && expanded && (
        <div className="ml-4 mt-1 pl-4 border-l border-border">{children}</div>
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
        "flex flex-col border-r bg-sidebar h-screen overflow-hidden transition-all duration-300 ease-in-out sticky top-0 left-0",
        expanded ? "w-64" : "w-16"
      )}
    >
      <div className="flex items-center h-16 px-3 border-b">
        <div className="flex items-center">
          {expanded ? (
            <Link 
              to="/" 
              className="flex items-center gap-2 font-bold text-xl text-primary"
            >
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-white">
                HR
              </div>
              <span>HRMS Pro</span>
            </Link>
          ) : (
            <Link 
              to="/" 
              className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-white mx-auto"
            >
              HR
            </Link>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      </div>

      <div className="flex-1 overflow-auto py-2 px-3">
        <div className="mb-4">
          <p className={cn("text-xs font-semibold text-muted-foreground mb-2", !expanded && "text-center")}>
            {expanded ? "GENERAL" : "..."}
          </p>
          <nav className="flex flex-col">
            <SidebarNavItem
              icon={LayoutDashboard}
              title="Dashboard"
              href="/"
              expanded={expanded}
              active={isActive("/")}
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
          </nav>
        </div>
      </div>
    </div>
  );
}
