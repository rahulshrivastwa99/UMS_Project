import { connectToDatabase } from "@/lib/db";
import Student from "@/models/Student";
import { type NextRequest, NextResponse } from "next/server";

// Get a specific student
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const studentId = params.id;

    const student = await Student.findOne({ id: studentId });

    if (!student) {
      return NextResponse.json(
        { success: false, error: "Student not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: student }, { status: 200 });
  } catch (error) {
    console.error(`Error fetching student ${params.id}:`, error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch student" },
      { status: 500 }
    );
  }
}

// Update a student
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const studentId = params.id;
    const body = await request.json();

    // Remove the id field from the update if it's included (should not change)
    const { id, _id, ...updateData } = body;

    const student = await Student.findOneAndUpdate(
      { id: studentId },
      updateData,
      { new: true, runValidators: true }
    );

    if (!student) {
      return NextResponse.json(
        { success: false, error: "Student not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: student }, { status: 200 });
  } catch (error: any) {
    console.error(`Error updating student ${params.id}:`, error);

    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, error: "Email already exists for another student" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: error.message || "Failed to update student" },
      { status: 500 }
    );
  }
}

// Delete a student
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const studentId = params.id;

    const student = await Student.findOneAndDelete({ id: studentId });

    if (!student) {
      return NextResponse.json(
        { success: false, error: "Student not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Student deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(`Error deleting student ${params.id}:`, error);
    return NextResponse.json(
      { success: false, error: "Failed to delete student" },
      { status: 500 }
    );
  }
}
