"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Search, Users } from "lucide-react";

// Mock data for faculty members
const faculty = [
  {
    id: "FAC001",
    name: "Dr. Achal Kaushik",
    email: "achal.kaushik@gmail.com",
    department: "Computer Science",
    position: "Professor",
    joinedYear: "2008",
    courses: "CS101, CS405",
  },
  {
    id: "FAC002",
    name: "Dr. Mary Williams",
    email: "mary.williams@example.com",
    department: "Biology",
    position: "Associate Professor",
    joinedYear: "2015",
    courses: "BIO201, BIO330",
  },
  {
    id: "FAC003",
    name: "Dr. James Brown",
    email: "james.brown@example.com",
    department: "Mathematics",
    position: "Assistant Professor",
    joinedYear: "2018",
    courses: "MTH101, MTH202",
  },
  {
    id: "FAC004",
    name: "Dr. Patricia Miller",
    email: "patricia.miller@example.com",
    department: "Psychology",
    position: "Professor",
    joinedYear: "2008",
    courses: "PSY100, PSY340",
  },
  {
    id: "FAC005",
    name: "Dr. Michael Davis",
    email: "michael.davis@example.com",
    department: "Physics",
    position: "Professor",
    joinedYear: "2005",
    courses: "PHY101, PHY205",
  },
  {
    id: "FAC006",
    name: "Dr. Elizabeth Wilson",
    email: "elizabeth.wilson@example.com",
    department: "Chemistry",
    position: "Associate Professor",
    joinedYear: "2012",
    courses: "CHM101, CHM220",
  },
];

export default function FacultyPage() {
  // Inside FacultyPage component:
  const [facultyList, setFacultyList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFaculty() {
      try {
        const res = await fetch("/api/faculty");
        const data = await res.json();
        if (data.success) {
          setFacultyList(data.data);
        } else {
          console.error("Failed to fetch faculty:", data.error);
        }
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchFaculty();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    position: "",
    joinedYear: "",
    courses: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/faculty", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setIsOpen(false);

      const data = await res.json();
      if (data.success) {
        setFacultyList((prev) => [data.data, ...prev]); // Prepend new faculty
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      console.error("Failed to add faculty:", err);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Faculty</h1>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Faculty
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Faculty Member</DialogTitle>
              <DialogDescription>
                Enter the faculty member's information below to add them to the
                system.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name" className="text-right">
                  Full Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Dr. John Smith"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="email" className="text-right">
                  Email
                </label>
                <Input
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.smith@example.com"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="department" className="text-right">
                  Department
                </label>
                <Input
                  id="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="Computer Science"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="position" className="text-right">
                  Position
                </label>
                <Input
                  id="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="Professor"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="joinedYear" className="text-right">
                  Joined Year
                </label>
                <Input
                  id="joinedYear"
                  value={formData.joinedYear}
                  onChange={handleChange}
                  placeholder="2020"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="courses" className="text-right">
                  Courses
                </label>
                <Input
                  id="courses"
                  value={formData.courses}
                  onChange={handleChange}
                  placeholder="CS101, CS202"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSubmit}>
                Save Faculty
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search faculty..."
            className="pl-8"
          />
        </div>
        <Button variant="outline">Filter</Button>
      </div>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex items-center">
            <Users className="mr-2 h-5 w-5" />
            Faculty Directory
          </CardTitle>
          <CardDescription>View and manage all faculty members</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Courses</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {facultyList?.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className="font-medium">{member.id}</TableCell>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.department}</TableCell>
                  <TableCell>{member.position}</TableCell>
                  <TableCell>{member.joinedYear}</TableCell>
                  <TableCell>{member.courses}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
