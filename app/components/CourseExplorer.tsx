"use client";
import { useState, type ChangeEvent } from "react";
import type { Course } from "../types/course";
import CourseCard from "../components/CourseCard";

type CourseExplorerProps = {
  courses: Course[];
};

export default function CourseExplorer({ courses }: CourseExplorerProps) {
  // 1. แก้ไขค่าเริ่มต้นไม่ให้ติดเว้นวรรค
  const [keyword, setKeyword] = useState("");
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }

  const searchText = keyword.trim().toLowerCase();

  const visibleCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchText) ||
      course.code.toLowerCase().includes(searchText)
  );

  function handleToggleFavorite(id: number) {
    setFavoriteIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((favoriteId) => favoriteId !== id)
        : [...prevIds, id]
    );
  }

  return (
    <div className="space-y-6">
      {/* ตกแต่งช่องค้นหาด้วย Tailwind CSS */}
      <input
        type="search"
        aria-label="ค้นหารายวิชา"
        value={keyword}
        onChange={handleKeywordChange}
        placeholder="ค้นหาชื่อวิชาหรือรหัสวิชา..."
        className="w-full md:w-1/2 p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {visibleCourses.length === 0 ? (
        <p className="text-gray-500 py-4">ไม่พบรายวิชาที่ตรงกับเงื่อนไข</p>
      ) : (
        /* 2. จัด Grid และส่ง Props ให้ CourseCard ครบถ้วน */
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              isFavorite={favoriteIds.includes(course.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </section>
      )}
    </div>
  );
}