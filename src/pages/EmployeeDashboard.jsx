
import { Layout } from "../components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Progress } from "../components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { StatCard } from "../components/dashboard/stat-card";
import { AttendanceTracker } from "../components/attendance/attendance-tracker";
import { Clock, CalendarDays, Award, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { toast } from "sonner";

export default function EmployeeDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    toast.success("Logged out successfully");
    navigate("/login");
  };
  
  return (
    <Layout title="Employee Dashboard" subtitle="Your personal workspace">
      <div className="space-y-8">
        {/* Welcome Card */}
        <Card className="glass-card">
          <CardContent className="p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="h-20 w-20 border-4 border-primary/20">
              <AvatarImage src="/lovable-uploads/1738c999-4470-49c9-bff5-4b748c16afd4.png" />
              <AvatarFallback>RS</AvatarFallback>
            </Avatar>
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-2xl font-bold">Welcome back, Rahul Singh</h2>
              <p className="text-muted-foreground">Senior Software Engineer • Development Department</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                <Badge variant="outline" className="bg-primary/10">ID: EMP-2023-045</Badge>
                <Badge variant="outline" className="bg-primary/10">5+ Years</Badge>
                <Badge variant="outline" className="bg-primary/10">Full-time</Badge>
              </div>
            </div>
            <div className="ml-auto hidden md:flex flex-col items-end space-y-2">
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>Last login: Today, 09:45 AM</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-primary border-primary/20"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Attendance Tracker */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2">
            <AttendanceTracker />
          </div>
          
          <div className="space-y-4">
            <StatCard
              title="Leave Balance"
              value="12 days"
              icon={CalendarDays}
              description="4 sick, 8 casual leaves remaining"
              iconColor="text-amber-500"
            />
            <StatCard
              title="Attendance"
              value="97.5%"
              icon={Clock}
              description="This month's attendance rate"
              iconColor="text-green-500"
            />
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Your Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Code Quality</span>
                        <span className="text-sm font-medium">96%</span>
                      </div>
                      <Progress value={96} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Project Delivery</span>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Team Collaboration</span>
                        <span className="text-sm font-medium">89%</span>
                      </div>
                      <Progress value={89} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Communication</span>
                        <span className="text-sm font-medium">94%</span>
                      </div>
                      <Progress value={94} className="h-2" />
                    </div>
                    
                    <div className="pt-4 flex justify-end">
                      <Badge className="bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer">View Full Report</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Upcoming Leaves</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border border-border/50 rounded-lg p-3 hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-blue-500/20 text-blue-500">
                        <CalendarDays className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Casual Leave</h4>
                        <p className="text-sm text-muted-foreground">Apr 15, 2025 - Apr 16, 2025</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800 border-green-200">Approved</Badge>
                    </div>
                  </div>
                  
                  <div className="border border-border/50 rounded-lg p-3 hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-amber-500/20 text-amber-500">
                        <CalendarDays className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Sick Leave</h4>
                        <p className="text-sm text-muted-foreground">May 5, 2025</p>
                      </div>
                      <Badge className="bg-amber-100 text-amber-800 border-amber-200">Pending</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="documents" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border border-border/50 rounded-lg p-4 hover:bg-accent/50 transition-colors cursor-pointer">
                    <h3 className="font-medium mb-1">Employment Contract</h3>
                    <p className="text-sm text-muted-foreground mb-2">PDF Document • Updated Jan 2025</p>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm">View Document</Button>
                    </div>
                  </div>
                  
                  <div className="border border-border/50 rounded-lg p-4 hover:bg-accent/50 transition-colors cursor-pointer">
                    <h3 className="font-medium mb-1">ID Proof Documents</h3>
                    <p className="text-sm text-muted-foreground mb-2">Multiple Files • Updated Dec 2024</p>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm">View Documents</Button>
                    </div>
                  </div>
                  
                  <div className="border border-border/50 rounded-lg p-4 hover:bg-accent/50 transition-colors cursor-pointer">
                    <h3 className="font-medium mb-1">Salary Slips</h3>
                    <p className="text-sm text-muted-foreground mb-2">PDF Document • Updated Monthly</p>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm">View Documents</Button>
                    </div>
                  </div>
                  
                  <div className="border border-border/50 rounded-lg p-4 hover:bg-accent/50 transition-colors cursor-pointer">
                    <h3 className="font-medium mb-1">Medical Insurance</h3>
                    <p className="text-sm text-muted-foreground mb-2">PDF Document • Updated Mar 2025</p>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm">View Document</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
