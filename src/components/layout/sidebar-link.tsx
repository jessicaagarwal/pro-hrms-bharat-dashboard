
import { Link, useLocation } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface SidebarLinkProps {
  to: string;
  icon: LucideIcon;
  label: string;
  notificationCount?: number;
  isActive?: boolean;
}

export function SidebarLink({ to, icon: Icon, label, notificationCount, isActive }: SidebarLinkProps) {
  const location = useLocation();
  const active = isActive !== undefined ? isActive : location.pathname === to;

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <Link
            to={to}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-all duration-300",
              "hover:bg-sidebar-accent/80 hover:text-sidebar-accent-foreground hover:shadow-sm",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
              active && "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
            )}
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
              className="flex items-center gap-3 w-full"
            >
              <Icon className="sidebar-icon" />
              <span className="text-sm">{label}</span>
              {notificationCount && notificationCount > 0 ? (
                <Badge 
                  variant="outline" 
                  className="ml-auto bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  {notificationCount}
                </Badge>
              ) : null}
            </motion.div>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right" className="glass-frost">
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
