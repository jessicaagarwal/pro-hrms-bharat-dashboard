
import { Gift } from "lucide-react";
import { birthdays } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Birthdays() {
  // Get the month and day of each birthday
  const birthdaysWithMonthDay = birthdays.map((birthday) => {
    const date = new Date(birthday.date);
    return {
      ...birthday,
      monthDay: `${date.getMonth()}-${date.getDate()}`,
    };
  });

  // Sort birthdays by closest upcoming date
  const today = new Date();
  const todayMonthDay = `${today.getMonth()}-${today.getDate()}`;
  
  const sortedBirthdays = [...birthdaysWithMonthDay].sort((a, b) => {
    // Calculate days until birthday
    const daysUntilA = getDaysUntil(a.monthDay, todayMonthDay);
    const daysUntilB = getDaysUntil(b.monthDay, todayMonthDay);
    
    return daysUntilA - daysUntilB;
  });
  
  // Show only the 4 closest birthdays
  const upcomingBirthdays = sortedBirthdays.slice(0, 3);
  
  // Function to calculate days until a date
  function getDaysUntil(targetMonthDay: string, currentMonthDay: string): number {
    const [targetMonth, targetDay] = targetMonthDay.split('-').map(Number);
    const [currentMonth, currentDay] = currentMonthDay.split('-').map(Number);
    
    // Create dates for this year
    const currentYear = today.getFullYear();
    const targetDate = new Date(currentYear, targetMonth, targetDay);
    const currentDate = new Date(currentYear, currentMonth, currentDay);
    
    // If the date has passed this year, use next year's date
    if (targetDate < currentDate) {
      targetDate.setFullYear(currentYear + 1);
    }
    
    // Calculate difference in days
    const diffTime = targetDate.getTime() - currentDate.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
  
  // Format the date to dd/mm
  const formatBirthdayDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  };
  
  return (
    <Card className="col-span-3 lg:col-span-1 animated-card" style={{ animationDelay: "300ms" }}>
      <CardHeader className="flex flex-row items-center pb-2">
        <CardTitle className="text-lg flex items-center">
          <Gift className="mr-2 h-5 w-5 text-primary" />
          Upcoming Birthdays
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="space-y-4">
          {upcomingBirthdays.map((birthday) => {
            const daysUntil = getDaysUntil(birthday.monthDay, todayMonthDay);
            let badgeText = "";
            
            if (daysUntil === 0) {
              badgeText = "Today";
            } else if (daysUntil === 1) {
              badgeText = "Tomorrow";
            } else {
              badgeText = `In ${daysUntil} days`;
            }
            
            return (
              <div key={birthday.id} className="flex items-center px-6 py-2 hover:bg-muted/50 transition-colors">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={birthday.avatar} />
                  <AvatarFallback>{birthday.name.charAt(0)}{birthday.name.split(" ")[1]?.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-3 space-y-1">
                  <p className="text-sm font-medium">{birthday.name}</p>
                  <p className="text-xs text-muted-foreground">{birthday.role}</p>
                </div>
                <div className="ml-auto flex flex-col items-end">
                  <span className="text-sm">{formatBirthdayDate(birthday.date)}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                    {badgeText}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
