import Link from "next/link";
import type { Course } from "../types/course";

type CourseCardProps = {
  course: Course;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function CourseCard({
  course,
  isFavorite = false,
  onToggleFavorite,
  onEdit,
  onDelete,
}: CourseCardProps) {
  return (
    <article className="border border-gray-200 p-5 rounded-xl shadow-sm bg-white hover:shadow-md transition flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-bold text-gray-800 hover:text-blue-600 transition">
          <Link href={`/courses/${course.id}`}>{course.name}</Link>
        </h2>
        <p className="text-sm text-gray-600 mt-1">รหัสวิชา: {course.code}</p>
        <p className="text-sm text-gray-600">{course.credit} หน่วยกิต</p>
        {course.instructor && (
          <p className="text-sm text-gray-600">ผู้สอน: {course.instructor}</p>
        )}
      </div>

      <div className="mt-4 space-y-2">
        {onToggleFavorite && (
          <button
            type="button"
            aria-pressed={isFavorite}
            onClick={() => onToggleFavorite(course.id)}
            className={`w-full py-2 px-4 rounded-lg font-medium text-sm transition ${
              isFavorite
                ? "bg-amber-100 text-amber-700 border border-amber-300 hover:bg-amber-200"
                : "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200"
            }`}
          >
            {isFavorite ? "★ อยู่ในรายการโปรด" : "☆ เพิ่มเป็นรายการโปรด"}
          </button>
        )}

        {(onEdit || onDelete) && (
          <div className="flex gap-2">
            {onEdit && (
              <button
                type="button"
                onClick={onEdit}
                className="flex-1 py-1.5 px-3 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition"
              >
                แก้ไข
              </button>
            )}
            {onDelete && (
              <button
                type="button"
                onClick={onDelete}
                className="flex-1 py-1.5 px-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition"
              >
                ลบ
              </button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}