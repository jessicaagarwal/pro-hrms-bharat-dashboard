
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { useToast } from "../hooks/use-toast";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, User, LockKeyhole } from "lucide-react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [adminCredentials, setAdminCredentials] = useState({ email: "", password: "" });
  const [employeeCredentials, setEmployeeCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      // Dummy authentication logic
      if (adminCredentials.email === "admin@hrms.com" && adminCredentials.password === "admin123") {
        toast({
          title: "Login successful",
          description: "Welcome back, Admin!",
        });
        localStorage.setItem("userRole", "admin");
        navigate("/");
      } else {
        toast({
          title: "Login failed",
          description: "Invalid credentials. Try the demo credentials below.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleEmployeeLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      // Dummy authentication logic
      if (employeeCredentials.email === "employee@hrms.com" && employeeCredentials.password === "emp123") {
        toast({
          title: "Login successful",
          description: "Welcome back!",
        });
        localStorage.setItem("userRole", "employee");
        navigate("/employee-dashboard");
      } else {
        toast({
          title: "Login failed",
          description: "Invalid credentials. Try the demo credentials below.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  const useDemoAdminCredentials = () => {
    setAdminCredentials({ email: "admin@hrms.com", password: "admin123" });
  };

  const useDemoEmployeeCredentials = () => {
    setEmployeeCredentials({ email: "employee@hrms.com", password: "emp123" });
  };

  return (
    <motion.div
      className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-secondary/20 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="mx-auto max-w-md w-full shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>Sign in to access your dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="admin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="admin">Admin</TabsTrigger>
              <TabsTrigger value="employee">Employee</TabsTrigger>
            </TabsList>

            <TabsContent value="admin">
              <form onSubmit={handleAdminLogin}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="admin-email">Email</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400">
                        <User size={16} />
                      </span>
                      <Input
                        id="admin-email"
                        type="email"
                        value={adminCredentials.email}
                        onChange={(e) => setAdminCredentials({ ...adminCredentials, email: e.target.value })}
                        placeholder="admin@hrms.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="admin-password">Password</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400">
                        <LockKeyhole size={16} />
                      </span>
                      <Input
                        id="admin-password"
                        type="password"
                        value={adminCredentials.password}
                        onChange={(e) => setAdminCredentials({ ...adminCredentials, password: e.target.value })}
                        placeholder="••••••••"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing In...
                      </>
                    ) : (
                      <>
                        Sign In <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
              <div className="mt-4 text-center text-sm">
                <p className="text-muted-foreground mb-1">Demo credentials:</p>
                <p className="text-muted-foreground">Email: admin@hrms.com</p>
                <p className="text-muted-foreground mb-2">Password: admin123</p>
                <Button variant="outline" size="sm" onClick={useDemoAdminCredentials} className="mt-1">
                  Use demo credentials
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="employee">
              <form onSubmit={handleEmployeeLogin}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="employee-email">Email</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400">
                        <User size={16} />
                      </span>
                      <Input
                        id="employee-email"
                        type="email"
                        value={employeeCredentials.email}
                        onChange={(e) => setEmployeeCredentials({ ...employeeCredentials, email: e.target.value })}
                        placeholder="employee@hrms.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="employee-password">Password</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400">
                        <LockKeyhole size={16} />
                      </span>
                      <Input
                        id="employee-password"
                        type="password"
                        value={employeeCredentials.password}
                        onChange={(e) => setEmployeeCredentials({ ...employeeCredentials, password: e.target.value })}
                        placeholder="••••••••"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing In...
                      </>
                    ) : (
                      <>
                        Sign In <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
              <div className="mt-4 text-center text-sm">
                <p className="text-muted-foreground mb-1">Demo credentials:</p>
                <p className="text-muted-foreground">Email: employee@hrms.com</p>
                <p className="text-muted-foreground mb-2">Password: emp123</p>
                <Button variant="outline" size="sm" onClick={useDemoEmployeeCredentials} className="mt-1">
                  Use demo credentials
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-center">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Button variant="link" className="p-0" onClick={() => navigate("/signup")}>
                Sign up
              </Button>
            </p>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
