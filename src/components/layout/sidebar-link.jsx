
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip";
import { Badge } from "../../components/ui/badge";
import { motion } from "framer-motion";

export function SidebarLink({ to, icon: Icon, label, notificationCount, isActive }) {
  const location = useLocation();
  const active = isActive !== undefined ? isActive : location.pathname === to;

  const linkVariants = {
    rest: {
      backgroundColor: "transparent",
      transition: { duration: 0.2, ease: "easeInOut" }
    },
    hover: { 
      backgroundColor: "var(--sidebar-hover)",
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  const iconMotion = {
    rest: { 
      scale: 1,
      transition: { duration: 0.2 }
    },
    hover: { 
      scale: 1.08,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <motion.div
            variants={linkVariants}
            initial="rest"
            whileHover="hover"
            className="my-1"
          >
            <Link
              to={to}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-all duration-200",
                "hover:text-sidebar-accent-foreground",
                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sidebar-ring",
                active && "bg-sidebar-accent/80 text-sidebar-accent-foreground font-medium"
              )}
            >
              <div className="flex items-center gap-3 w-full">
                <motion.div
                  variants={iconMotion}
                  className="flex-shrink-0"
                >
                  <Icon className="sidebar-icon" />
                </motion.div>
                <span className="text-sm">{label}</span>
                {notificationCount && notificationCount > 0 ? (
                  <Badge 
                    variant="outline" 
                    className="ml-auto bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
                  >
                    {notificationCount}
                  </Badge>
                ) : null}
              </div>
            </Link>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent side="right" className="glass-frost">
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
