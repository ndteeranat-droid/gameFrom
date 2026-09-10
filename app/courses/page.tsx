"use client";

import CourseExplorer from "../components/CourseExplorer";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/coursesdata";



export default function CoursesPage() {
  return (
    <CourseExplorer courses={courses} />
    /*<main className="p-6">
      
      <div className="flex gap-4 mb-4">
      
      </div>
      
      <h1 className="text-2xl font-bold my-4">รายวิชาทั้งหมด</h1>

      <section className="course-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
    </main>*/
  );
}

  