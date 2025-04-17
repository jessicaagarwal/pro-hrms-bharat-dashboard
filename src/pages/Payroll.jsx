import { useState } from "react";
import PropTypes from 'prop-types';
import { Layout } from "@/components/layout";
import { employees, formatCurrency } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";
import { 
  Download, 
  Filter, 
  Search, 
  Calendar, 
  CreditCard, 
  ArrowUpDown,
  Clock,
  AlertCircle
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
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/**
 * @typedef {'Paid' | 'Processing' | 'Pending' | 'Failed'} PayrollStatus
 */

/**
 * @typedef {Object} PayrollData
 * @property {string} id
 * @property {string} employeeId
 * @property {string} employeeName
 * @property {number} baseSalary
 * @property {number} bonus
 * @property {number} deductions
 * @property {number} taxes
 * @property {number} netSalary
 * @property {string} paymentDate
 * @property {PayrollStatus} status
 * @property {string} bankAccount
 */

// Mock payroll data
/** @type {PayrollData[]} */
const payrollData = employees.map((employee) => {
  // Calculate random values for payroll components based on base salary
  const baseSalary = employee.salary / 12; // Monthly salary
  const bonus = Math.random() < 0.3 ? Math.round(baseSalary * (Math.random() * 0.1)) : 0; // 30% chance of bonus up to 10%
  const deductions = Math.round(baseSalary * (0.1 + Math.random() * 0.05)); // Deductions 10-15%
  const taxes = Math.round(baseSalary * (0.2 + Math.random() * 0.1)); // Taxes 20-30%
  const netSalary = Math.round(baseSalary + bonus - deductions - taxes);
  
  // Random status weighted towards "Paid"
  const statusRandom = Math.random();
  /** @type {PayrollStatus} */
  let status;
  if (statusRandom < 0.7) status = "Paid";
  else if (statusRandom < 0.85) status = "Processing";
  else if (statusRandom < 0.95) status = "Pending";
  else status = "Failed";
  
  // Random payment date in the last month
  const today = new Date();
  const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  const paymentDay = Math.floor(Math.random() * daysInLastMonth) + 1;
  lastMonth.setDate(paymentDay);
  
  // Format bank account as XXXX XXXX XXXX 1234
  const lastFour = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  const bankAccount = `XXXX XXXX XXXX ${lastFour}`;
  
  return {
    id: `PAY-${Math.floor(Math.random() * 10000)}`,
    employeeId: employee.id,
    employeeName: employee.name,
    baseSalary,
    bonus,
    deductions,
    taxes,
    netSalary,
    paymentDate: lastMonth.toISOString().split('T')[0],
    status,
    bankAccount,
  };
});

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const currentYear = new Date().getFullYear();
const years = [currentYear - 1, currentYear, currentYear + 1];

const payrollSummary = {
  totalSalaries: payrollData.reduce((sum, record) => sum + record.baseSalary, 0),
  totalBonus: payrollData.reduce((sum, record) => sum + record.bonus, 0),
  totalDeductions: payrollData.reduce((sum, record) => sum + record.deductions, 0),
  totalTaxes: payrollData.reduce((sum, record) => sum + record.taxes, 0),
  totalNetPayments: payrollData.reduce((sum, record) => sum + record.netSalary, 0),
};

export default function Payroll() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(months[new Date().getMonth() - 1]);
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());
  const [sortField, setSortField] = useState("employeeName");
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const { toast } = useToast();
  
  // Get unique statuses for filtering
  const statuses = Array.from(new Set(payrollData.map(record => record.status)));
  
  // Filter payroll data based on search term and filters
  const filteredPayroll = payrollData.filter(record => {
    const matchesSearch = 
      searchTerm === "" ||
      record.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.id.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesStatus = 
      selectedStatuses.length === 0 || 
      selectedStatuses.includes(record.status);
      
    return matchesSearch && matchesStatus;
  });
  
  // Sort payroll data
  const sortedPayroll = [...filteredPayroll].sort((a, b) => {
    const valueA = a[sortField];
    const valueB = b[sortField];
    
    if (typeof valueA === "number" && typeof valueB === "number") {
      return sortDirection === "asc" ? valueA - valueB : valueB - valueA;
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
  
  const toggleStatusFilter = (status) => {
    setSelectedStatuses(prev => 
      prev.includes(status)
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };
  
  // Status badge colors
  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-500/20 text-green-600 dark:bg-green-500/30 dark:text-green-400";
      case "Processing":
        return "bg-blue-500/20 text-blue-600 dark:bg-blue-500/30 dark:text-blue-400";
      case "Pending":
        return "bg-amber-500/20 text-amber-600 dark:bg-amber-500/30 dark:text-amber-400";
      case "Failed":
        return "bg-red-500/20 text-red-600 dark:bg-red-500/30 dark:text-red-400";
      default:
        return "bg-gray-500/20 text-gray-600 dark:bg-gray-500/30 dark:text-gray-400";
    }
  };
  
  const runPayroll = () => {
    toast({ 
      title: "Payroll Processing",
      description: `Processing payroll for ${selectedMonth} ${selectedYear}`,
    });
  };
  
  return (
    <Layout title="Payroll Management" subtitle="Process and manage employee compensation">
      <div className="space-y-6">
        {/* Period selection and summary stats */}
        <div className="grid gap-4 md:grid-cols-6">
          <Card className="md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle>Payroll Period</CardTitle>
              <CardDescription>Select month and year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Month</p>
                  <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                    <SelectTrigger>
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map(month => (
                        <SelectItem key={month} value={month}>{month}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Year</p>
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger>
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map(year => (
                        <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={runPayroll}>
                Run Payroll
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="md:col-span-4">
            <CardHeader className="pb-2">
              <CardTitle>Payroll Summary</CardTitle>
              <CardDescription>Overall payroll statistics for {selectedMonth} {selectedYear}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Base</p>
                  <p className="text-2xl font-bold">{formatCurrency(payrollSummary.totalSalaries)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Bonus</p>
                  <p className="text-2xl font-bold">{formatCurrency(payrollSummary.totalBonus)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Deductions</p>
                  <p className="text-2xl font-bold">{formatCurrency(payrollSummary.totalDeductions)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Taxes</p>
                  <p className="text-2xl font-bold">{formatCurrency(payrollSummary.totalTaxes)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Net Payments</p>
                  <p className="text-2xl font-bold">{formatCurrency(payrollSummary.totalNetPayments)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Status cards */}
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          <Card className="bg-green-500/10">
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <CardTitle className="text-lg">Paid</CardTitle>
                <div className="p-2 rounded-full bg-green-500/20">
                  <CreditCard className="h-4 w-4 text-green-500" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {payrollData.filter(record => record.status === "Paid").length}
              </p>
              <p className="text-sm text-muted-foreground">Employees paid</p>
            </CardContent>
          </Card>
          
          <Card className="bg-blue-500/10">
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <CardTitle className="text-lg">Processing</CardTitle>
                <div className="p-2 rounded-full bg-blue-500/20">
                  <Clock className="h-4 w-4 text-blue-500" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {payrollData.filter(record => record.status === "Processing").length}
              </p>
              <p className="text-sm text-muted-foreground">Payments in process</p>
            </CardContent>
          </Card>
          
          <Card className="bg-amber-500/10">
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <CardTitle className="text-lg">Pending</CardTitle>
                <div className="p-2 rounded-full bg-amber-500/20">
                  <Calendar className="h-4 w-4 text-amber-500" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {payrollData.filter(record => record.status === "Pending").length}
              </p>
              <p className="text-sm text-muted-foreground">Awaiting approval</p>
            </CardContent>
          </Card>
          
          <Card className="bg-red-500/10">
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <CardTitle className="text-lg">Failed</CardTitle>
                <div className="p-2 rounded-full bg-red-500/20">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {payrollData.filter(record => record.status === "Failed").length}
              </p>
              <p className="text-sm text-muted-foreground">Payment failures</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Filters and actions */}
        <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
          <div className="flex flex-1 items-center gap-2">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search employees or ID..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
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
                    checked={selectedStatuses.includes(status)}
                    onCheckedChange={() => toggleStatusFilter(status)}
                  >
                    {status}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button>
              <CreditCard className="mr-2 h-4 w-4" />
              Approve All
            </Button>
          </div>
        </div>
        
        {/* Employee Count */}
        <div className="text-sm text-muted-foreground">
          Showing {sortedPayroll.length} of {payrollData.length} payroll records
        </div>
        
        {/* Payroll Table */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <div className="flex items-center cursor-pointer" onClick={() => handleSort("employeeName")}>
                      Employee
                      {sortField === "employeeName" && (
                        <ArrowUpDown className="ml-1 h-4 w-4" />
                      )}
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center cursor-pointer" onClick={() => handleSort("id")}>
                      Payroll ID
                      {sortField === "id" && (
                        <ArrowUpDown className="ml-1 h-4 w-4" />
                      )}
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center cursor-pointer" onClick={() => handleSort("baseSalary")}>
                      Base Salary
                      {sortField === "baseSalary" && (
                        <ArrowUpDown className="ml-1 h-4 w-4" />
                      )}
                    </div>
                  </TableHead>
                  <TableHead>Bonus</TableHead>
                  <TableHead>Deductions</TableHead>
                  <TableHead>
                    <div className="flex items-center cursor-pointer" onClick={() => handleSort("netSalary")}>
                      Net Salary
                      {sortField === "netSalary" && (
                        <ArrowUpDown className="ml-1 h-4 w-4" />
                      )}
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center cursor-pointer" onClick={() => handleSort("paymentDate")}>
                      Payment Date
                      {sortField === "paymentDate" && (
                        <ArrowUpDown className="ml-1 h-4 w-4" />
                      )}
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center cursor-pointer" onClick={() => handleSort("status")}>
                      Status
                      {sortField === "status" && (
                        <ArrowUpDown className="ml-1 h-4 w-4" />
                      )}
                    </div>
                  </TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedPayroll.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>{record.employeeName}</TableCell>
                    <TableCell>{record.id}</TableCell>
                    <TableCell>{formatCurrency(record.baseSalary)}</TableCell>
                    <TableCell>{formatCurrency(record.bonus)}</TableCell>
                    <TableCell>
                      <div className="text-red-500">-{formatCurrency(record.deductions + record.taxes)}</div>
                      <div className="text-xs text-muted-foreground">
                        Deductions: {formatCurrency(record.deductions)}, Taxes: {formatCurrency(record.taxes)}
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{formatCurrency(record.netSalary)}</TableCell>
                    <TableCell>{new Date(record.paymentDate).toLocaleDateString('en-IN')}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(record.status)} variant="outline">
                        {record.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => toast({
                          title: "Payment Details",
                          description: `${record.employeeName}'s payment to account ${record.bankAccount}`
                        })}
                      >
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

// PropTypes for any child components if needed
Payroll.propTypes = {
  // Add any props if this component receives any
};
