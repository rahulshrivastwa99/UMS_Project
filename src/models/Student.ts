import { mongoose } from '@/lib/db';
import { Schema, models, model } from 'mongoose';

export interface IStudent {
  _id?: string;
  id: string;
  name: string;
  email: string;
  major: string;
  year: string;
  gpa: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const StudentSchema = new Schema<IStudent>(
  {
    id: {
      type: String,
      required: [true, 'Please provide a student ID'],
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'Please provide a name'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
    },
    major: {
      type: String,
      required: [true, 'Please provide a major'],
    },
    year: {
      type: String,
      required: [true, 'Please provide a year'],
    },
    gpa: {
      type: String,
      required: [true, 'Please provide a GPA'],
    },
  },
  {
    timestamps: true,
  }
);

export default models.Student || model<IStudent>('Student', StudentSchema);
