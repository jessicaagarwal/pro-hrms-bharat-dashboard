
import { motion } from "framer-motion";

export function SidebarSection({ title, children }) {
  const sectionVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.25,
        staggerChildren: 0.04
      } 
    }
  };

  const childVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.15 }
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
        {Array.isArray(children) ? 
          children.map((child, index) => (
            <motion.div key={index} variants={childVariants}>
              {child}
            </motion.div>
          )) : 
          <motion.div variants={childVariants}>
            {children}
          </motion.div>
        }
      </motion.div>
    </motion.div>
  );
}
