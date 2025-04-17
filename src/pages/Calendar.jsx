import { Layout } from "@/components/layout";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

export default function Calendar() {
  const [date, setDate] = useState(new Date());

  const upcomingEvents = [
    {
      id: 1,
      title: "Team Meeting",
      date: "Today, 10:00 AM",
      description: "Weekly team sync-up",
      type: "meeting",
      attendees: [
        { name: "Priya Sharma", avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png" },
        { name: "Raj Malhotra", avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png" },
        { name: "Ananya Desai", avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png" },
      ],
      location: "Conference Room 2"
    },
    {
      id: 2,
      title: "Project Review",
      date: "Today, 2:00 PM",
      description: "Q4 project status review",
      type: "meeting",
      attendees: [
        { name: "Vikram Patel", avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png" },
        { name: "Neha Singh", avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png" },
      ],
      location: "Video Conference"
    },
    {
      id: 3,
      title: "Diwali Celebration Planning",
      date: "Tomorrow, 11:30 AM",
      description: "Planning for office Diwali celebrations",
      type: "event",
      attendees: [
        { name: "Culture Committee", avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png" },
      ],
      location: "Conference Room 1"
    },
    {
      id: 4,
      title: "Performance Review",
      date: "Oct 15, 10:00 AM",
      description: "Quarterly performance review",
      type: "one-on-one",
      attendees: [
        { name: "Rahul Mehta", avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png" },
      ],
      location: "Manager's Office"
    },
  ];

  const holidays = [
    { name: "Diwali", date: "November 12, 2025" },
    { name: "Republic Day", date: "January 26, 2025" },
    { name: "Independence Day", date: "August 15, 2025" },
    { name: "Gandhi Jayanti", date: "October 2, 2025" },
    { name: "Christmas", date: "December 25, 2025" },
  ];

  return (
    <Layout title="Calendar" subtitle="Schedule and manage your events and meetings">
      <Tabs defaultValue="calendar" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:w-auto">
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="holidays">Holidays</TabsTrigger>
        </TabsList>
        
        <TabsContent value="calendar" className="mt-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Create Event</CardTitle>
                  <CardDescription>Schedule a new meeting or event</CardDescription>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">Create New Event</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>New Event</DialogTitle>
                        <DialogDescription>
                          Create a new event or meeting in your calendar
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label>Title</Label>
                          <Input placeholder="Enter event title" />
                        </div>
                        <div className="grid gap-2">
                          <Label>Date</Label>
                          <div className="grid grid-cols-2 gap-2">
                            <Input type="date" />
                            <Input type="time" />
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <Label>Type</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select event type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="meeting">Meeting</SelectItem>
                              <SelectItem value="event">Event</SelectItem>
                              <SelectItem value="one-on-one">One-on-one</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-2">
                          <Label>Location</Label>
                          <Input placeholder="Enter location or meeting link" />
                        </div>
                        <div className="grid gap-2">
                          <Label>Description</Label>
                          <Textarea placeholder="Enter event details" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Create Event</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Next events in your calendar</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.slice(0, 3).map((event) => (
                      <div key={event.id} className="flex items-start space-x-4 border-b pb-4 last:border-0">
                        <div>
                          <Badge 
                            variant="outline" 
                            className={
                              event.type === "meeting" ? "bg-blue-100 text-blue-800 border-blue-200" : 
                              event.type === "event" ? "bg-purple-100 text-purple-800 border-purple-200" :
                              "bg-green-100 text-green-800 border-green-200"
                            }
                          >
                            {event.type}
                          </Badge>
                          <h4 className="font-medium mt-1">{event.title}</h4>
                          <p className="text-sm text-muted-foreground">{event.date}</p>
                          <p className="text-xs text-muted-foreground mt-1">{event.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>View and manage your schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border shadow"
                    disabled={{ before: new Date('1900-01-01') }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="events" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>All Events</CardTitle>
              <CardDescription>View all your scheduled events and meetings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant="outline" 
                            className={
                              event.type === "meeting" ? "bg-blue-100 text-blue-800 border-blue-200" : 
                              event.type === "event" ? "bg-purple-100 text-purple-800 border-purple-200" :
                              "bg-green-100 text-green-800 border-green-200"
                            }
                          >
                            {event.type}
                          </Badge>
                          <h3 className="font-medium">{event.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{event.date}</p>
                        <p className="text-sm mt-2">{event.description}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          <span className="font-medium">Location:</span> {event.location}
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex -space-x-2">
                          {event.attendees.map((attendee, index) => (
                            <Avatar key={index} className="h-8 w-8 border-2 border-background">
                              <AvatarImage src={attendee.avatar} alt={attendee.name} />
                              <AvatarFallback>{attendee.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {event.attendees.length} attendee{event.attendees.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">Cancel</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="holidays" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Company Holidays</CardTitle>
              <CardDescription>List of holidays for the current year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="[&_tr]:border-b">
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Holiday Name</th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Date</th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Type</th>
                      </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0">
                      {holidays.map((holiday, index) => (
                        <tr key={index} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle">{holiday.name}</td>
                          <td className="p-4 align-middle">{holiday.date}</td>
                          <td className="p-4 align-middle">
                            <Badge>National Holiday</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Download Holiday Calendar</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  );
}

function Label({ children }) {
  return (
    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      {children}
    </label>
  )
}
