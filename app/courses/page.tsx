import CourseCard from "../components/CourseCard";
import { courses } from "../data/coursesdata";

export default function CoursesPage() {
  return (
    <main>
      <h1>รายวิชาทั้งหมด</h1>

      <section className="course-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
    </main>
  );
}