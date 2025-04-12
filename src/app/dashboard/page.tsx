"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, GraduationCap, Loader2, Users2, Building2 } from "lucide-react"
import { useFetch } from "@/hooks/useFetch";
import type { IStudent } from "@/models/Student";
import type { IFaculty } from "@/models/Faculty";
import type { ICourse } from "@/models/Course";
import type { IDepartment } from "@/models/Department";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const { data: students, isLoading: studentsLoading } = useFetch<IStudent[]>('/api/students');
  const { data: faculty, isLoading: facultyLoading } = useFetch<IFaculty[]>('/api/faculty');
  const { data: courses, isLoading: coursesLoading } = useFetch<ICourse[]>('/api/courses');
  const { data: departments, isLoading: departmentsLoading } = useFetch<IDepartment[]>('/api/departments');

  const isLoading = studentsLoading || facultyLoading || coursesLoading || departmentsLoading;

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Students"
          value={students?.length.toString() || "0"}
          description="Active students"
          icon={<GraduationCap className="h-5 w-5 text-muted-foreground" />}
          isLoading={isLoading}
        />
        <DashboardCard
          title="Total Faculty"
          value={faculty?.length.toString() || "0"}
          description="Professors and staff"
          icon={<Users2 className="h-5 w-5 text-muted-foreground" />}
          isLoading={isLoading}
        />
        <DashboardCard
          title="Courses"
          value={courses?.length.toString() || "0"}
          description="Available courses"
          icon={<BookOpen className="h-5 w-5 text-muted-foreground" />}
          isLoading={isLoading}
        />
        <DashboardCard
          title="Departments"
          value={departments?.length.toString() || "0"}
          description="Academic departments"
          icon={<Building2 className="h-5 w-5 text-muted-foreground" />}
          isLoading={isLoading}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {isLoading ? (
                <div className="flex justify-center py-4">
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                </div>
              ) : students && students.length > 0 ? (
                <>
                  {students.slice(0, 4).map((student, index) => (
                    <ActivityItem
                      key={student.id}
                      title="New Student Registration"
                      description={`${student.name} registered for ${student.major}`}
                      timestamp={`${index + 1} ${index === 0 ? 'hour' : 'hours'} ago`}
                    />
                  ))}
                </>
              ) : (
                <p className="text-center text-muted-foreground py-4">No recent activity</p>
              )}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Scheduled events in the next 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <EventItem
                title="End of Semester Examination"
                description="Final examinations for all courses"
                date="June 15 - June 30, 2024"
              />
              <EventItem
                title="Faculty Development Workshop"
                description="Workshop on advanced teaching methodologies"
                date="May 20, 2024"
              />
              <EventItem
                title="New Student Orientation"
                description="Orientation program for incoming students"
                date="May 25, 2024"
              />
              <EventItem
                title="Research Symposium"
                description="Annual research presentation event"
                date="June 5, 2024"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function DashboardCard({
  title,
  value,
  description,
  icon,
  isLoading,
}: {
  title: string
  value: string
  description: string
  icon: React.ReactNode
  isLoading?: boolean
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin inline mr-2" />
          ) : value}
        </div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function ActivityItem({
  title,
  description,
  timestamp,
}: {
  title: string
  description: string
  timestamp: string
}) {
  return (
    <div className="flex items-center">
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-xs text-muted-foreground">{timestamp}</p>
      </div>
    </div>
  )
}

function EventItem({
  title,
  description,
  date,
}: {
  title: string
  description: string
  date: string
}) {
  return (
    <div className="flex items-center">
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-xs font-medium text-primary">{date}</p>
      </div>
    </div>
  )
}
