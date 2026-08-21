import Image from "next/image";

// กำหนด Type โครงสร้างข้อมูลรายวิชา
type Course = { 
  id: number; 
  code: string; 
  title: string; 
  credits: number; 
  isOpen: boolean; 
}; 

export default function Home() {
  // 1. ชนิดข้อมูลพื้นฐาน (Primitive Types)
  const siteName: string = "Student Course Hub"; 
  const courseCount: number = 5; 
  const isOpen: boolean = true;
  
  // 2. ข้อมูลแบบ Array (Array Type)
  const topics: string[] = [
    "HTML",
    "CSS",
    "TypeScript",
    "Next.js"
  ];

  // 3. ข้อมูลแบบ Object รายวิชาเดี่ยว
  const course: Course = { 
    id: 1, 
    code: "10301231", 
    title: "Web Technology", 
    credits: 3, 
    isOpen: true, 
  }; 

  // 4. ข้อมูลแบบ Array ของ Object (รวมทั้งหมด 5 รายวิชา id ไม่ซ้ำกัน)
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

  return (
    <main className="p-8 space-y-6"> 
      {/* ส่วนหัวแสดงชื่อเว็บไซต์และสถานะระบบ */}
      <header>
        <h1 className="text-3xl font-bold">{siteName}</h1> 
        <p className="mt-2">จำนวนรายวิชา: {courseCount}</p> 
        <p>สถานะระบบ: {isOpen ? "เปิดใช้งาน" : "ปิดใช้งาน"}</p>
      </header>

      {/* ส่วนแสดงรายการหัวข้อเรียนรู้ด้วย .map() */}
      <section>
        <h2 className="text-xl font-semibold mb-2">หัวข้อที่เปิดสอน</h2>
        <ul className="list-disc list-inside"> 
          {topics.map((topic) => ( 
            <li key={topic}>{topic}</li> 
          ))} 
        </ul>
      </section>

      {/* ส่วนแสดงรายการวิชาทั้งหมดด้วย .map() */}
      <section className="courseGrid space-y-4">
        <h2 className="text-xl font-semibold">รายการวิชาทั้งหมด</h2>
        {courses.map((item) => (
          <article key={item.id} className="courseCard p-4 border rounded-lg shadow-sm"> 
            <h3 className="text-lg font-bold">{item.title}</h3> 
            <p>รหัสวิชา: {item.code}</p> 
            <p>{item.credits} หน่วยกิต</p> 
            <p className={item.isOpen ? "text-green-600" : "text-red-600"}>
              {item.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
            </p> 
          </article>
        ))}
      </section>
    </main> 
  );
}
