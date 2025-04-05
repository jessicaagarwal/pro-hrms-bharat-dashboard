
import { BookOpen, FileQuestion, Search, MessageCircle, Mail, ExternalLink, Bookmark } from "lucide-react";
import { Layout } from "@/components/layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Help() {
  return (
    <Layout title="Help Center" subtitle="Find answers and support for HRMS Pro">
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-3 bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-2xl">How can we help you today?</CardTitle>
            <CardDescription className="text-primary-foreground/90">
              Search our knowledge base or browse the categories below
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-primary-foreground/70" />
              <Input 
                placeholder="Search help articles..." 
                className="pl-9 bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Quick Start</CardTitle>
            <BookOpen className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Get started with HRMS Pro with our step-by-step guides for new users
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full">
              View Guides
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-md transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Tutorials</CardTitle>
            <FileQuestion className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Learn how to use HRMS Pro features with video and text tutorials
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full">
              Browse Tutorials
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-md transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Contact Support</CardTitle>
            <MessageCircle className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Can't find what you need? Reach out to our support team
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full">
              Get Support
            </Button>
          </CardFooter>
        </Card>

        <Card className="md:col-span-3 mt-4">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Find answers to common questions about HRMS Pro
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-4 md:w-auto">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="accounts">Accounts</TabsTrigger>
                <TabsTrigger value="employees">Employees</TabsTrigger>
                <TabsTrigger value="payroll">Payroll</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general" className="mt-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is HRMS Pro?</AccordionTrigger>
                    <AccordionContent>
                      HRMS Pro is a comprehensive Human Resource Management System designed to streamline HR processes, manage employee data, track attendance, handle payroll, and more. It helps businesses of all sizes efficiently manage their human resources operations from a single platform.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I request access to HRMS Pro?</AccordionTrigger>
                    <AccordionContent>
                      To request access to HRMS Pro, please contact your HR administrator or department head. They will create an account for you and provide login credentials. If you're an administrator looking to set up HRMS Pro for your organization, please contact our sales team at sales@hrmspro.com.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is HRMS Pro available on mobile devices?</AccordionTrigger>
                    <AccordionContent>
                      Yes, HRMS Pro is fully responsive and works on mobile devices. We also offer dedicated mobile apps for iOS and Android devices, which can be downloaded from the App Store and Google Play Store respectively. The mobile apps offer features like attendance marking, leave applications, and access to important HR documents on the go.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>How secure is my data in HRMS Pro?</AccordionTrigger>
                    <AccordionContent>
                      HRMS Pro takes data security very seriously. We implement industry-standard security measures including encryption of data both in transit and at rest, regular security audits, multi-factor authentication, and role-based access controls. Our systems comply with global data protection regulations including GDPR and we maintain strict data handling policies to ensure your information remains protected.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              <TabsContent value="accounts" className="mt-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                    <AccordionContent>
                      To reset your password, click on the "Forgot Password" link on the login page. Enter your registered email address, and you'll receive a password reset link. Click on the link and follow the instructions to create a new password. The link is valid for 24 hours.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Can I change my username or email address?</AccordionTrigger>
                    <AccordionContent>
                      Your username is typically your email address and cannot be changed directly. However, if you need to update your email address, please contact your HR administrator or system administrator. They can update your email in the system, which will change your login credentials.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What should I do if my account is locked?</AccordionTrigger>
                    <AccordionContent>
                      Accounts typically get locked after multiple failed login attempts as a security measure. If your account is locked, wait for 30 minutes and try again. If you still can't access your account, contact your HR administrator or IT support team to unlock it. Make sure you have your correct password before trying again.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              <TabsContent value="employees" className="mt-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I update my personal information?</AccordionTrigger>
                    <AccordionContent>
                      You can update your personal information by navigating to the "Profile" section from the main menu. Here you'll find options to update your contact details, address, emergency contacts, and more. Some fields may require approval from HR before changes are finalized.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How to apply for leave?</AccordionTrigger>
                    <AccordionContent>
                      To apply for leave, go to the "Leave Tracker" section from the main menu. Click on "Apply for Leave" and fill in the required details such as leave type, date range, and reason. Submit the form for approval. You can track the status of your leave application in the same section.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How can I view my attendance records?</AccordionTrigger>
                    <AccordionContent>
                      Your attendance records can be viewed in the "Attendance" section. Here you can see your daily check-in and check-out times, work hours, and attendance status. You can also generate reports for specific time periods and export them if needed.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              <TabsContent value="payroll" className="mt-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How to access my salary slips?</AccordionTrigger>
                    <AccordionContent>
                      You can access your salary slips by navigating to the "Payroll" section. Select the "Salary Slips" option and choose the month for which you want to view or download the slip. Click on "View" to see it online or "Download" to save a PDF copy.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>When are salaries processed each month?</AccordionTrigger>
                    <AccordionContent>
                      Salaries are typically processed between the 25th and 28th of each month. The exact date may vary slightly based on weekends and holidays. You'll receive a notification when your salary has been processed and the salary slip is available for viewing.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How to report discrepancies in salary?</AccordionTrigger>
                    <AccordionContent>
                      If you notice any discrepancies in your salary, first check your salary slip details carefully. If you still find an issue, raise a ticket through the "Help Desk" section selecting "Payroll Query" as the category. Provide specific details about the discrepancy for faster resolution.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Browse Help Topics</CardTitle>
            <CardDescription>
              Explore our help documentation by topic
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <HelpTopic 
                title="Getting Started"
                description="Basic guides for new users"
                topics={["System Overview", "Creating Your Profile", "Navigation Guide"]}
              />
              <HelpTopic 
                title="Leave Management"
                description="How to apply and manage leaves"
                topics={["Applying for Leave", "Leave Policies", "Managing Team Leaves"]}
              />
              <HelpTopic 
                title="Attendance"
                description="Track and manage attendance"
                topics={["Marking Attendance", "Attendance Reports", "Regularization Requests"]}
              />
              <HelpTopic 
                title="Payroll"
                description="Salary and compensation management"
                topics={["Understanding Your Salary Slip", "Tax Declarations", "Reimbursements"]}
              />
              <HelpTopic 
                title="Performance"
                description="Reviews and feedback processes"
                topics={["Performance Review Cycle", "Setting Goals", "Feedback System"]}
              />
              <HelpTopic 
                title="Recruitment"
                description="Hiring and onboarding processes"
                topics={["Creating Job Postings", "Candidate Evaluation", "Onboarding Checklist"]}
              />
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>
              Get help directly from our support team
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <Mail className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium mb-1">Email Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Send us an email and we'll get back to you within 24 hours
                </p>
                <Button variant="outline">
                  support@hrmspro.com
                </Button>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <MessageCircle className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium mb-1">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Chat with our support team during business hours (9 AM - 6 PM IST)
                </p>
                <Button>
                  Start Chat
                </Button>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <ExternalLink className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-medium mb-1">Resource Center</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Visit our extensive documentation and video tutorials
                </p>
                <Button variant="outline">
                  Visit Resources
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center border-t">
            <p className="text-sm text-muted-foreground">
              Support hours: Monday to Friday, 9:00 AM to 6:00 PM IST
            </p>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
}

function HelpTopic({ title, description, topics }: { title: string; description: string; topics: string[] }) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-medium mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <ul className="space-y-2">
        {topics.map((topic, index) => (
          <li key={index} className="text-sm">
            <a href="#" className="flex items-center text-primary hover:underline">
              <Bookmark className="h-3 w-3 mr-1" />
              {topic}
            </a>
          </li>
        ))}
      </ul>
      <Button variant="link" size="sm" className="p-0 mt-2">
        View all
      </Button>
    </div>
  );
}
