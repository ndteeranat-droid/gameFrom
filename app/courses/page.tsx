"use client";

import CourseExplorer from "../components/CourseExplorer";
import { courses } from "../data/coursesdata";

export default function CoursesPage() {
  return (
    <CourseExplorer initialCourses={courses} />
  );
}