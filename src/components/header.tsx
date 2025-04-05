
import { Link } from "react-router-dom";
import { Bell, Mail, Search } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="border-b sticky top-0 z-30 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 md:px-6">
        <div className="relative mr-4 hidden md:flex">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-64 rounded-full bg-background pl-8 md:w-80 lg:w-96"
          />
        </div>
        
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]">
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-[300px] overflow-auto">
                <NotificationItem 
                  title="New Leave Request"
                  description="Anjali Sharma has requested leave approval"
                  time="5 mins ago"
                />
                <NotificationItem 
                  title="Performance Review"
                  description="Quarterly reviews are due by Friday"
                  time="2 hours ago"
                />
                <NotificationItem 
                  title="Team Meeting"
                  description="Weekly stand-up meeting at 10:00 AM"
                  time="8 hours ago"
                />
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer justify-center text-center font-medium">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Mail className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]">
                  2
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Messages</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-[300px] overflow-auto">
                <MessageItem 
                  name="Rajat Verma"
                  message="Have you reviewed the new policy documents?"
                  time="10:25 AM"
                  avatar="/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png"
                />
                <MessageItem 
                  name="Priya Malhotra"
                  message="The client meeting has been rescheduled to 3 PM"
                  time="Yesterday"
                  avatar="/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png"
                />
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer justify-center text-center font-medium">
                View all messages
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png" alt="Avatar" />
                  <AvatarFallback>AR</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/profile" className="flex w-full">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/settings" className="flex w-full">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/help" className="flex w-full">Help</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

interface NotificationItemProps {
  title: string;
  description: string;
  time: string;
}

function NotificationItem({ title, description, time }: NotificationItemProps) {
  return (
    <div className="flex items-start gap-4 px-4 py-3 hover:bg-muted/50 cursor-pointer">
      <div className="rounded-full bg-primary/20 p-2">
        <Bell className="h-4 w-4 text-primary" />
      </div>
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  );
}

interface MessageItemProps {
  name: string;
  message: string;
  time: string;
  avatar: string;
}

function MessageItem({ name, message, time, avatar }: MessageItemProps) {
  return (
    <div className="flex items-start gap-4 px-4 py-3 hover:bg-muted/50 cursor-pointer">
      <Avatar className="h-9 w-9">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name.charAt(0)}{name.split(" ")[1]?.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1">
        <div className="flex justify-between">
          <p className="text-sm font-medium">{name}</p>
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2">{message}</p>
      </div>
    </div>
  );
}
