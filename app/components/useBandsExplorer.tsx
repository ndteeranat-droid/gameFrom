import { useState, type ChangeEvent } from "react";
import type { Band } from "../types/band";

export function useBandsExplorer(initialBands: Band[]) {
  // State สำหรับเก็บข้อความคำค้นหาจากช่อง
  const [keyword, setKeyword] = useState("");

  //สำหรับเก็บรายการ ID ของวงดนตรีที่ผู้ใช้กดติดตาม
  const [followedIds, setFollowedIds] = useState<number[]>([]);

  //สำหรับเก็บรูปแบบการเรียงลำดับข้อมูล
  const [sortBy, setSortBy] = useState<"name" | "year">("name");

  //เก็บจำนวน
  const [likesMap, setLikesMap] = useState<Record<number, number>>(() => {
    return initialBands.reduce((acc, band) => {
      acc[band.id] = band.likes ?? 0;
      return acc;
    }, {} as Record<number, number>);
  });

  //อัปเดตค่า
  function handleKeywordChange(e: ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value);
  }

  //สลับสถานะ
  function handleToggleFollow(id: number) {
    setFollowedIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  }

  //กดเพิ่ม
  function handleLike(id: number) {
    setLikesMap((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  }

  
  function handleReset() {
    setKeyword("");
    setSortBy("name");
  }

  //คำนวณจำนวนวงดนตรีทั้งหมดที่กำลังติดตามอยู่จากขนาดของ Array
  const followedCount = followedIds.length;

  
  const searchText = keyword.trim().toLowerCase();

  // กรองรายการวงดนตรีที่ชื่อวงมีข้อความตรงกับคำค้นหา
  const filteredBands = initialBands.filter((band) =>
    band.name.toLowerCase().includes(searchText)
  );

  // นำรายการวงดนตรีที่ผ่านการกรองมาจัดเรียง
  const sortedBands = [...filteredBands].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return (a.formedYear ?? 0) - (b.formedYear ?? 0);
  });

  // คืนค่า ให้ Component นำไปใช้งาน
  return {
    keyword,
    sortBy,
    followedCount,
    followedIds,
    likesMap,
    sortedBands,
    setSortBy,
    handleKeywordChange,
    handleToggleFollow,
    handleLike,
    handleReset,
  };
}