import { useState } from "react";
import PropTypes from 'prop-types';
import { Layout } from "@/components/layout";
import { employees, departmentIcons, formatCurrency } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";
import { 
  Eye, 
  Pencil, 
  Trash2, 
  Search, 
  Filter, 
  UserPlus, 
  Download, 
  Share2,
  SlidersHorizontal,
  ArrowUpDown,
  Check
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Employees() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [viewMode, setViewMode] = useState("table");
  const { toast } = useToast();
  
  // Get unique departments and statuses for filtering
  const departments = Array.from(new Set(employees.map(emp => emp.department)));
  const statuses = Array.from(new Set(employees.map(emp => emp.status)));
  
  // Filter employees based on search term and filters
  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = 
      searchTerm === "" ||
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesDepartment = 
      selectedDepartments.length === 0 || 
      selectedDepartments.includes(employee.department);
      
    const matchesStatus = 
      selectedStatus.length === 0 || 
      selectedStatus.includes(employee.status);
      
    return matchesSearch && matchesDepartment && matchesStatus;
  });
  
  // Sort employees
  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    let valueA = a[sortField];
    let valueB = b[sortField];
    
    // Handle special case for numeric fields
    if (sortField === "salary") {
      valueA = Number(valueA);
      valueB = Number(valueB);
    }
    
    if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
    if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });
  
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };
  
  const toggleDepartmentFilter = (department) => {
    setSelectedDepartments(prev => 
      prev.includes(department)
        ? prev.filter(d => d !== department)
        : [...prev, department]
    );
  };
  
  const toggleStatusFilter = (status) => {
    setSelectedStatus(prev => 
      prev.includes(status)
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };
  
  const clearFilters = () => {
    setSelectedDepartments([]);
    setSelectedStatus([]);
    setSearchTerm("");
    setSortField("name");
    setSortDirection("asc");
    toast({
      title: "Filters cleared",
      description: "All filters have been reset",
    });
  };
  
  // Status badge colors
  const getStatusColor = (status) => {
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
  
  // Department icon
  const getDepartmentIcon = (department) => {
    const IconComponent = departmentIcons[department] || departmentIcons["Engineering"];
    return <IconComponent className="h-4 w-4" />;
  };
  
  return (
    <Layout title="Employee Directory" subtitle="Manage your organization's workforce">
      <div className="space-y-6">
        {/* Filters and actions */}
        <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
          <div className="flex flex-1 flex-col md:flex-row gap-2">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search employees..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  <Filter className="mr-2 h-4 w-4" />
                  <span>Departments</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuLabel>Filter by Department</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {departments.map((department) => (
                  <DropdownMenuCheckboxItem
                    key={department}
                    checked={selectedDepartments.includes(department)}
                    onCheckedChange={() => toggleDepartmentFilter(department)}
                  >
                    {department}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  <span>Status</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {statuses.map((status) => (
                  <DropdownMenuCheckboxItem
                    key={status}
                    checked={selectedStatus.includes(status)}
                    onCheckedChange={() => toggleStatusFilter(status)}
                  >
                    {status}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
          
          <div className="flex gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Employee
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Employee</DialogTitle>
                  <DialogDescription>
                    This feature is under development. Check back soon!
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  Export as Excel
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Export as CSV
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Export as PDF
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>View</DropdownMenuLabel>
                <DropdownMenuRadioGroup value={viewMode} onValueChange={setViewMode}>
                  <DropdownMenuRadioItem value="table">Table View</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="grid">Grid View</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        {/* Employee Count */}
        <div className="text-sm text-muted-foreground">
          Showing {sortedEmployees.length} of {employees.length} employees
        </div>
        
        {/* Table View */}
        {viewMode === "table" && (
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">
                      <div className="flex items-center cursor-pointer" onClick={() => handleSort("name")}>
                        Name
                        {sortField === "name" && (
                          <ArrowUpDown className="ml-1 h-4 w-4" />
                        )}
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center cursor-pointer" onClick={() => handleSort("department")}>
                        Department
                        {sortField === "department" && (
                          <ArrowUpDown className="ml-1 h-4 w-4" />
                        )}
                      </div>
                    </TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>
                      <div className="flex items-center cursor-pointer" onClick={() => handleSort("status")}>
                        Status
                        {sortField === "status" && (
                          <ArrowUpDown className="ml-1 h-4 w-4" />
                        )}
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center cursor-pointer" onClick={() => handleSort("joiningDate")}>
                        Joined
                        {sortField === "joiningDate" && (
                          <ArrowUpDown className="ml-1 h-4 w-4" />
                        )}
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center cursor-pointer" onClick={() => handleSort("salary")}>
                        Salary
                        {sortField === "salary" && (
                          <ArrowUpDown className="ml-1 h-4 w-4" />
                        )}
                      </div>
                    </TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedEmployees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={employee.avatar} />
                            <AvatarFallback>{employee.name.charAt(0)}{employee.name.split(" ")[1]?.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{employee.name}</div>
                            <div className="text-xs text-muted-foreground">{employee.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          {getDepartmentIcon(employee.department)}
                          <span>{employee.department}</span>
                        </div>
                      </TableCell>
                      <TableCell>{employee.role}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(employee.status)} variant="outline">
                          {employee.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{new Date(employee.joiningDate).toLocaleDateString('en-IN')}</TableCell>
                      <TableCell>{formatCurrency(employee.salary)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" onClick={() => toast({ title: `View ${employee.name}`, description: "This feature is under development" })}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => toast({ title: `Edit ${employee.name}`, description: "This feature is under development" })}>
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => toast({ title: `Delete ${employee.name}`, description: "This feature is under development" })}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
        
        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sortedEmployees.map((employee) => (
              <Card key={employee.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <Badge className={getStatusColor(employee.status)} variant="outline">
                      {employee.status}
                    </Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <SlidersHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => toast({ title: `View ${employee.name}`, description: "This feature is under development" })}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => toast({ title: `Edit ${employee.name}`, description: "This feature is under development" })}>
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-500" onClick={() => toast({ title: `Delete ${employee.name}`, description: "This feature is under development" })}>
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col items-center pb-2">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={employee.avatar} />
                    <AvatarFallback>{employee.name.charAt(0)}{employee.name.split(" ")[1]?.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="mt-4 text-lg">{employee.name}</CardTitle>
                  <CardDescription className="flex items-center justify-center gap-1 mt-1">
                    {getDepartmentIcon(employee.department)}
                    {employee.role}
                  </CardDescription>
                </CardContent>
                <CardFooter className="border-t p-4 flex flex-col gap-2">
                  <div className="flex justify-between w-full text-sm">
                    <span className="text-muted-foreground">Department</span>
                    <span className="font-medium">{employee.department}</span>
                  </div>
                  <div className="flex justify-between w-full text-sm">
                    <span className="text-muted-foreground">Joined</span>
                    <span className="font-medium">{new Date(employee.joiningDate).toLocaleDateString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between w-full text-sm">
                    <span className="text-muted-foreground">Salary</span>
                    <span className="font-medium">{formatCurrency(employee.salary)}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

// PropTypes for any child components if needed
Employees.propTypes = {
  // Add any props if this component receives any
};
