
import { Briefcase, CheckCircle2, Clock2, UserPlus, Users } from "lucide-react";
import { Layout } from "@/components/layout";
import { StatCard } from "@/components/dashboard/stat-card";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Recruitment() {
  return (
    <Layout title="Recruitment" subtitle="Manage job openings and candidate applications">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Open Positions"
          value="8"
          icon={Briefcase}
          description="Active job openings"
          iconColor="text-blue-500"
        />
        <StatCard
          title="Total Applications"
          value="143"
          icon={UserPlus}
          description="Across all positions"
          iconColor="text-primary"
        />
        <StatCard
          title="Interviews Scheduled"
          value="12"
          icon={Clock2}
          description="For this week"
          iconColor="text-amber-500"
        />
        <StatCard
          title="Candidates Hired"
          value="5"
          icon={CheckCircle2}
          description="In the last 30 days"
          iconColor="text-green-500"
        />
      </div>

      <div className="mt-6">
        <Tabs defaultValue="openings" className="w-full">
          <TabsList className="grid w-full grid-cols-4 md:w-auto">
            <TabsTrigger value="openings">Job Openings</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="interviews">Interviews</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="openings" className="mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Current Job Openings</h3>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <UserPlus className="mr-2 h-4 w-4" />
                    Post New Job
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Create New Job Opening</DialogTitle>
                    <DialogDescription>
                      Fill in the details for the new job position
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="job-title">Job Title</Label>
                      <Input id="job-title" placeholder="e.g. Senior Software Engineer" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="engineering">Engineering</SelectItem>
                          <SelectItem value="design">Design</SelectItem>
                          <SelectItem value="product">Product</SelectItem>
                          <SelectItem value="marketing">Marketing</SelectItem>
                          <SelectItem value="sales">Sales</SelectItem>
                          <SelectItem value="hr">HR</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mumbai">Mumbai</SelectItem>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="bangalore">Bangalore</SelectItem>
                          <SelectItem value="hyderabad">Hyderabad</SelectItem>
                          <SelectItem value="chennai">Chennai</SelectItem>
                          <SelectItem value="remote">Remote</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employment-type">Employment Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-time">Full-time</SelectItem>
                          <SelectItem value="part-time">Part-time</SelectItem>
                          <SelectItem value="contract">Contract</SelectItem>
                          <SelectItem value="internship">Internship</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="experience">Experience Required</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="1-3">1-3 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="5-7">5-7 years</SelectItem>
                          <SelectItem value="7+">7+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="description">Job Description</Label>
                      <textarea 
                        id="description"
                        className="min-h-[150px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter detailed job description"
                      />
                    </div>
                  </div>
                  
                  <DialogFooter>
                    <Button type="submit">Publish Job</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <JobCard 
                title="Senior Software Engineer"
                department="Engineering"
                location="Mumbai"
                type="Full-time"
                applicants={28}
                posted="2 weeks ago"
                status="active"
              />
              <JobCard 
                title="UX Designer"
                department="Design"
                location="Bangalore"
                type="Full-time"
                applicants={14}
                posted="1 week ago"
                status="active"
              />
              <JobCard 
                title="Product Manager"
                department="Product"
                location="Delhi"
                type="Full-time"
                applicants={19}
                posted="3 weeks ago"
                status="active"
              />
              <JobCard 
                title="HR Associate"
                department="HR"
                location="Mumbai"
                type="Full-time"
                applicants={8}
                posted="5 days ago"
                status="active"
              />
              <JobCard 
                title="Data Analyst"
                department="Engineering"
                location="Remote"
                type="Contract"
                applicants={22}
                posted="2 weeks ago"
                status="active"
              />
              <JobCard 
                title="Marketing Specialist"
                department="Marketing"
                location="Hyderabad"
                type="Full-time"
                applicants={11}
                posted="1 week ago"
                status="active"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="applications" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>
                  Latest candidate applications received for all positions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <CandidateApplication 
                    name="Priya Sharma"
                    position="Senior Software Engineer"
                    appliedDate="2 days ago"
                    status="screening"
                  />
                  <CandidateApplication 
                    name="Raj Malhotra"
                    position="UX Designer"
                    appliedDate="1 week ago"
                    status="interview"
                  />
                  <CandidateApplication 
                    name="Ananya Desai"
                    position="Product Manager"
                    appliedDate="3 days ago"
                    status="screening"
                  />
                  <CandidateApplication 
                    name="Vikram Patel"
                    position="Senior Software Engineer"
                    appliedDate="1 day ago"
                    status="new"
                  />
                  <CandidateApplication 
                    name="Neha Singh"
                    position="Marketing Specialist"
                    appliedDate="4 days ago"
                    status="offer"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="interviews" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Interviews</CardTitle>
                <CardDescription>Scheduled interviews for the week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <InterviewSchedule 
                    candidate="Raj Malhotra"
                    position="UX Designer"
                    date="Today, 2:00 PM"
                    interviewers={["Priya Kapoor", "Vikram Mehta"]}
                    round="Design Challenge"
                  />
                  <InterviewSchedule 
                    candidate="Kiran Joshi"
                    position="Data Analyst"
                    date="Tomorrow, 10:30 AM"
                    interviewers={["Amit Patel", "Neha Singh"]}
                    round="Technical Round"
                  />
                  <InterviewSchedule 
                    candidate="Siddharth Verma"
                    position="Senior Software Engineer"
                    date="Oct 12, 3:00 PM"
                    interviewers={["Rahul Gupta", "Anjali Sharma"]}
                    round="System Design"
                  />
                  <InterviewSchedule 
                    candidate="Meera Reddy"
                    position="HR Associate"
                    date="Oct 14, 11:00 AM"
                    interviewers={["Priya Sharma", "Vikram Patel"]}
                    round="HR Round"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Hiring Pipeline</CardTitle>
                  <CardDescription>Overview of candidates at each stage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">New Applications</span>
                        <span className="text-sm font-medium">42</span>
                      </div>
                      <Progress value={42} max={150} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Resume Screening</span>
                        <span className="text-sm font-medium">28</span>
                      </div>
                      <Progress value={28} max={150} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Phone Interview</span>
                        <span className="text-sm font-medium">15</span>
                      </div>
                      <Progress value={15} max={150} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Technical Round</span>
                        <span className="text-sm font-medium">9</span>
                      </div>
                      <Progress value={9} max={150} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">HR Interview</span>
                        <span className="text-sm font-medium">6</span>
                      </div>
                      <Progress value={6} max={150} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Offer Stage</span>
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <Progress value={3} max={150} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Time-to-Hire</CardTitle>
                  <CardDescription>Average number of days to fill positions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div>
                        <p className="font-medium">Engineering</p>
                        <p className="text-sm text-muted-foreground">Software Engineers, Data Scientists</p>
                      </div>
                      <Badge variant="outline">45 days</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div>
                        <p className="font-medium">Design</p>
                        <p className="text-sm text-muted-foreground">UX/UI Designers, Visual Designers</p>
                      </div>
                      <Badge variant="outline">32 days</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div>
                        <p className="font-medium">Marketing</p>
                        <p className="text-sm text-muted-foreground">Marketing Specialists, Content Writers</p>
                      </div>
                      <Badge variant="outline">28 days</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div>
                        <p className="font-medium">Sales</p>
                        <p className="text-sm text-muted-foreground">Sales Representatives, Account Managers</p>
                      </div>
                      <Badge variant="outline">25 days</Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Detailed Reports
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}

function JobCard({ title, department, location, type, applicants, posted, status }: {
  title: string;
  department: string;
  location: string;
  type: string;
  applicants: number;
  posted: string;
  status: "active" | "closed" | "draft";
}) {
  return (
    <Card className="border shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>{department} • {location} • {type}</CardDescription>
          </div>
          <Badge 
            variant={status === "active" ? "default" : status === "closed" ? "secondary" : "outline"}
            className={status === "active" ? "bg-green-500" : ""}
          >
            {status === "active" ? "Active" : status === "closed" ? "Closed" : "Draft"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{applicants} applicants</span>
          </div>
          <div>Posted {posted}</div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          View Details
        </Button>
        <Button variant="ghost" size="sm">
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
}

function CandidateApplication({ name, position, appliedDate, status }: {
  name: string;
  position: string;
  appliedDate: string;
  status: "new" | "screening" | "interview" | "offer" | "rejected";
}) {
  return (
    <div className="flex items-start justify-between p-4 border rounded-lg">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png" alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">{position}</p>
          <p className="text-xs text-muted-foreground">Applied {appliedDate}</p>
        </div>
      </div>
      <div>
        <Badge 
          className={
            status === "new" ? "bg-blue-500" :
            status === "screening" ? "bg-amber-500" :
            status === "interview" ? "bg-purple-500" :
            status === "offer" ? "bg-green-500" :
            "bg-red-500"
          }
        >
          {status === "new" ? "New" : 
           status === "screening" ? "Screening" : 
           status === "interview" ? "Interview" :
           status === "offer" ? "Offer" : "Rejected"}
        </Badge>
        <Button variant="outline" size="sm" className="ml-2">
          View Profile
        </Button>
      </div>
    </div>
  );
}

function InterviewSchedule({ candidate, position, date, interviewers, round }: {
  candidate: string;
  position: string;
  date: string;
  interviewers: string[];
  round: string;
}) {
  return (
    <div className="flex items-start justify-between p-4 border rounded-lg">
      <div className="space-y-2">
        <div>
          <p className="font-medium">{candidate}</p>
          <p className="text-sm text-muted-foreground">{position}</p>
        </div>
        <div className="text-sm">
          <div className="flex items-center gap-2">
            <Clock2 className="h-4 w-4 text-muted-foreground" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>With {interviewers.join(", ")}</span>
          </div>
        </div>
        <Badge variant="outline">{round}</Badge>
      </div>
      <div className="space-y-2">
        <Button size="sm" className="w-full">Join</Button>
        <Button variant="outline" size="sm" className="w-full">Reschedule</Button>
      </div>
    </div>
  );
}
