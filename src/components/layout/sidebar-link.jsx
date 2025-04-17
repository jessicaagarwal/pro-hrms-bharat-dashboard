import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";

/**
 * @typedef {Object} SidebarLinkProps
 * @property {string} to - The route to navigate to
 * @property {import('lucide-react').LucideIcon} icon - The icon component to display
 * @property {string} label - The link label text
 * @property {number} [notificationCount] - Optional notification count to display
 * @property {boolean} [isActive] - Optional flag to force active state
 */

/**
 * Sidebar link component for navigation
 * @param {SidebarLinkProps} props - Component props
 */
export function SidebarLink({ to, icon: Icon, label, notificationCount, isActive }) {
  const location = useLocation();
  const { logout } = useAuth();
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

SidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  notificationCount: PropTypes.number,
  isActive: PropTypes.bool
};
