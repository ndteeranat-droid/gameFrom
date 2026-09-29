'use client';

import CourseForm from "../components/CourseForm";

export default function TestPage() {
  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">ทดสอบฟอร์ม CourseForm</h1>
      <CourseForm
        onSave={(draft) => console.log("บันทึกข้อมูล:", draft)}
        onCancel={() => console.log("ยกเลิก")}
      />
    </main>
  );
}