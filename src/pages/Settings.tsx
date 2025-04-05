
import { Bell, Globe, Key, Laptop, Lock, Mail, Moon, PenSquare, Shield, Sun, User, UserCog } from "lucide-react";
import { Layout } from "@/components/layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/components/theme-provider";

export default function Settings() {
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();

  const saveSettings = () => {
    toast({
      title: "Settings updated",
      description: "Your settings have been saved successfully.",
    });
  };

  return (
    <Layout title="Settings" subtitle="Manage account settings and preferences">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-5 md:w-auto">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Picture</CardTitle>
              <CardDescription>
                Update your profile photo.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png" alt="Profile" />
                  <AvatarFallback>AR</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button size="sm">Upload New Image</Button>
                  <Button size="sm" variant="outline">Remove</Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Recommended: Square image, at least 400x400px
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Update your personal details.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="full-name">Full Name</Label>
                  <Input id="full-name" placeholder="Amit Rajput" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="display-name">Display Name</Label>
                  <Input id="display-name" placeholder="Amit" />
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="amit.rajput@hrms.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="designation">Designation</Label>
                  <Input id="designation" placeholder="Senior Software Engineer" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select defaultValue="engineering">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="product">Product</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="hr">HR</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <textarea 
                  id="bio" 
                  className="min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Tell us about yourself"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={saveSettings}>Save Changes</Button>
              <Button variant="outline" className="ml-2">Cancel</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="account" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Preferences</CardTitle>
              <CardDescription>
                Manage your account settings and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English (UK)</SelectItem>
                    <SelectItem value="en-us">English (US)</SelectItem>
                    <SelectItem value="hi">Hindi</SelectItem>
                    <SelectItem value="ta">Tamil</SelectItem>
                    <SelectItem value="te">Telugu</SelectItem>
                    <SelectItem value="bn">Bengali</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time-zone">Time Zone</Label>
                <Select defaultValue="ist">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ist">(GMT+5:30) India Standard Time</SelectItem>
                    <SelectItem value="utc">(GMT+0:00) Coordinated Universal Time</SelectItem>
                    <SelectItem value="est">(GMT-5:00) Eastern Standard Time</SelectItem>
                    <SelectItem value="pst">(GMT-8:00) Pacific Standard Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date-format">Date Format</Label>
                <Select defaultValue="dd-mm-yyyy">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dd-mm-yyyy">DD-MM-YYYY</SelectItem>
                    <SelectItem value="mm-dd-yyyy">MM-DD-YYYY</SelectItem>
                    <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Additional security for your account
                  </p>
                </div>
                <Switch id="two-factor" />
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <h3 className="text-md font-medium">Danger Zone</h3>
                <p className="text-sm text-muted-foreground">
                  Permanently delete your account and all of your content.
                </p>
                <Button variant="destructive">Delete Account</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Choose how and when you want to be notified.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Email Notifications</p>
                    <p className="text-xs text-muted-foreground">
                      Receive email updates about your account activity
                    </p>
                  </div>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bell className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Push Notifications</p>
                    <p className="text-xs text-muted-foreground">
                      Receive push notifications in-app and on your desktop
                    </p>
                  </div>
                </div>
                <Switch id="push-notifications" defaultChecked />
              </div>
              
              <Separator />
              
              <h3 className="text-md font-medium">Notification Types</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Leave Approvals</p>
                    <p className="text-xs text-muted-foreground">
                      Updates about your leave requests
                    </p>
                  </div>
                  <Switch id="leave-notifications" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Performance Reviews</p>
                    <p className="text-xs text-muted-foreground">
                      Notifications about upcoming and completed reviews
                    </p>
                  </div>
                  <Switch id="review-notifications" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Team Updates</p>
                    <p className="text-xs text-muted-foreground">
                      Changes and updates within your team
                    </p>
                  </div>
                  <Switch id="team-notifications" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Company Announcements</p>
                    <p className="text-xs text-muted-foreground">
                      Important company-wide updates
                    </p>
                  </div>
                  <Switch id="announcement-notifications" defaultChecked />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={saveSettings}>Save Preferences</Button>
              <Button variant="outline" className="ml-2">Reset to Default</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>
                Customize the look and feel of the application.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-md font-medium">Theme</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div 
                    className={`flex flex-col items-center justify-center p-4 border rounded-md cursor-pointer transition ${theme === 'light' ? 'border-primary bg-primary/10' : 'border-muted'}`}
                    onClick={() => setTheme('light')}
                  >
                    <Sun className="h-6 w-6 mb-2" />
                    <span className="text-sm">Light</span>
                  </div>
                  <div 
                    className={`flex flex-col items-center justify-center p-4 border rounded-md cursor-pointer transition ${theme === 'dark' ? 'border-primary bg-primary/10' : 'border-muted'}`}
                    onClick={() => setTheme('dark')}
                  >
                    <Moon className="h-6 w-6 mb-2" />
                    <span className="text-sm">Dark</span>
                  </div>
                  <div 
                    className={`flex flex-col items-center justify-center p-4 border rounded-md cursor-pointer transition ${theme === 'system' ? 'border-primary bg-primary/10' : 'border-muted'}`}
                    onClick={() => setTheme('system')}
                  >
                    <Laptop className="h-6 w-6 mb-2" />
                    <span className="text-sm">System</span>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <h3 className="text-md font-medium">Font Size</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-col items-center justify-center p-2 border rounded-md cursor-pointer">
                    <span className="text-xs">Small</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 border border-primary bg-primary/10 rounded-md cursor-pointer">
                    <span className="text-sm">Default</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 border rounded-md cursor-pointer">
                    <span className="text-base">Large</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 border rounded-md cursor-pointer">
                    <span className="text-lg">Extra Large</span>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Compact Mode</p>
                    <p className="text-xs text-muted-foreground">
                      Reduce spacing and padding throughout the interface
                    </p>
                  </div>
                  <Switch id="compact-mode" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Reduced Motion</p>
                    <p className="text-xs text-muted-foreground">
                      Decrease the amount of animations throughout the interface
                    </p>
                  </div>
                  <Switch id="reduced-motion" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={saveSettings}>Save Preferences</Button>
              <Button variant="outline" className="ml-2">Reset to Default</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Update your password and secure your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Password Requirements:</p>
                <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Minimum 8 characters</li>
                  <li>At least one uppercase letter</li>
                  <li>At least one number</li>
                  <li>At least one special character</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={saveSettings}>Update Password</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Configure additional security settings for your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Two-Factor Authentication</p>
                    <p className="text-xs text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Shield className="mr-2 h-4 w-4" />
                  Setup
                </Button>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <h3 className="text-md font-medium">Login Sessions</h3>
                <p className="text-sm text-muted-foreground">
                  These are devices that have logged into your account.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <p className="text-sm font-medium">Current Session</p>
                      <p className="text-xs text-muted-foreground">
                        Mumbai, India • Chrome on Windows
                      </p>
                      <p className="text-xs text-green-600 font-medium">
                        Active now
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <p className="text-sm font-medium">iPhone 13</p>
                      <p className="text-xs text-muted-foreground">
                        Mumbai, India • iOS App
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Last active: 2 hours ago
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Revoke
                    </Button>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-2">
                  Log Out All Devices
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  );
}
