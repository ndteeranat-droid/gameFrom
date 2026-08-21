export default function AboutPage() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">เกี่ยวกับเรา</h1>
      <p>
        ระบบ Student Course Hub
      </p>
      
      <section className="p-4 border rounded-lg bg-gray-50 space-y-2">
        <h2 className="text-lg font-semibold">ข้อมูลระบบ</h2>
        <p><strong>Framework:</strong> Next.js (App Router)</p>
        <p><strong>Language:</strong> TypeScript</p>
      </section>
    </main>
  );
}