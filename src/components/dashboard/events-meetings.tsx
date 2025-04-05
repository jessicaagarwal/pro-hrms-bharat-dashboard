
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Users, 
  Briefcase, 
  Flag, 
  Gift, 
  PlusCircle 
} from "lucide-react";
import { events } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function EventsMeetings() {
  // Sort events by date
  const sortedEvents = [...events].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  
  // Take only the first 4 events for the dashboard
  const displayedEvents = sortedEvents.slice(0, 4);
  
  // Get icon based on event type
  const getEventIcon = (type: string) => {
    switch (type) {
      case "meeting":
        return <Users className="h-4 w-4 text-blue-500" />;
      case "event":
        return <Briefcase className="h-4 w-4 text-purple-500" />;
      case "holiday":
        return <Flag className="h-4 w-4 text-red-500" />;
      case "deadline":
        return <Clock className="h-4 w-4 text-amber-500" />;
      default:
        return <CalendarIcon className="h-4 w-4 text-gray-500" />;
    }
  };
  
  return (
    <Card className="col-span-3 lg:col-span-2 animated-card" style={{ animationDelay: "250ms" }}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg">Events and Meetings</CardTitle>
        <Button variant="outline" size="sm">
          <PlusCircle className="mr-1 h-4 w-4" />
          Add
        </Button>
      </CardHeader>
      <CardContent className="px-0">
        <div className="space-y-4">
          {displayedEvents.map((event) => (
            <div key={event.id} className="flex items-start px-6 py-2 hover:bg-muted/50 transition-colors">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border bg-muted">
                {getEventIcon(event.type)}
              </div>
              <div className="ml-3 space-y-1">
                <p className="text-sm font-medium">{event.title}</p>
                <p className="text-xs text-muted-foreground">{event.description}</p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <CalendarIcon className="mr-1 h-3 w-3" />
                  <span>
                    {new Date(event.date).toLocaleDateString('en-IN', { 
                      day: 'numeric', 
                      month: 'short', 
                      year: 'numeric' 
                    })}
                  </span>
                  <span className="mx-1">•</span>
                  <Clock className="mr-1 h-3 w-3" />
                  <span>{event.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
