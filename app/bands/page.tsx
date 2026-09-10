
"use client";

import { bandsData } from "../data/bandsData";
// ปรับ path ให้ตรงกับตำแหน่งที่วางไฟล์ useBandsExplorer ไว้
import { useBandsExplorer } from "../components/useBandsExplorer"; 
import BandCard from "../components/BandCard";

export default function BandsPage() {
  const {
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
  } = useBandsExplorer(bandsData);

  return (
    <main className="p-8 space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">วงดนตรีที่ชื่นชอบ</h1>
          <p className="text-slate-600 mt-1">
            วงดนตรีที่ติดตามอยู่: <span className="font-bold text-blue-600">{followedCount}</span> วง
          </p>
        </div>

        {(keyword !== "" || sortBy !== "name") && (
          <button
            type="button"
            onClick={handleReset}
            className="text-sm text-rose-600 underline hover:text-rose-800"
          >
            ล้างเงื่อนไขทั้งหมด
          </button>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="search"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="ค้นหาชื่อวงดนตรี..."
          className="flex-1 p-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "name" | "year")}
          className="p-2.5 border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="name">เรียงตามชื่อวง (A-Z)</option>
          <option value="year">เรียงตามปีที่ก่อตั้ง</option>
        </select>
      </div>

      {sortedBands.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-slate-300 rounded-2xl bg-slate-50">
          <p className="text-slate-500 font-medium">ไม่พบวงดนตรีที่ตรงกับเงื่อนไขการค้นหา</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedBands.map((band) => (
            <BandCard
              key={band.id}
              band={band}
              isFollowing={followedIds.includes(band.id)}
              likeCount={likesMap[band.id] ?? band.likes ?? 0}
              onToggleFollow={handleToggleFollow}
              onLike={handleLike}
            />
          ))}
        </div>
      )}
    </main>
  );
}