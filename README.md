# University Management System

A comprehensive web application for managing university operations including students, faculty, courses, and departments.

## Features

- **Dashboard**: Overview of university statistics and recent activities
- **Students Management**: Add, edit, view, and delete student records
- **Faculty Management**: Manage faculty members and their information
- **Courses Management**: Track courses, instructors, and enrollments
- **Departments Management**: Organize departments and their resources

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: (Planned for future implementation)
- **Deployment**: Netlify/Vercel

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- Bun (or npm/yarn)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/university-management-system.git
cd university-management-system
```

2. Install dependencies
```bash
bun install
```

3. Create a `.env.local` file with your MongoDB connection string
```
MONGODB_URI=mongodb://localhost:27017/university-management
```

4. Seed the database with initial data
```bash
bun run seed
```

5. Start the development server
```bash
bun run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
university-management-system/
├── public/           # Static assets
├── src/
│   ├── app/          # Next.js app directory
│   │   ├── api/      # API routes
│   │   ├── dashboard/ # Dashboard pages
│   ├── components/   # React components
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utility functions
│   ├── models/       # Mongoose models
│   └── scripts/      # Utility scripts
└── .env.local        # Environment variables
```

## API Endpoints

- `GET /api/students` - Get all students
- `POST /api/students` - Create a new student
- `GET /api/students/:id` - Get a student by ID
- `PUT /api/students/:id` - Update a student
- `DELETE /api/students/:id` - Delete a student

Similar endpoints exist for faculty, courses, and departments.

## Future Enhancements

- User authentication and authorization
- Student portal
- Faculty portal
- Course registration system
- Grading system
- Financial management
- Reporting and analytics

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
