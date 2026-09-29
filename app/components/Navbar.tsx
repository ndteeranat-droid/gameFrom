import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="เมนูหลัก">
      <ul className="navList">
        <li>
          <Link className="navLink" href="/">
            หน้าแรก
          </Link>
        </li>
        <li>
          <Link className="navLink" href="/courses">
            รายวิชา
          </Link>
        </li>
        <li>
          <Link className="navLink" href="/about">
            เกี่ยวกับ
          </Link>
        </li>
        <li>
          <Link href="/bands" className="navLink">
            วงดนตรีที่ชื่นชอบ
          </Link>
        </li>
        <li>
          <Link href="/games" className="navLink">
            เกม
          </Link>
        </li>
      </ul>
    </nav>
  );
}