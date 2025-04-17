import PropTypes from 'prop-types';
import { motion } from "framer-motion";

/**
 * @typedef {Object} SidebarSectionProps
 * @property {string} [title] - Optional section title
 * @property {React.ReactNode} children - Child components
 */

/**
 * Sidebar section component for grouping sidebar items
 * @param {SidebarSectionProps} props - Component props
 */
export function SidebarSection({ title, children }) {
  return (
    <motion.div 
      className="px-3 py-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {title && (
        <h3 className="mb-2 px-4 text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider">
          {title}
        </h3>
      )}
      <motion.div 
        className="space-y-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

SidebarSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};
