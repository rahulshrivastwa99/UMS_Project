import { connectToDatabase } from "@/lib/db";
import Faculty, { IFaculty } from "@/models/Faculty";
import { type NextRequest, NextResponse } from "next/server";

// Get all faculty members
export async function GET() {
  try {
    await connectToDatabase();
    const facultyList = await Faculty.find({}).sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, data: facultyList },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching faculty:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch faculty" },
      { status: 500 }
    );
  }
}

// Create a new faculty member
export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const body = await request.json();

    // Generate a faculty ID if not provided
    if (!body.id) {
      const count = await Faculty.countDocuments();
      body.id = `FAC${String(count + 1).padStart(3, "0")}`;
    }

    const faculty = await Faculty.create(body);

    return NextResponse.json({ success: true, data: faculty }, { status: 201 });
  } catch (error: any) {
    console.error("Error creating faculty member:", error);

    if (error.code === 11000) {
      return NextResponse.json(
        {
          success: false,
          error: "Faculty member with this ID or email already exists",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to create faculty member",
      },
      { status: 500 }
    );
  }
}
