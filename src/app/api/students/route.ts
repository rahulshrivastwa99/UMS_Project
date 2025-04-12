import { connectToDatabase } from "@/lib/db";
import Student, { IStudent } from "@/models/Student";
import { type NextRequest, NextResponse } from "next/server";

// Get all students
export async function GET() {
  try {
    await connectToDatabase();
    const students = await Student.find({}).sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, data: students },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching students:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch students" },
      { status: 500 }
    );
  }
}

// Create a new student
export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const body = await request.json();

    // Generate a student ID if not provided
    if (!body.id) {
      const count = await Student.countDocuments();
      body.id = `STU${String(count + 1).padStart(3, "0")}`;
    }

    const student = await Student.create(body);

    return NextResponse.json({ success: true, data: student }, { status: 201 });
  } catch (error: any) {
    console.error("Error creating student:", error);

    if (error.code === 11000) {
      return NextResponse.json(
        {
          success: false,
          error: "Student with this ID or email already exists",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: error.message || "Failed to create student" },
      { status: 500 }
    );
  }
}
