import { connectToDatabase } from '../lib/db';
import Student from '../models/Student';
import Faculty from '../models/Faculty';
import Course from '../models/Course';
import Department from '../models/Department';

// Sample data for Students
const students = [
  {
    id: 'STU001',
    name: 'John Smith',
    email: 'john.smith@example.com',
    major: 'Computer Science',
    year: 'Senior',
    gpa: '3.75',
  },
  {
    id: 'STU002',
    name: 'Emily Johnson',
    email: 'emily.johnson@example.com',
    major: 'Biology',
    year: 'Junior',
    gpa: '3.92',
  },
  {
    id: 'STU003',
    name: 'Michael Williams',
    email: 'michael.williams@example.com',
    major: 'Business Administration',
    year: 'Sophomore',
    gpa: '3.45',
  },
  {
    id: 'STU004',
    name: 'Jessica Brown',
    email: 'jessica.brown@example.com',
    major: 'Psychology',
    year: 'Freshman',
    gpa: '3.80',
  },
  {
    id: 'STU005',
    name: 'David Miller',
    email: 'david.miller@example.com',
    major: 'Electrical Engineering',
    year: 'Senior',
    gpa: '3.67',
  },
];

// Sample data for Faculty
const faculty = [
  {
    id: 'FAC001',
    name: 'Dr. Achal Kaushik',
    email: 'robert..com',
    department: 'Computer Science',
    position: 'Professor',
    joinedYear: '2010',
    courses: 'CS101, CS405',
  },
  {
    id: 'FAC002',
    name: 'Dr. Mary Williams',
    email: 'mary.williams@example.com',
    department: 'Biology',
    position: 'Associate Professor',
    joinedYear: '2015',
    courses: 'BIO201, BIO330',
  },
  {
    id: 'FAC003',
    name: 'Dr. James Brown',
    email: 'james.brown@example.com',
    department: 'Mathematics',
    position: 'Assistant Professor',
    joinedYear: '2018',
    courses: 'MTH101, MTH202',
  },
];

// Sample data for Courses
const courses = [
  {
    id: 'CS101',
    name: 'Introduction to Computer Science',
    instructor: 'Dr. Robert Johnson',
    department: 'Computer Science',
    credits: '3',
    students: '45',
    semester: 'Fall 2024',
  },
  {
    id: 'BIO201',
    name: 'Molecular Biology',
    instructor: 'Dr. Mary Williams',
    department: 'Biology',
    credits: '4',
    students: '32',
    semester: 'Fall 2024',
  },
  {
    id: 'MTH101',
    name: 'Calculus I',
    instructor: 'Dr. James Brown',
    department: 'Mathematics',
    credits: '4',
    students: '56',
    semester: 'Fall 2024',
  },
];

// Sample data for Departments
const departments = [
  {
    id: 'DEP001',
    name: 'Computer Science',
    head: 'Dr. Robert Johnson',
    faculty: '18',
    students: '452',
    courses: '38',
    budget: '$2.8M',
  },
  {
    id: 'DEP002',
    name: 'Biology',
    head: 'Dr. Mary Williams',
    faculty: '22',
    students: '378',
    courses: '42',
    budget: '$3.2M',
  },
  {
    id: 'DEP003',
    name: 'Mathematics',
    head: 'Dr. James Brown',
    faculty: '15',
    students: '286',
    courses: '32',
    budget: '$1.9M',
  },
];

async function seedDatabase() {
  try {
    console.log('Connecting to MongoDB...');
    await connectToDatabase();

    console.log('Clearing existing data...');
    await Student.deleteMany({});
    await Faculty.deleteMany({});
    await Course.deleteMany({});
    await Department.deleteMany({});

    console.log('Seeding students...');
    await Student.insertMany(students);

    console.log('Seeding faculty...');
    await Faculty.insertMany(faculty);

    console.log('Seeding courses...');
    await Course.insertMany(courses);

    console.log('Seeding departments...');
    await Department.insertMany(departments);

    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
