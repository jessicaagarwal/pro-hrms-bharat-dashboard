import { Link } from "react-router-dom";
import { Bell, Mail, Search, Menu, X } from "lucide-react";
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
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Add scroll event listener to change header appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={cn(
        "border-b sticky top-0 z-30 w-full transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm" 
          : "bg-background"
      )}>
        <div className="flex h-16 items-center px-4 md:px-6">
          {/* Mobile search button - only visible on mobile */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden mr-2"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="h-5 w-5" />
          </Button>
          
          {/* Desktop search - hidden on mobile */}
          <div className="relative mr-4 hidden md:flex flex-1 max-w-xl">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-full bg-background pl-8"
            />
          </div>
          
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            
            {/* Notifications - hide on small screens */}
            <div className="hidden sm:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative hover:bg-muted/50">
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
            </div>
            
            {/* Messages - hide on small screens */}
            <div className="hidden sm:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative hover:bg-muted/50">
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
            </div>
            
            {/* User profile dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full hover:bg-muted/50">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png" alt="Avatar" />
                    <AvatarFallback>AR</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
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

      {/* Mobile Search Drawer */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="flex h-16 items-center gap-4 px-4 border-b">
            <Button 
              variant="ghost" 
              size="icon"
              className="shrink-0"
              onClick={() => setIsSearchOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
            <Input
              type="search"
              placeholder="Search..."
              className="flex-1"
              autoFocus
            />
          </div>
          <div className="p-4 space-y-4">
            <p className="text-sm text-muted-foreground">Recent Searches</p>
            <div className="space-y-2">
              <SearchItem label="Leave requests" />
              <SearchItem label="Performance reviews" />
              <SearchItem label="Employee onboarding" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function NotificationItem({ title, description, time }) {
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

function MessageItem({ name, message, time, avatar }) {
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

function SearchItem({ label }) {
  return (
    <button className="flex items-center gap-2 w-full p-2 rounded-md hover:bg-muted/50 text-sm">
      <Search className="h-4 w-4 text-muted-foreground" />
      {label}
    </button>
  );
}