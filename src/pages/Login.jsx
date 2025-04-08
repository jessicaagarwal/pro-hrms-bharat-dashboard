
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { BriefcaseBusiness, Lock, UserRound, Mail, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [adminCredentials, setAdminCredentials] = useState({
    email: "",
    password: "",
  });
  const [empCredentials, setEmpCredentials] = useState({
    email: "",
    password: "",
  });

  const handleAdminLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      if (adminCredentials.email === "admin@hrms.com" && adminCredentials.password === "admin123") {
        toast.success("Login successful", {
          description: "Welcome to HR Management System",
        });
        localStorage.setItem("userRole", "admin");
        navigate("/");
      } else {
        toast.error("Login failed", {
          description: "Invalid email or password",
        });
      }
      setLoading(false);
    }, 1000);
  };

  const handleEmployeeLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      if (empCredentials.email === "employee@hrms.com" && empCredentials.password === "emp123") {
        toast.success("Login successful", {
          description: "Welcome to HR Management System",
        });
        localStorage.setItem("userRole", "employee");
        navigate("/employee-dashboard");
      } else {
        toast.error("Login failed", {
          description: "Invalid email or password",
        });
      }
      setLoading(false);
    }, 1000);
  };

  const handleFillDemoCredentials = (type) => {
    if (type === 'admin') {
      setAdminCredentials({
        email: "admin@hrms.com",
        password: "admin123"
      });
    } else {
      setEmpCredentials({
        email: "employee@hrms.com",
        password: "emp123"
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <BriefcaseBusiness className="text-white" size={28} />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">HRMS Pro Login</CardTitle>
          <CardDescription>
            Login to access your dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="admin" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="admin" className="flex items-center gap-2">
                <Lock size={14} />
                <span>Admin</span>
              </TabsTrigger>
              <TabsTrigger value="employee" className="flex items-center gap-2">
                <UserRound size={14} />
                <span>Employee</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="admin">
              <form onSubmit={handleAdminLogin} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="admin-email"
                      type="email" 
                      placeholder="admin@company.com" 
                      className="pl-10"
                      value={adminCredentials.email}
                      onChange={(e) => setAdminCredentials({...adminCredentials, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="admin-password">Password</Label>
                    <button 
                      type="button"
                      onClick={() => handleFillDemoCredentials('admin')}
                      className="text-xs text-primary hover:underline"
                    >
                      Use demo credentials
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="admin-password" 
                      type="password"
                      className="pl-10"
                      value={adminCredentials.password}
                      onChange={(e) => setAdminCredentials({...adminCredentials, password: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    "Login as Admin"
                  )}
                </Button>
                <div className="text-center text-sm text-muted-foreground mt-2">
                  <p>Demo credentials:</p>
                  <div className="bg-muted/50 p-2 rounded-md mt-1">
                    <p className="font-mono text-xs">Email: admin@hrms.com</p>
                    <p className="font-mono text-xs">Password: admin123</p>
                  </div>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="employee">
              <form onSubmit={handleEmployeeLogin} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="emp-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="emp-email"
                      type="email" 
                      placeholder="employee@company.com" 
                      className="pl-10"
                      value={empCredentials.email}
                      onChange={(e) => setEmpCredentials({...empCredentials, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="emp-password">Password</Label>
                    <button 
                      type="button"
                      onClick={() => handleFillDemoCredentials('employee')}
                      className="text-xs text-primary hover:underline"
                    >
                      Use demo credentials
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="emp-password" 
                      type="password"
                      className="pl-10"
                      value={empCredentials.password}
                      onChange={(e) => setEmpCredentials({...empCredentials, password: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    "Login as Employee"
                  )}
                </Button>
                <div className="text-center text-sm text-muted-foreground mt-2">
                  <p>Demo credentials:</p>
                  <div className="bg-muted/50 p-2 rounded-md mt-1">
                    <p className="font-mono text-xs">Email: employee@hrms.com</p>
                    <p className="font-mono text-xs">Password: emp123</p>
                  </div>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p className="px-2 text-center text-xs text-muted-foreground">
            By logging in, you agree to our{" "}
            <a href="#" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </a>.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
