import { mongoose } from '@/lib/db';
import { Schema, models, model } from 'mongoose';

export interface IDepartment {
  _id?: string;
  id: string;
  name: string;
  head: string;
  faculty: string;
  students: string;
  courses: string;
  budget: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const DepartmentSchema = new Schema<IDepartment>(
  {
    id: {
      type: String,
      required: [true, 'Please provide a department ID'],
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      unique: true,
    },
    head: {
      type: String,
      required: [true, 'Please provide a department head'],
    },
    faculty: {
      type: String,
      required: [true, 'Please provide faculty count'],
    },
    students: {
      type: String,
      required: [true, 'Please provide student count'],
    },
    courses: {
      type: String,
      required: [true, 'Please provide course count'],
    },
    budget: {
      type: String,
      required: [true, 'Please provide a budget'],
    },
  },
  {
    timestamps: true,
  }
);

export default models.Department || model<IDepartment>('Department', DepartmentSchema);
