import { connectToDatabase } from "@/lib/db";
import Course, { ICourse } from "@/models/Course";
import { type NextRequest, NextResponse } from "next/server";

// Get all courses
export async function GET() {
  try {
    await connectToDatabase();
    const courses = await Course.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: courses }, { status: 200 });
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}

// Create a new course
export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const body = await request.json();

    const course = await Course.create(body);

    return NextResponse.json({ success: true, data: course }, { status: 201 });
  } catch (error: any) {
    console.error("Error creating course:", error);

    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, error: "Course with this ID already exists" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: error.message || "Failed to create course" },
      { status: 500 }
    );
  }
}
