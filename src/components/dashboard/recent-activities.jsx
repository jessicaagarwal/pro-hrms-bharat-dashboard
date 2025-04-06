
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { formatDistanceToNow } from "date-fns";

// Mock data for recent activities
const recentActivities = [
  {
    id: "act1",
    type: "leave_request",
    title: "Leave Request Approved",
    description: "Neha Gupta's leave request has been approved by Kavita Rao",
    user: {
      name: "Kavita Rao",
      avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png"
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 25) // 25 minutes ago
  },
  {
    id: "act2",
    type: "new_employee",
    title: "New Employee Onboarding",
    description: "Ravi Deshmukh has joined the Engineering team as Senior Developer",
    user: {
      name: "Ravi Deshmukh",
      avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png"
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3) // 3 hours ago
  },
  {
    id: "act3",
    type: "project_update",
    title: "Project Milestone Completed",
    description: "Mobile App Development project has reached phase 1 completion",
    user: {
      name: "Vikram Malhotra",
      avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png"
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5) // 5 hours ago
  },
  {
    id: "act4",
    type: "meeting_scheduled",
    title: "Quarterly Review Meeting",
    description: "Performance review meeting scheduled for next Monday",
    user: {
      name: "Anjali Desai",
      avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png"
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8) // 8 hours ago
  }
];

export function RecentActivities() {
  return (
    <Card className="col-span-3 lg:col-span-1 animated-card" style={{ animationDelay: "400ms" }}>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-start px-6 py-2 hover:bg-muted/50 transition-colors">
              <Avatar className="h-9 w-9">
                <AvatarImage src={activity.user.avatar} />
                <AvatarFallback>{activity.user.name.charAt(0)}{activity.user.name.split(" ")[1]?.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="ml-3 space-y-1">
                <p className="text-sm font-medium">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground">
                  {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
