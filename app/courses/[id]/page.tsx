import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courses } from "../../data/coursesdata";

type CoursePageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { id } = await params;
  const course = courses.find((item) => item.id === id);

  return {
    title: course ? course.name : "ไม่พบรายวิชา",
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = courses.find((item) => item.id === id);

  if (!course) {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <h1 className="text-2xl font-bold text-gray-800">{course.name}</h1>
      <div className="mt-4 space-y-2 text-gray-600">
        <p>รหัสวิชา {course.code}</p>
        <p>หน่วยกิต {course.credit}</p>
        <p>ผู้สอน {course.instructor}</p>
      </div>
    </article>
  );
}