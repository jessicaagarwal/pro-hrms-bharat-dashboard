
import { useState } from "react";
import { employees } from "@/lib/data";
import { Search, RefreshCcw, Filter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function EmployeeStatus() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredEmployees = employees
    .filter(employee => 
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 5); // Show only first 5 employees in the dashboard
    
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/20 text-green-600 dark:bg-green-500/30 dark:text-green-400";
      case "On Leave":
        return "bg-amber-500/20 text-amber-600 dark:bg-amber-500/30 dark:text-amber-400";
      case "Inactive":
        return "bg-red-500/20 text-red-600 dark:bg-red-500/30 dark:text-red-400";
      default:
        return "bg-gray-500/20 text-gray-600 dark:bg-gray-500/30 dark:text-gray-400";
    }
  };
  
  return (
    <Card className="col-span-5 animated-card" style={{ animationDelay: "200ms" }}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Employee Status</CardTitle>
          <CardDescription>Latest status of company employees</CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative w-40 lg:w-60">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <RefreshCcw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Name</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEmployees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={employee.avatar} />
                      <AvatarFallback>{employee.name.charAt(0)}{employee.name.split(" ")[1]?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{employee.name}</span>
                  </div>
                </TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>{employee.role}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(employee.status)} variant="outline">
                    {employee.status}
                  </Badge>
                </TableCell>
                <TableCell>{new Date(employee.joiningDate).toLocaleDateString('en-IN')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
