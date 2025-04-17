
import { useState } from "react";
import { Calendar, Clock, FileText, Mail, MapPin, Phone, UserCog, Shield, PenSquare } from "lucide-react";
import { Layout } from "@/components/layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

export default function Profile() {
  const { toast } = useToast();
  const [editing, setEditing] = useState(false);
  
  const saveProfile = () => {
    setEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  return (
    <Layout title="My Profile" subtitle="View and manage your personal information">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Amit Rajput</CardTitle>
                  <CardDescription>Senior Software Engineer</CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <PenSquare className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Profile</DialogTitle>
                      <DialogDescription>
                        Update your profile information
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="displayName">Display Name</Label>
                        <Input id="displayName" defaultValue="Amit Rajput" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" defaultValue="Senior Software Engineer" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="about">About</Label>
                        <textarea 
                          id="about" 
                          className="min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                          defaultValue="Full stack developer with 5+ years of experience in React, Node.js, and cloud technologies. Passionate about building scalable and user-friendly applications."
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" onClick={saveProfile}>Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col items-center pt-4">
              <Avatar className="h-32 w-32 mb-4">
                <AvatarImage src="/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png" alt="Amit Rajput" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <Badge className="mb-2">Engineering</Badge>
              <p className="text-sm text-center text-muted-foreground px-4 mb-4">
                Full stack developer with 5+ years of experience in React, Node.js, and cloud technologies. Passionate about building scalable and user-friendly applications.
              </p>
              <div className="grid grid-cols-2 gap-4 w-full">
                <Button variant="outline" size="sm" className="w-full">
                  Message
                </Button>
                <Button size="sm" className="w-full">
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-muted-foreground mr-2" />
                <p className="text-sm">amit.rajput@company.com</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                <p className="text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                <p className="text-sm">Mumbai, Maharashtra</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full">
                <PenSquare className="h-4 w-4 mr-2" />
                Edit Contact Info
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Team</CardTitle>
              <CardDescription>Your team members</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarFallback>RP</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Rahul Patel</p>
                    <p className="text-xs text-muted-foreground">Engineering Manager</p>
                  </div>
                </div>
                <Badge variant="outline">Manager</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarFallback>PK</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Priya Kumar</p>
                    <p className="text-xs text-muted-foreground">Senior Software Engineer</p>
                  </div>
                </div>
                <Badge variant="outline">Peer</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarFallback>VS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Vikram Singh</p>
                    <p className="text-xs text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
                <Badge variant="outline">Peer</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 md:w-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Employee Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground">Employee ID</dt>
                      <dd className="text-sm">EMP-1234</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground">Date of Joining</dt>
                      <dd className="text-sm">12 Jun, 2020</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground">Department</dt>
                      <dd className="text-sm">Engineering</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground">Reports To</dt>
                      <dd className="text-sm">Rahul Patel</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground">Work Location</dt>
                      <dd className="text-sm">Mumbai Office</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground">Work Type</dt>
                      <dd className="text-sm">Hybrid</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
              
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Leave Balance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Casual Leave</span>
                          <span className="text-sm font-medium">8/12</span>
                        </div>
                        <Progress value={66} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Sick Leave</span>
                          <span className="text-sm font-medium">7/10</span>
                        </div>
                        <Progress value={70} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Privileged Leave</span>
                          <span className="text-sm font-medium">12/15</span>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      Apply for Leave
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Attendance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Badge variant="outline" className="mr-2">Today</Badge>
                          <span className="text-sm">9:05 AM - 6:15 PM</span>
                        </div>
                        <Badge className="bg-green-500">Present</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Badge variant="outline" className="mr-2">Yesterday</Badge>
                          <span className="text-sm">9:15 AM - 6:10 PM</span>
                        </div>
                        <Badge className="bg-green-500">Present</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Badge variant="outline" className="mr-2">Oct 3</Badge>
                          <span className="text-sm">--:-- -- - --:-- --</span>
                        </div>
                        <Badge className="bg-red-500">Absent</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Badge variant="outline" className="mr-2">Oct 2</Badge>
                          <span className="text-sm">9:00 AM - 6:05 PM</span>
                        </div>
                        <Badge className="bg-green-500">Present</Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm">
                      <Clock className="h-4 w-4 mr-2" />
                      View Attendance Log
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Skills & Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                    <Badge variant="outline">GraphQL</Badge>
                    <Badge variant="outline">AWS</Badge>
                    <Badge variant="outline">Docker</Badge>
                    <Badge variant="outline">CI/CD</Badge>
                    <Badge variant="outline">Jest</Badge>
                    <Badge variant="outline">Redux</Badge>
                    <Badge variant="outline">Tailwind CSS</Badge>
                    <Badge variant="outline">Next.js</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm">
                    <PenSquare className="h-4 w-4 mr-2" />
                    Update Skills
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="projects" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Projects</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border rounded-md p-4">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">HRMS Pro Redesign</h3>
                      <Badge>Active</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Redesigning the user interface and improving UX of the HRMS platform
                    </p>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm">Progress</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Progress value={65} className="h-2" />
                          <span className="text-sm font-medium">65%</span>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <div>
                          <span className="text-muted-foreground">Start Date: </span>
                          <span>June 15, 2025</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Deadline: </span>
                          <span>November 30, 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-md p-4">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">Mobile App Development</h3>
                      <Badge>Active</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Creating a mobile application for employees to access HRMS on the go
                    </p>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm">Progress</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Progress value={30} className="h-2" />
                          <span className="text-sm font-medium">30%</span>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <div>
                          <span className="text-muted-foreground">Start Date: </span>
                          <span>August 1, 2025</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Deadline: </span>
                          <span>December 15, 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">View All Projects</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="documents" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Documents</CardTitle>
                  <CardDescription>
                    Important documents and certificates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-muted-foreground mr-2" />
                      <div>
                        <p className="text-sm font-medium">Aadhar Card</p>
                        <p className="text-xs text-muted-foreground">Uploaded on 12 Jun, 2020</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-muted-foreground mr-2" />
                      <div>
                        <p className="text-sm font-medium">PAN Card</p>
                        <p className="text-xs text-muted-foreground">Uploaded on 12 Jun, 2020</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-muted-foreground mr-2" />
                      <div>
                        <p className="text-sm font-medium">Passport</p>
                        <p className="text-xs text-muted-foreground">Uploaded on 15 Jul, 2020</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-muted-foreground mr-2" />
                      <div>
                        <p className="text-sm font-medium">Education Certificates</p>
                        <p className="text-xs text-muted-foreground">Uploaded on 20 Jun, 2020</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>
                    Upload Document
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>
                    Manage your account settings and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-md font-medium mb-3">Account Security</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">Email</p>
                          <p className="text-sm text-muted-foreground">amit.rajput@company.com</p>
                        </div>
                        <Button variant="outline" size="sm">Change</Button>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">Password</p>
                          <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
                        </div>
                        <Button variant="outline" size="sm">Change</Button>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">Two-Factor Authentication</p>
                          <p className="text-sm text-muted-foreground">Enhance your account security</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Shield className="h-4 w-4 mr-2" />
                          Enable
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-md font-medium mb-3">Notification Preferences</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="email-notifications" className="rounded border-gray-300" defaultChecked />
                        <label htmlFor="email-notifications" className="text-sm font-medium">
                          Email notifications
                        </label>
                      </div>
                      <p className="text-sm text-muted-foreground ml-6">
                        Receive email updates about account activity
                      </p>
                      
                      <div className="flex items-center space-x-2 mt-3">
                        <input type="checkbox" id="push-notifications" className="rounded border-gray-300" defaultChecked />
                        <label htmlFor="push-notifications" className="text-sm font-medium">
                          Push notifications
                        </label>
                      </div>
                      <p className="text-sm text-muted-foreground ml-6">
                        Receive push notifications in the browser
                      </p>
                      
                      <div className="flex items-center space-x-2 mt-3">
                        <input type="checkbox" id="sms-notifications" className="rounded border-gray-300" />
                        <label htmlFor="sms-notifications" className="text-sm font-medium">
                          SMS notifications
                        </label>
                      </div>
                      <p className="text-sm text-muted-foreground ml-6">
                        Receive text messages for important updates
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={saveProfile}>Save Settings</Button>
                  <Button variant="outline" className="ml-2">Cancel</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
