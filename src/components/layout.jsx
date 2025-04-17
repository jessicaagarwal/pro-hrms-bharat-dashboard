import { useEffect } from "react";
import { Sidebar } from "./layout/sidebar";
import { Header } from "./header";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Layout({ children, title, subtitle, breadcrumb = true }) {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const formatBreadcrumbLabel = (segment) => {
    return segment.replace(/-/g, ' ').split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8 bg-muted/30">
          <motion.div 
            className="mx-auto container space-y-4 sm:space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col justify-between gap-3 sm:gap-4 md:flex-row md:items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pt-14 md:pt-0"
              >
                {title && (
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                    {title}
                  </h1>
                )}
                {subtitle && (
                  <p className="text-sm sm:text-base text-muted-foreground mt-1">
                    {subtitle}
                  </p>
                )}
              </motion.div>
              
              <AnimatePresence mode="wait">
                {breadcrumb && pathSegments.length > 0 && (
                  <motion.div
                    key="breadcrumb"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="hidden sm:block"
                  >
                    <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="/" className="hover:text-primary transition-colors">
                            Home
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        {pathSegments.map((segment, index) => {
                          const isLast = index === pathSegments.length - 1;
                          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
                          
                          return isLast ? (
                            <BreadcrumbItem key={segment}>
                              <BreadcrumbPage>{formatBreadcrumbLabel(segment)}</BreadcrumbPage>
                            </BreadcrumbItem>
                          ) : (
                            <BreadcrumbItem key={segment}>
                              <BreadcrumbLink 
                                href={href} 
                                className="hover:text-primary transition-colors"
                              >
                                {formatBreadcrumbLabel(segment)}
                              </BreadcrumbLink>
                              <BreadcrumbSeparator />
                            </BreadcrumbItem>
                          );
                        })}
                      </BreadcrumbList>
                    </Breadcrumb>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={cn(
                "rounded-lg border bg-card text-card-foreground shadow-sm",
                "p-4 sm:p-6 md:p-8"
              )}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {children}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
