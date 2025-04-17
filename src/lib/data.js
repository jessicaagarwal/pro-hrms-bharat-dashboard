import { 
  Building, 
  Code, 
  FilePieChart, 
  MonitorSmartphone, 
  PenTool, 
  Share2 
} from "lucide-react";

/**
 * @typedef {Object} Employee
 * @property {string} id
 * @property {string} name
 * @property {string} role
 * @property {string} department
 * @property {string} email
 * @property {string} phone
 * @property {'Active' | 'On Leave' | 'Inactive'} status
 * @property {string} joiningDate
 * @property {number} salary
 * @property {string} [manager]
 * @property {string} avatar
 */

/**
 * @typedef {Object} LeaveRequest
 * @property {string} id
 * @property {string} employee
 * @property {string} employeeId
 * @property {string} type
 * @property {string} startDate
 * @property {string} endDate
 * @property {string} reason
 * @property {'Approved' | 'Pending' | 'Rejected'} status
 * @property {string} appliedOn
 */

/**
 * @typedef {Object} Event
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} date
 * @property {string} time
 * @property {'meeting' | 'holiday' | 'event' | 'deadline'} type
 */

/**
 * @typedef {Object} Stats
 * @property {number} totalEmployees
 * @property {number} activeEmployees
 * @property {number} onLeave
 * @property {number} newJoining
 * @property {Object.<string, number>} departments
 * @property {Object.<string, number>} attendance
 */

/**
 * @typedef {Object} TeamPerformance
 * @property {string} month
 * @property {number} design
 * @property {number} development
 * @property {number} marketing
 * @property {number} operations
 */

/**
 * @typedef {Object} Birthday
 * @property {string} id
 * @property {string} name
 * @property {string} date
 * @property {string} role
 * @property {string} avatar
 */

// Mock Indian employee data
/** @type {Employee[]} */
export const employees = [
  {
    id: "EMP001",
    name: "Rajiv Sharma",
    role: "Software Engineer",
    department: "Engineering",
    email: "rajiv.sharma@hrmspro.in",
    phone: "+91 98765 43210",
    status: "Active",
    joiningDate: "2022-04-15",
    salary: 1200000,
    manager: "Vikram Malhotra",
    avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png"
  },
  {
    id: "EMP002",
    name: "Priya Patel",
    role: "UI/UX Designer",
    department: "Design",
    email: "priya.patel@hrmspro.in",
    phone: "+91 87654 32109",
    status: "Active",
    joiningDate: "2021-08-22",
    salary: 950000,
    manager: "Anjali Desai",
    avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png"
  },
  {
    id: "EMP003",
    name: "Vikram Malhotra",
    role: "Engineering Manager",
    department: "Engineering",
    email: "vikram.malhotra@hrmspro.in",
    phone: "+91 76543 21098",
    status: "Active",
    joiningDate: "2019-06-10",
    salary: 2400000,
    avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png"
  },
  {
    id: "EMP004",
    name: "Neha Gupta",
    role: "Marketing Specialist",
    department: "Marketing",
    email: "neha.gupta@hrmspro.in",
    phone: "+91 65432 10987",
    status: "On Leave",
    joiningDate: "2022-01-05",
    salary: 1050000,
    manager: "Arjun Singh",
    avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png"
  },
  {
    id: "EMP005",
    name: "Arjun Singh",
    role: "Marketing Director",
    department: "Marketing",
    email: "arjun.singh@hrmspro.in",
    phone: "+91 54321 09876",
    status: "Active",
    joiningDate: "2018-11-12",
    salary: 2200000,
    avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png"
  },
  {
    id: "EMP006",
    name: "Anjali Desai",
    role: "Design Lead",
    department: "Design",
    email: "anjali.desai@hrmspro.in",
    phone: "+91 43210 98765",
    status: "Active",
    joiningDate: "2020-03-18",
    salary: 1800000,
    avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png"
  },
  {
    id: "EMP007",
    name: "Rohan Kapoor",
    role: "Frontend Developer",
    department: "Engineering",
    email: "rohan.kapoor@hrmspro.in",
    phone: "+91 32109 87654",
    status: "Active",
    joiningDate: "2022-09-03",
    salary: 1100000,
    manager: "Vikram Malhotra",
    avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png"
  },
  {
    id: "EMP008",
    name: "Kavita Rao",
    role: "HR Manager",
    department: "Human Resources",
    email: "kavita.rao@hrmspro.in",
    phone: "+91 21098 76543",
    status: "Active",
    joiningDate: "2020-07-22",
    salary: 1950000,
    avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png"
  },
  {
    id: "EMP009",
    name: "Anil Kumar",
    role: "Backend Developer",
    department: "Engineering",
    email: "anil.kumar@hrmspro.in",
    phone: "+91 10987 65432",
    status: "Inactive",
    joiningDate: "2021-05-17",
    salary: 1350000,
    manager: "Vikram Malhotra",
    avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png"
  },
  {
    id: "EMP010",
    name: "Meena Joshi",
    role: "Finance Analyst",
    department: "Finance",
    email: "meena.joshi@hrmspro.in",
    phone: "+91 09876 54321",
    status: "Active",
    joiningDate: "2022-01-10",
    salary: 1250000,
    manager: "Sanjay Verma",
    avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png"
  },
  {
    id: "EMP011",
    name: "Sanjay Verma",
    role: "Finance Director",
    department: "Finance",
    email: "sanjay.verma@hrmspro.in",
    phone: "+91 90876 54321",
    status: "Active",
    joiningDate: "2018-04-05",
    salary: 2300000,
    avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png"
  },
  {
    id: "EMP012",
    name: "Divya Khanna",
    role: "Product Manager",
    department: "Product",
    email: "divya.khanna@hrmspro.in",
    phone: "+91 89765 43210",
    status: "On Leave",
    joiningDate: "2020-11-15",
    salary: 1850000,
    avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png"
  }
];

export const leaveRequests = [
  {
    id: "LR001",
    employee: "Rajiv Sharma",
    employeeId: "EMP001",
    type: "Sick Leave",
    startDate: "2023-04-10",
    endDate: "2023-04-12",
    reason: "Fever and cold",
    status: "Approved",
    appliedOn: "2023-04-08"
  },
  {
    id: "LR002",
    employee: "Priya Patel",
    employeeId: "EMP002",
    type: "Casual Leave",
    startDate: "2023-04-15",
    endDate: "2023-04-16",
    reason: "Family function",
    status: "Approved",
    appliedOn: "2023-04-05"
  },
  {
    id: "LR003",
    employee: "Neha Gupta",
    employeeId: "EMP004",
    type: "Sick Leave",
    startDate: "2023-04-05",
    endDate: "2023-04-07",
    reason: "Medical checkup",
    status: "Approved",
    appliedOn: "2023-04-03"
  },
  {
    id: "LR004",
    employee: "Rohan Kapoor",
    employeeId: "EMP007",
    type: "Casual Leave",
    startDate: "2023-04-20",
    endDate: "2023-04-21",
    reason: "Personal work",
    status: "Pending",
    appliedOn: "2023-04-15"
  },
  {
    id: "LR005",
    employee: "Divya Khanna",
    employeeId: "EMP012",
    type: "Annual Leave",
    startDate: "2023-04-25",
    endDate: "2023-05-05",
    reason: "Vacation",
    status: "Pending",
    appliedOn: "2023-04-10"
  }
];

/** @type {Event[]} */
export const events = [
  {
    id: "EVT001",
    title: "Team Meeting",
    description: "Weekly team meeting to discuss progress",
    date: "2023-04-10",
    time: "10:00 AM",
    type: "meeting"
  },
  {
    id: "EVT002",
    title: "Product Launch",
    description: "Launch of new product features",
    date: "2023-04-15",
    time: "2:00 PM",
    type: "event"
  },
  {
    id: "EVT003",
    title: "Diwali Celebration",
    description: "Office Diwali party and celebration",
    date: "2023-11-12",
    time: "4:00 PM",
    type: "holiday"
  },
  {
    id: "EVT004",
    title: "Quarterly Review",
    description: "Q2 performance review meeting",
    date: "2023-07-01",
    time: "11:00 AM",
    type: "deadline"
  },
  {
    id: "EVT005",
    title: "Independence Day",
    description: "National holiday",
    date: "2023-08-15",
    time: "All Day",
    type: "holiday"
  }
];

export const stats = {
  totalEmployees: 85,
  activeEmployees: 78,
  onLeave: 5,
  newJoining: 3,
  departments: {
    Engineering: 35,
    Design: 12,
    Marketing: 15,
    Finance: 10,
    HR: 8,
    Product: 5
  },
  attendance: {
    Present: 78,
    Absent: 2,
    Leave: 5
  }
};

export const teamPerformance = [
  {
    month: "Jan",
    design: 65,
    development: 75,
    marketing: 55,
    operations: 60
  },
  {
    month: "Feb",
    design: 70,
    development: 80,
    marketing: 60,
    operations: 65
  },
  {
    month: "Mar",
    design: 75,
    development: 85,
    marketing: 70,
    operations: 75
  },
  {
    month: "Apr",
    design: 80,
    development: 90,
    marketing: 75,
    operations: 80
  },
  {
    month: "May",
    design: 85,
    development: 95,
    marketing: 80,
    operations: 85
  },
  {
    month: "Jun",
    design: 90,
    development: 85,
    marketing: 85,
    operations: 90
  },
  {
    month: "Jul",
    design: 95,
    development: 90,
    marketing: 90,
    operations: 85
  },
  {
    month: "Aug",
    design: 90,
    development: 95,
    marketing: 85,
    operations: 80
  },
  {
    month: "Sep",
    design: 85,
    development: 90,
    marketing: 80,
    operations: 85
  },
  {
    month: "Oct",
    design: 80,
    development: 85,
    marketing: 85,
    operations: 90
  },
  {
    month: "Nov",
    design: 85,
    development: 90,
    marketing: 90,
    operations: 85
  },
  {
    month: "Dec",
    design: 90,
    development: 95,
    marketing: 85,
    operations: 80
  }
];

/** @type {Birthday[]} */
export const birthdays = [
  {
    id: "BIR001",
    name: "Rajiv Sharma",
    date: "1990-04-12",
    role: "Software Engineer",
    avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png"
  },
  {
    id: "BIR002",
    name: "Priya Patel",
    date: "1992-05-15",
    role: "UI/UX Designer",
    avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png"
  },
  {
    id: "BIR003",
    name: "Vikram Malhotra",
    date: "1985-06-22",
    role: "Engineering Manager",
    avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png"
  },
  {
    id: "BIR004",
    name: "Neha Gupta",
    date: "1994-04-25",
    role: "Marketing Specialist",
    avatar: "/lovable-uploads/757fea40-f90c-4734-a7b8-eef599ce18f9.png"
  }
];

export const indianHolidays = [
  { date: "2023-01-26", name: "Republic Day" },
  { date: "2023-03-08", name: "Holi" },
  { date: "2023-04-07", name: "Good Friday" },
  { date: "2023-04-14", name: "Dr. Ambedkar Jayanti" },
  { date: "2023-04-22", name: "Eid al-Fitr" },
  { date: "2023-05-05", name: "Buddha Purnima" },
  { date: "2023-06-29", name: "Eid al-Adha" },
  { date: "2023-08-15", name: "Independence Day" },
  { date: "2023-09-19", name: "Ganesh Chaturthi" },
  { date: "2023-10-02", name: "Gandhi Jayanti" },
  { date: "2023-10-24", name: "Dussehra" },
  { date: "2023-11-12", name: "Diwali" },
  { date: "2023-12-25", name: "Christmas" }
];

export const departmentIcons = {
  Engineering: Code,
  Design: PenTool,
  Marketing: Share2,
  Finance: FilePieChart,
  "Human Resources": Building,
  Product: MonitorSmartphone
};

export const salaryRanges = [
  { min: 300000, max: 500000, label: "₹3-5 LPA" },
  { min: 500001, max: 800000, label: "₹5-8 LPA" },
  { min: 800001, max: 1200000, label: "₹8-12 LPA" },
  { min: 1200001, max: 1800000, label: "₹12-18 LPA" },
  { min: 1800001, max: 2500000, label: "₹18-25 LPA" },
  { min: 2500001, max: 5000000, label: "₹25-50 LPA" },
  { min: 5000001, max: null, label: "₹50+ LPA" }
];

/**
 * Format a number as Indian currency
 * @param {number} amount - The amount to format
 * @returns {string} Formatted currency string
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Format a date string to a readable format
 * @param {string} dateString - The date string to format
 * @returns {string} Formatted date string
 */
export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Get an employee by their ID
 * @param {string} id - The employee ID
 * @returns {Employee|undefined} The employee object or undefined if not found
 */
export function getEmployeeById(id) {
  return employees.find(emp => emp.id === id);
}
