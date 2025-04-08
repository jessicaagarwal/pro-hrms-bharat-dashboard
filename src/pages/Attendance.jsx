
import { useState } from "react";
import { Calendar, Clock, FileCheck, UserCheck, Search, Download } from "lucide-react";
import { Layout } from "../components/layout";
import { StatCard } from "../components/dashboard/stat-card";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

export default function Attendance() {
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  
  const attendanceData = [
    { id: 1, employee: "Raj Sharma", checkIn: "09:02 AM", checkOut: "06:05 PM", status: "Present", department: "Development" },
    { id: 2, employee: "Priya Patel", checkIn: "09:30 AM", checkOut: "06:15 PM", status: "Present", department: "Design" },
    { id: 3, employee: "Vikram Singh", checkIn: "10:15 AM", checkOut: "06:30 PM", status: "Late", department: "HR" },
    { id: 4, employee: "Ananya Desai", checkIn: "--:-- --", checkOut: "--:-- --", status: "Absent", department: "Marketing" },
    { id: 5, employee: "Kiran Joshi", checkIn: "09:05 AM", checkOut: "--:-- --", status: "Working", department: "Development" }
  ];
  
  const filteredData = attendanceData.filter(item => {
    const matchesQuery = item.employee.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = departmentFilter === "all" || item.department === departmentFilter;
    return matchesQuery && matchesDepartment;
  });
  
  const getStatusBadge = (status) => {
    switch (status) {
      case "Present":
        return <Badge className="bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20">Present</Badge>;
      case "Late":
        return <Badge className="bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20">Late</Badge>;
      case "Absent":
        return <Badge className="bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/20">Absent</Badge>;
      case "Working":
        return <Badge className="bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/20">Working</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };
  
  return (
    <Layout title="Attendance Management" subtitle="Track and manage employee attendance">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Present Today"
          value="42/45"
          icon={UserCheck}
          description="93% attendance rate"
          iconColor="text-green-500"
        />
        <StatCard
          title="On Leave"
          value="3"
          icon={Calendar}
          description="Approved leaves"
          iconColor="text-amber-500"
        />
        <StatCard
          title="Late Arrivals"
          value="2"
          icon={Clock}
          description="Less than 30 minutes"
          iconColor="text-blue-500"
        />
        <StatCard
          title="Pending Requests"
          value="5"
          icon={FileCheck}
          description="Require approval"
          iconColor="text-purple-500"
        />
      </div>

      <div className="mt-6">
        <Tabs defaultValue="daily" className="w-full">
          <TabsList className="grid w-full grid-cols-4 md:w-auto">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="daily" className="mt-4">
            <Card>
              <CardHeader className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pb-3">
                <div>
                  <CardTitle>Daily Attendance Log</CardTitle>
                  <CardDescription>Today's employee check-in/check-out status</CardDescription>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search employees..."
                      className="pl-8 w-full"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                    <SelectTrigger className="w-full sm:w-40">
                      <SelectValue placeholder="Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      <SelectItem value="Development">Development</SelectItem>
                      <SelectItem value="Design">Design</SelectItem>
                      <SelectItem value="HR">HR</SelectItem>
                      <SelectItem value="Marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" className="flex gap-1 items-center">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="[&_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Employee</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Department</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Check In</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Check Out</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                        </tr>
                      </thead>
                      <tbody className="[&_tr:last-child]:border-0">
                        {filteredData.length > 0 ? (
                          filteredData.map((item) => (
                            <tr key={item.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                              <td className="p-4 align-middle">{item.employee}</td>
                              <td className="p-4 align-middle">{item.department}</td>
                              <td className="p-4 align-middle">{item.checkIn}</td>
                              <td className="p-4 align-middle">{item.checkOut}</td>
                              <td className="p-4 align-middle">{getStatusBadge(item.status)}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={5} className="p-4 text-center text-muted-foreground">No matching records found</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {/* Pagination controls could be added here */}
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-muted-foreground">Showing {filteredData.length} of {attendanceData.length} entries</p>
                  <div className="flex gap-1">
                    <Button variant="outline" size="sm" disabled>Previous</Button>
                    <Button variant="outline" size="sm" disabled>Next</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="weekly" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Weekly attendance data will appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="monthly" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Monthly attendance data will appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Generate and download attendance reports</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
