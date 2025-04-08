
import { motion } from "framer-motion";

export function SidebarSection({ title, children }) {
  const sectionVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.2,
        staggerChildren: 0.03,
        ease: "easeOut"
      } 
    },
    exit: {
      opacity: 0,
      y: -4,
      transition: {
        duration: 0.15
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, x: -3 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.12, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      x: -2,
      transition: { duration: 0.1 }
    }
  };

  return (
    <motion.div 
      className="px-3 py-2"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
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
