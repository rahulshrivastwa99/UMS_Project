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
import { BookOpen, Plus, Search } from "lucide-react"

// Mock data for courses
const courses = [
  {
    id: "CS101",
    name: "Introduction to Computer Science",
    instructor: "Dr. Robert Johnson",
    department: "Computer Science",
    credits: "3",
    students: "45",
    semester: "Fall 2024",
  },
  {
    id: "BIO201",
    name: "Molecular Biology",
    instructor: "Dr. Mary Williams",
    department: "Biology",
    credits: "4",
    students: "32",
    semester: "Fall 2024",
  },
  {
    id: "MTH101",
    name: "Calculus I",
    instructor: "Dr. James Brown",
    department: "Mathematics",
    credits: "4",
    students: "56",
    semester: "Fall 2024",
  },
  {
    id: "PSY100",
    name: "Introduction to Psychology",
    instructor: "Dr. Patricia Miller",
    department: "Psychology",
    credits: "3",
    students: "72",
    semester: "Fall 2024",
  },
  {
    id: "PHY101",
    name: "Physics for Scientists and Engineers",
    instructor: "Dr. Michael Davis",
    department: "Physics",
    credits: "4",
    students: "38",
    semester: "Fall 2024",
  },
  {
    id: "CHM101",
    name: "General Chemistry",
    instructor: "Dr. Elizabeth Wilson",
    department: "Chemistry",
    credits: "4",
    students: "42",
    semester: "Fall 2024",
  },
  {
    id: "HIS200",
    name: "World History",
    instructor: "Dr. David Anderson",
    department: "History",
    credits: "3",
    students: "48",
    semester: "Fall 2024",
  },
  {
    id: "ENG101",
    name: "English Composition",
    instructor: "Dr. Sarah Thompson",
    department: "English",
    credits: "3",
    students: "65",
    semester: "Fall 2024",
  },
]

export default function CoursesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Course
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Course</DialogTitle>
              <DialogDescription>
                Enter the course information below to add it to the system.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="courseId" className="text-right">
                  Course ID
                </label>
                <Input id="courseId" placeholder="CS101" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name" className="text-right">
                  Course Name
                </label>
                <Input
                  id="name"
                  placeholder="Introduction to Computer Science"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="instructor" className="text-right">
                  Instructor
                </label>
                <Input id="instructor" placeholder="Dr. John Smith" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="department" className="text-right">
                  Department
                </label>
                <Input id="department" placeholder="Computer Science" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="credits" className="text-right">
                  Credits
                </label>
                <Input id="credits" placeholder="3" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="semester" className="text-right">
                  Semester
                </label>
                <Input id="semester" placeholder="Fall 2024" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save Course</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search courses..."
            className="pl-8"
          />
        </div>
        <Button variant="outline">Filter</Button>
      </div>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex items-center">
            <BookOpen className="mr-2 h-5 w-5" />
            Course Directory
          </CardTitle>
          <CardDescription>
            View and manage all courses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Instructor</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Credits</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Semester</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell className="font-medium">{course.id}</TableCell>
                  <TableCell>{course.name}</TableCell>
                  <TableCell>{course.instructor}</TableCell>
                  <TableCell>{course.department}</TableCell>
                  <TableCell>{course.credits}</TableCell>
                  <TableCell>{course.students}</TableCell>
                  <TableCell>{course.semester}</TableCell>
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
