type Course = { 
  id: number; 
  code: string; 
  title: string; 
  credits: number; 
  isOpen: boolean; 
}; 

const courses: Course[] = [ 
  { 
    id: 1, 
    code: "10301231", 
    title: "Web Technology", 
    credits: 3, 
    isOpen: true, 
  }, 
  { 
    id: 2, 
    code: "10301232", 
    title: "Database Systems", 
    credits: 3, 
    isOpen: false, 
  }, 
  { 
    id: 3, 
    code: "10301233", 
    title: "Data Structures & Algorithms", 
    credits: 3, 
    isOpen: true, 
  }, 
  { 
    id: 4, 
    code: "10301234", 
    title: "Software Engineering", 
    credits: 3, 
    isOpen: true, 
  }, 
  { 
    id: 5, 
    code: "10301235", 
    title: "Computer Networks", 
    credits: 3, 
    isOpen: false, 
  }, 
]; 

export default function CoursesPage() {
  return (
    <main className="page p-8">
      <h1 className="text-2xl font-bold mb-4">รายวิชาทั้งหมด</h1>

      <section className="courseGrid space-y-4">
        {courses.map((course) => (
          <article key={course.id} className="courseCard p-4 border rounded-lg shadow-sm">
            <h2 className="text-lg font-bold">{course.title}</h2>
            <p>รหัสวิชา: {course.code}</p>
            <p>{course.credits} หน่วยกิต</p>
            <p className={course.isOpen ? "text-green-600" : "text-red-600"}>
              {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}