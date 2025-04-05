
import { CalendarCheck, CalendarRange, Clock, FileSpreadsheet } from "lucide-react";
import { Layout } from "@/components/layout";
import { StatCard } from "@/components/dashboard/stat-card";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Leave() {
  return (
    <Layout title="Leave Management" subtitle="Track and manage employee leave balances">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Casual Leave"
          value="8/12"
          icon={CalendarCheck}
          description="4 days remaining"
          iconColor="text-green-500"
        />
        <StatCard
          title="Sick Leave"
          value="2/10"
          icon={Clock}
          description="8 days remaining"
          iconColor="text-amber-500"
        />
        <StatCard
          title="Pending Requests"
          value="1"
          icon={FileSpreadsheet}
          description="Awaiting approval"
          iconColor="text-blue-500"
        />
        <StatCard
          title="Next Holiday"
          value="Diwali"
          icon={CalendarRange}
          description="Nov 12, 2025"
          iconColor="text-purple-500"
        />
      </div>

      <div className="mt-6">
        <Tabs defaultValue="my-leaves" className="w-full">
          <TabsList className="grid w-full grid-cols-4 md:w-auto">
            <TabsTrigger value="my-leaves">My Leaves</TabsTrigger>
            <TabsTrigger value="team-leaves">Team Leaves</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="policies">Policies</TabsTrigger>
          </TabsList>
          <TabsContent value="my-leaves" className="mt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium mb-4">My Leave Balances</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Apply for Leave</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Apply for Leave</DialogTitle>
                    <DialogDescription>
                      Submit your leave request for approval
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="leave-type" className="text-right">
                        Leave Type
                      </Label>
                      <Select>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="casual">Casual Leave</SelectItem>
                          <SelectItem value="sick">Sick Leave</SelectItem>
                          <SelectItem value="personal">Personal Leave</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="from-date" className="text-right">
                        From
                      </Label>
                      <Input
                        id="from-date"
                        type="date"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="to-date" className="text-right">
                        To
                      </Label>
                      <Input
                        id="to-date"
                        type="date"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="reason" className="text-right">
                        Reason
                      </Label>
                      <Textarea
                        id="reason"
                        placeholder="Provide a reason for your leave"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Submit Request</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-4 md:grid-cols-2 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Casual Leave</CardTitle>
                  <CardDescription>Annual entitlement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold">8/12</span>
                    <Badge variant="outline">4 remaining</Badge>
                  </div>
                  <Progress value={66} className="h-2" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Sick Leave</CardTitle>
                  <CardDescription>Annual entitlement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold">2/10</span>
                    <Badge variant="outline">8 remaining</Badge>
                  </div>
                  <Progress value={20} className="h-2" />
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Leave Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="flex items-start gap-4">
                      <Badge variant="outline" className="h-fit">12 Oct</Badge>
                      <div>
                        <p className="font-medium">Casual Leave</p>
                        <p className="text-sm text-muted-foreground">Personal reasons</p>
                        <p className="text-sm text-muted-foreground">12 Oct - 15 Oct (4 days)</p>
                      </div>
                    </div>
                    <Badge className="bg-amber-500">Pending</Badge>
                  </div>
                  <div className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="flex items-start gap-4">
                      <Badge variant="outline" className="h-fit">5 Sep</Badge>
                      <div>
                        <p className="font-medium">Sick Leave</p>
                        <p className="text-sm text-muted-foreground">Fever and cold</p>
                        <p className="text-sm text-muted-foreground">5 Sep - 6 Sep (2 days)</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">Approved</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="team-leaves" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Team Leave Calendar</CardTitle>
                <CardDescription>
                  View all approved and pending leaves from your team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src="/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png" alt="Avatar" />
                        <AvatarFallback>VP</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Vikram Patel</p>
                        <p className="text-sm text-muted-foreground">Medical Leave (11 Oct - 13 Oct)</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">Approved</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src="/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png" alt="Avatar" />
                        <AvatarFallback>SK</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Sneha Kumar</p>
                        <p className="text-sm text-muted-foreground">Annual Leave (15 Oct - 20 Oct)</p>
                      </div>
                    </div>
                    <Badge className="bg-amber-500">Pending</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="calendar" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Leave Calendar</CardTitle>
                <CardDescription>View upcoming leaves and plan accordingly</CardDescription>
              </CardHeader>
              <CardContent className="h-[350px] flex items-center justify-center">
                <p className="text-muted-foreground">Calendar view will appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="policies" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Leave Policies</CardTitle>
                <CardDescription>Company leave policies and guidelines</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Casual Leave</h4>
                    <p className="text-sm text-muted-foreground">Employees are entitled to 12 days of casual leave per year. Unused casual leaves expire at the end of the calendar year.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sick Leave</h4>
                    <p className="text-sm text-muted-foreground">Employees are entitled to 10 days of sick leave per year. A medical certificate is required for sick leaves exceeding 2 consecutive days.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Maternity Leave</h4>
                    <p className="text-sm text-muted-foreground">Female employees are entitled to 26 weeks of paid maternity leave as per the Maternity Benefit Act.</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Download Full Policy Document</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
