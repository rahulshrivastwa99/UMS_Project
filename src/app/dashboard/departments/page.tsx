import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Building2, Plus, Search } from "lucide-react"

// Mock data for departments
const departments = [
  {
    id: "DEP001",
    name: "Computer Science",
    head: "Dr. Robert Johnson",
    faculty: "18",
    students: "452",
    courses: "38",
    budget: "$2.8M",
  },
  {
    id: "DEP002",
    name: "Biology",
    head: "Dr. Mary Williams",
    faculty: "22",
    students: "378",
    courses: "42",
    budget: "$3.2M",
  },
  {
    id: "DEP003",
    name: "Mathematics",
    head: "Dr. James Brown",
    faculty: "15",
    students: "286",
    courses: "32",
    budget: "$1.9M",
  },
  {
    id: "DEP004",
    name: "Psychology",
    head: "Dr. Patricia Miller",
    faculty: "14",
    students: "325",
    courses: "28",
    budget: "$1.7M",
  },
  {
    id: "DEP005",
    name: "Physics",
    head: "Dr. Michael Davis",
    faculty: "12",
    students: "184",
    courses: "24",
    budget: "$2.1M",
  },
  {
    id: "DEP006",
    name: "Chemistry",
    head: "Dr. Elizabeth Wilson",
    faculty: "16",
    students: "210",
    courses: "26",
    budget: "$2.4M",
  },
  {
    id: "DEP007",
    name: "History",
    head: "Dr. David Anderson",
    faculty: "10",
    students: "195",
    courses: "22",
    budget: "$1.2M",
  },
  {
    id: "DEP008",
    name: "English",
    head: "Dr. Sarah Thompson",
    faculty: "13",
    students: "230",
    courses: "30",
    budget: "$1.5M",
  },
]

export default function DepartmentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Departments</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Department
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Department</DialogTitle>
              <DialogDescription>
                Enter the department information below to add it to the system.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name" className="text-right">
                  Department Name
                </label>
                <Input id="name" placeholder="Computer Science" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="head" className="text-right">
                  Department Head
                </label>
                <Input id="head" placeholder="Dr. John Smith" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="budget" className="text-right">
                  Annual Budget
                </label>
                <Input id="budget" placeholder="$2,000,000" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="description" className="text-right">
                  Description
                </label>
                <Input id="description" placeholder="Department description" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save Department</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search departments..."
            className="pl-8"
          />
        </div>
        <Button variant="outline">Filter</Button>
      </div>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex items-center">
            <Building2 className="mr-2 h-5 w-5" />
            Department Directory
          </CardTitle>
          <CardDescription>
            View and manage all academic departments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Head</TableHead>
                <TableHead>Faculty</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Courses</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {departments.map((department) => (
                <TableRow key={department.id}>
                  <TableCell className="font-medium">{department.id}</TableCell>
                  <TableCell>{department.name}</TableCell>
                  <TableCell>{department.head}</TableCell>
                  <TableCell>{department.faculty}</TableCell>
                  <TableCell>{department.students}</TableCell>
                  <TableCell>{department.courses}</TableCell>
                  <TableCell>{department.budget}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
