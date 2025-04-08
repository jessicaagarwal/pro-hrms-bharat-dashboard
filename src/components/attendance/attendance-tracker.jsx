
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Clock, ClockIcon } from "lucide-react";
import { toast } from "sonner";

export function AttendanceTracker() {
  const [date, setDate] = useState(new Date());
  const [clockInTime, setClockInTime] = useState(null);
  const [clockOutTime, setClockOutTime] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // Check for existing attendance data in localStorage on component mount
  useEffect(() => {
    const savedDate = localStorage.getItem('attendanceDate');
    const savedClockIn = localStorage.getItem('clockInTime');
    const savedClockOut = localStorage.getItem('clockOutTime');
    
    const today = format(new Date(), 'yyyy-MM-dd');
    
    // Only restore attendance data if it's from today
    if (savedDate === today) {
      if (savedClockIn) setClockInTime(savedClockIn);
      if (savedClockOut) setClockOutTime(savedClockOut);
    } else {
      // Clear outdated attendance data
      localStorage.removeItem('attendanceDate');
      localStorage.removeItem('clockInTime');
      localStorage.removeItem('clockOutTime');
    }
    
    // Update date/time every minute
    const interval = setInterval(() => {
      setDate(new Date());
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleClockIn = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const now = new Date();
      const timeString = format(now, 'h:mm a');
      setClockInTime(timeString);
      
      // Save to localStorage
      localStorage.setItem('attendanceDate', format(now, 'yyyy-MM-dd'));
      localStorage.setItem('clockInTime', timeString);
      
      toast.success("Clocked In Successfully", {
        description: `You clocked in at ${timeString}`,
      });
      
      setLoading(false);
    }, 800);
  };
  
  const handleClockOut = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const now = new Date();
      const timeString = format(now, 'h:mm a');
      setClockOutTime(timeString);
      
      // Save to localStorage
      localStorage.setItem('clockOutTime', timeString);
      
      toast.success("Clocked Out Successfully", {
        description: `You clocked out at ${timeString}`,
      });
      
      setLoading(false);
    }, 800);
  };
  
  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Today's Attendance</CardTitle>
        <p className="text-muted-foreground">{format(date, 'MMM d, yyyy')}</p>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-3">
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Clock In:</span>
            <span className="ml-2 text-sm">{clockInTime || "Not clocked in yet"}</span>
          </div>
          
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Clock Out:</span>
            <span className="ml-2 text-sm">{clockOutTime || "Not clocked out yet"}</span>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <Button 
              size="lg"
              className="flex-1 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
              disabled={loading || clockInTime !== null}
              onClick={handleClockIn}
            >
              <Clock className="mr-2 h-5 w-5" />
              Clock In
            </Button>
            
            <Button 
              size="lg"
              className="flex-1 bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"
              disabled={loading || clockInTime === null || clockOutTime !== null}
              onClick={handleClockOut}
            >
              <Clock className="mr-2 h-5 w-5" />
              Clock Out
            </Button>
          </div>
          
          {clockInTime && clockOutTime && (
            <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-md text-sm">
              <p className="font-medium">Work session complete!</p>
              <p className="text-xs">Your attendance has been recorded for today.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
