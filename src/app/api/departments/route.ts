import { connectToDatabase } from "@/lib/db";
import Department, { IDepartment } from "@/models/Department";
import { type NextRequest, NextResponse } from "next/server";

// Get all departments
export async function GET() {
  try {
    await connectToDatabase();
    const departments = await Department.find({}).sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, data: departments },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching departments:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch departments" },
      { status: 500 }
    );
  }
}

// Create a new department
export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const body = await request.json();

    // Generate a department ID if not provided
    if (!body.id) {
      const count = await Department.countDocuments();
      body.id = `DEP${String(count + 1).padStart(3, "0")}`;
    }

    const department = await Department.create(body);

    return NextResponse.json(
      { success: true, data: department },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating department:", error);

    if (error.code === 11000) {
      return NextResponse.json(
        {
          success: false,
          error: "Department with this ID or name already exists",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: error.message || "Failed to create department" },
      { status: 500 }
    );
  }
}
