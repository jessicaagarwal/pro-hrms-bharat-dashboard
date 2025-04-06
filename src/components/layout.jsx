
import { useEffect } from "react";
import { Sidebar } from "./layout/sidebar";
import { Header } from "./header";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-4 md:p-6 lg:p-8 bg-muted/30">
          <motion.div 
            className="mx-auto container space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {title && <h1 className="text-3xl font-bold tracking-tight">{title}</h1>}
                {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
              </motion.div>
              {breadcrumb && pathSegments.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/" className="hover-lift">Home</BreadcrumbLink>
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
                            <BreadcrumbLink href={href} className="hover-lift">
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
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {children}
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
