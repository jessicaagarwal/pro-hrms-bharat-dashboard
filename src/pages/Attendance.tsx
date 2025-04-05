
import { Calendar, Clock, FileCheck, UserCheck } from "lucide-react";
import { Layout } from "@/components/layout";
import { StatCard } from "@/components/dashboard/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Attendance() {
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
              <CardHeader>
                <CardTitle>Daily Attendance Log</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="[&_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Employee</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Check In</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Check Out</th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                        </tr>
                      </thead>
                      <tbody className="[&_tr:last-child]:border-0">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle">Raj Sharma</td>
                          <td className="p-4 align-middle">09:02 AM</td>
                          <td className="p-4 align-middle">06:05 PM</td>
                          <td className="p-4 align-middle"><span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Present</span></td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle">Priya Patel</td>
                          <td className="p-4 align-middle">09:30 AM</td>
                          <td className="p-4 align-middle">06:15 PM</td>
                          <td className="p-4 align-middle"><span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Present</span></td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle">Vikram Singh</td>
                          <td className="p-4 align-middle">10:15 AM</td>
                          <td className="p-4 align-middle">06:30 PM</td>
                          <td className="p-4 align-middle"><span className="inline-flex items-center rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20">Late</span></td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle">Ananya Desai</td>
                          <td className="p-4 align-middle">--:-- --</td>
                          <td className="p-4 align-middle">--:-- --</td>
                          <td className="p-4 align-middle"><span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">Absent</span></td>
                        </tr>
                        <tr>
                          <td className="p-4 align-middle">Kiran Joshi</td>
                          <td className="p-4 align-middle">09:05 AM</td>
                          <td className="p-4 align-middle">--:-- --</td>
                          <td className="p-4 align-middle"><span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">Working</span></td>
                        </tr>
                      </tbody>
                    </table>
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
