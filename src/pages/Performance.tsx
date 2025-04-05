
import { BarChart3, LineChart, Star, Trophy, TrendingUp } from "lucide-react";
import { Layout } from "@/components/layout";
import { StatCard } from "@/components/dashboard/stat-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const performanceData = [
  { month: 'Jan', rating: 3.2 },
  { month: 'Feb', rating: 3.5 },
  { month: 'Mar', rating: 3.3 },
  { month: 'Apr', rating: 3.6 },
  { month: 'May', rating: 3.8 },
  { month: 'Jun', rating: 4.0 },
  { month: 'Jul', rating: 3.9 },
  { month: 'Aug', rating: 4.2 },
  { month: 'Sep', rating: 4.5 },
  { month: 'Oct', rating: 4.3 },
  { month: 'Nov', rating: 4.4 },
  { month: 'Dec', rating: 4.6 },
];

export default function Performance() {
  return (
    <Layout title="Performance Management" subtitle="Track and improve employee performance">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Current Rating"
          value="4.5/5"
          icon={Star}
          description="Last updated Oct 2025"
          iconColor="text-yellow-500"
        />
        <StatCard
          title="Goals Achieved"
          value="86%"
          icon={Trophy}
          description="12 of 14 goals met"
          iconColor="text-purple-500"
        />
        <StatCard
          title="Performance Trend"
          value="+12%"
          icon={TrendingUp}
          description="From last quarter"
          iconColor="text-green-500"
        />
        <StatCard
          title="Upcoming Reviews"
          value="2"
          icon={BarChart3}
          description="Next review in 15 days"
          iconColor="text-blue-500"
        />
      </div>

      <div className="mt-6">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 md:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="goals">Goals & OKRs</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Rating Trend</CardTitle>
                  <CardDescription>
                    Your performance rating over the past 12 months
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={performanceData}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[0, 5]} />
                      <Tooltip />
                      <Area type="monotone" dataKey="rating" stroke="#00AF99" fill="#00AF9944" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Key Performance Areas</CardTitle>
                  <CardDescription>
                    Scores across different performance parameters
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Technical Skills</span>
                        <span className="text-sm font-medium">4.7/5</span>
                      </div>
                      <Progress value={94} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Communication</span>
                        <span className="text-sm font-medium">4.2/5</span>
                      </div>
                      <Progress value={84} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Teamwork</span>
                        <span className="text-sm font-medium">4.5/5</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Leadership</span>
                        <span className="text-sm font-medium">4.0/5</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Productivity</span>
                        <span className="text-sm font-medium">4.6/5</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Performance Highlights</CardTitle>
                <CardDescription>Recent achievements and areas of improvement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-primary">Key Achievements</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Badge className="rounded-full h-2 w-2 p-0" />
                        <span>Successfully delivered the quarterly project two weeks ahead of schedule</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge className="rounded-full h-2 w-2 p-0" />
                        <span>Improved team's code quality metrics by 15%</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge className="rounded-full h-2 w-2 p-0" />
                        <span>Mentored 2 junior team members who are now performing above expectations</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-primary">Areas for Improvement</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Badge className="rounded-full h-2 w-2 p-0" />
                        <span>Documentation needs to be more comprehensive</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge className="rounded-full h-2 w-2 p-0" />
                        <span>Could take more initiative in cross-team collaboration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge className="rounded-full h-2 w-2 p-0" />
                        <span>Time management during meetings can be improved</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="goals" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Goals & Objectives</CardTitle>
                <CardDescription>Track your progress on assigned goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-medium">Improve API Performance</h3>
                        <p className="text-sm text-muted-foreground">Optimize backend APIs to improve response time by 30%</p>
                      </div>
                      <Badge variant="outline">Q4 Goal</Badge>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="space-y-1">
                        <div className="text-sm flex items-center gap-2">
                          <span className="font-medium">Deadline:</span>
                          <span>Dec 25, 2025</span>
                        </div>
                        <div className="text-sm flex items-center gap-2">
                          <span className="font-medium">Progress:</span>
                          <span>75%</span>
                        </div>
                      </div>
                      <Progress value={75} className="w-1/3 h-2" />
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-medium">Implement New Authentication System</h3>
                        <p className="text-sm text-muted-foreground">Upgrade to OAuth 2.0 and enable 2FA for all internal applications</p>
                      </div>
                      <Badge variant="outline">Q4 Goal</Badge>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="space-y-1">
                        <div className="text-sm flex items-center gap-2">
                          <span className="font-medium">Deadline:</span>
                          <span>Oct 30, 2025</span>
                        </div>
                        <div className="text-sm flex items-center gap-2">
                          <span className="font-medium">Progress:</span>
                          <span>100%</span>
                        </div>
                      </div>
                      <Progress value={100} className="w-1/3 h-2" />
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-medium">User Experience Improvement</h3>
                        <p className="text-sm text-muted-foreground">Redesign dashboard UI based on user feedback and improve satisfaction score</p>
                      </div>
                      <Badge variant="outline">Q4 Goal</Badge>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="space-y-1">
                        <div className="text-sm flex items-center gap-2">
                          <span className="font-medium">Deadline:</span>
                          <span>Nov 15, 2025</span>
                        </div>
                        <div className="text-sm flex items-center gap-2">
                          <span className="font-medium">Progress:</span>
                          <span>40%</span>
                        </div>
                      </div>
                      <Progress value={40} className="w-1/3 h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="feedback" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>360° Feedback</CardTitle>
                <CardDescription>Feedback received from peers and managers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-4 mb-2">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png" alt="Avatar" />
                        <AvatarFallback>RP</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Rahul Patel</p>
                        <p className="text-sm text-muted-foreground">Engineering Manager</p>
                      </div>
                      <div className="ml-auto flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                    <p className="text-sm">
                      "Consistently delivers high-quality work and exceeds expectations. A valuable team member who proactively solves problems and helps others. Shows excellent technical skills and communication abilities."
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">Received on Oct 5, 2025</p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-4 mb-2">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png" alt="Avatar" />
                        <AvatarFallback>PK</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Priya Kapoor</p>
                        <p className="text-sm text-muted-foreground">Team Lead</p>
                      </div>
                      <div className="ml-auto flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    <p className="text-sm">
                      "Great team player who always supports colleagues. Technical skills are excellent, but could improve on documentation. Overall, a highly valuable contributor to the team."
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">Received on Sep 15, 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Performance Reviews</CardTitle>
                <CardDescription>Historical review summaries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">Annual Review 2024</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium">4.5/5</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Review period: Jan 2024 - Dec 2024
                    </p>
                    <div className="grid gap-1 pt-2">
                      <div className="flex justify-between">
                        <p className="text-sm">Technical Skills</p>
                        <p className="text-sm">4.7/5</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm">Communication</p>
                        <p className="text-sm">4.3/5</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm">Teamwork</p>
                        <p className="text-sm">4.5/5</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm">Productivity</p>
                        <p className="text-sm">4.6/5</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">Mid-Year Review 2024</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium">4.2/5</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Review period: Jan 2024 - Jun 2024
                    </p>
                    <div className="grid gap-1 pt-2">
                      <div className="flex justify-between">
                        <p className="text-sm">Technical Skills</p>
                        <p className="text-sm">4.5/5</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm">Communication</p>
                        <p className="text-sm">4.0/5</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm">Teamwork</p>
                        <p className="text-sm">4.3/5</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm">Productivity</p>
                        <p className="text-sm">4.2/5</p>
                      </div>
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
