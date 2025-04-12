import { mongoose } from '@/lib/db';
import { Schema, models, model } from 'mongoose';

export interface ICourse {
  _id?: string;
  id: string;
  name: string;
  instructor: string;
  department: string;
  credits: string;
  students: string;
  semester: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const CourseSchema = new Schema<ICourse>(
  {
    id: {
      type: String,
      required: [true, 'Please provide a course ID'],
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'Please provide a name'],
    },
    instructor: {
      type: String,
      required: [true, 'Please provide an instructor'],
    },
    department: {
      type: String,
      required: [true, 'Please provide a department'],
    },
    credits: {
      type: String,
      required: [true, 'Please provide credits'],
    },
    students: {
      type: String,
      required: [true, 'Please provide student count'],
    },
    semester: {
      type: String,
      required: [true, 'Please provide a semester'],
    },
  },
  {
    timestamps: true,
  }
);

export default models.Course || model<ICourse>('Course', CourseSchema);
