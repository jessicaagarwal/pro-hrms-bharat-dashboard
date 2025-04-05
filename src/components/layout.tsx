
import { ReactNode } from "react";
import { Sidebar } from "./layout/sidebar";
import { Header } from "./header";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  breadcrumb?: boolean;
}

export function Layout({ children, title, subtitle, breadcrumb = true }: LayoutProps) {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  const formatBreadcrumbLabel = (segment: string) => {
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
          <div className="mx-auto container space-y-6">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center animate-fade-in">
              <div>
                {title && <h1 className="text-3xl font-bold tracking-tight">{title}</h1>}
                {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
              </div>
              {breadcrumb && pathSegments.length > 0 && (
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
              )}
            </div>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
