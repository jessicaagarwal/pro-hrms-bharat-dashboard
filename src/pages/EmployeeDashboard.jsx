
import { Layout } from "../components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Progress } from "../components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { StatCard } from "../components/dashboard/stat-card";
import { Clock, CalendarDays, Briefcase, TrendingUp } from "lucide-react";

export default function EmployeeDashboard() {
  return (
    <Layout title="Employee Dashboard" subtitle="Your personal workspace">
      <div className="space-y-8">
        {/* Welcome Card */}
        <Card className="glass-card">
          <CardContent className="p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="h-20 w-20 border-4 border-primary/20">
              <AvatarImage src="/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png" />
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
              <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                <span>View Calendar</span>
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Row */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
          <StatCard
            title="Performance"
            value="4.8/5"
            icon={TrendingUp}
            description="Last quarterly review"
            iconColor="text-primary"
          />
          <StatCard
            title="Projects"
            value="3"
            icon={Briefcase}
            description="Ongoing projects"
            iconColor="text-blue-500"
          />
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
                  <CardDescription>Personal metrics and achievements</CardDescription>
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
            </div>
          </TabsContent>
          
          <TabsContent value="documents" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Documents</CardTitle>
                <CardDescription>Personal and company documents</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Document management content will appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
