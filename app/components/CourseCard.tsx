export type Course = {
  id: number;
  code: string;
  title: string;
  credits: number;
  isOpen: boolean;
};

type CourseCardProps = {
  course: Course;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
};

export default function CourseCard({ 
  course, 
  isFavorite, 
  onToggleFavorite, 
}: CourseCardProps) { 
  return (
    <article className="border border-gray-200 p-5 rounded-xl shadow-sm bg-white hover:shadow-md transition flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-bold text-gray-800">{course.title}</h2>
        <p className="text-sm text-gray-600 mt-1">รหัสวิชา: {course.code}</p>
        <p className="text-sm text-gray-600">{course.credits} หน่วยกิต</p>
        <p
          className={`text-sm font-semibold mt-2 ${
            course.isOpen ? "text-green-600" : "text-red-500"
          }`}
        >
          {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
        </p>
      </div>

      <button
        type="button"
        aria-pressed={isFavorite}
        onClick={() => onToggleFavorite(course.id)}
        className={`mt-4 w-full py-2 px-4 rounded-lg font-medium text-sm transition ${
          isFavorite
            ? "bg-amber-100 text-amber-700 border border-amber-300 hover:bg-amber-200"
            : "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200"
        }`}
      >
        {isFavorite ? "★ อยู่ในรายการโปรด" : "☆ เพิ่มเป็นรายการโปรด"}
      </button>
    </article>
  );
}