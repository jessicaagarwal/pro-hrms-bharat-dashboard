
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";

export function SidebarSection({ title, children }) {
  const sectionVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.2,
        staggerChildren: 0.05
      } 
    }
  };

  return (
    <motion.div 
      className="px-3 py-2"
      variants={sectionVariants}
    >
      {title && (
        <h3 className="mb-2 px-4 text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider">
          {title}
        </h3>
      )}
      <motion.div 
        className="space-y-1"
        variants={sectionVariants}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
