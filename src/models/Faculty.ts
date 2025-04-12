import { mongoose } from '@/lib/db';
import { Schema, models, model } from 'mongoose';

export interface IFaculty {
  _id?: string;
  id: string;
  name: string;
  email: string;
  department: string;
  position: string;
  joinedYear: string;
  courses: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const FacultySchema = new Schema<IFaculty>(
  {
    id: {
      type: String,
      required: [true, 'Please provide a faculty ID'],
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
    department: {
      type: String,
      required: [true, 'Please provide a department'],
    },
    position: {
      type: String,
      required: [true, 'Please provide a position'],
    },
    joinedYear: {
      type: String,
      required: [true, 'Please provide a joined year'],
    },
    courses: {
      type: String,
      required: [true, 'Please provide courses'],
    },
  },
  {
    timestamps: true,
  }
);

export default models.Faculty || model<IFaculty>('Faculty', FacultySchema);
