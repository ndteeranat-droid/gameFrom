import Image from "next/image";
import type { Band } from "../types/band";

interface BandCardProps {
  band: Band;
  isFollowing: boolean;
  likeCount: number;
  onToggleFollow: (id: number) => void;
  onLike: (id: number) => void;
}

export default function BandCard({
  band,
  isFollowing,
  likeCount,
  onToggleFollow,
  onLike,
}: BandCardProps) {

  const memberCount = band.members.length;

  return (
    <div className="courseCard flex flex-col w-full max-w-sm p-4 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
      {}
      <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-sm">
        <Image
          src={band.image}
          alt={band.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300 ease-out"
        />
      </div>

      {}
      <div className="space-y-1.5 mt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {band.name}
          </h2>
          {band.formedYear && (
            <span className="text-xs text-slate-400">
              ปี {band.formedYear}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
            {band.genre}
          </span>
        </div>
      </div>

      {}
      <div className="pt-3 mt-3 border-t border-slate-100 flex-1">
        <div className="flex justify-between items-center mb-3">
          <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
            สมาชิกในวง
          </p>
          <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
            {memberCount} คน
          </span>
        </div>

        <ul className="flex flex-col gap-2.5">
          {band.members.map((member) => (
            <li
              key={member.id}
              className="flex items-center gap-3.5 p-1 rounded-lg hover:bg-slate-50 transition-colors"
            >
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover shrink-0 w-10 h-10"
                />
              ) : (
                <div className="w-10 h-10 rounded-full shrink-0 bg-slate-200 flex items-center justify-center text-slate-400 text-xs font-medium">
                  N/A
                </div>
              )}
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-semibold text-slate-800 truncate">
                  {member.name}
                </span>
                <span className="text-xs text-slate-500">
                  {member.role}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {}
      <div className="pt-4 mt-3 border-t border-slate-100 space-y-2">
        {}
        <button
          type="button"
          onClick={() => onLike(band.id)}
          className="w-full py-2 px-3 bg-rose-50 text-rose-600 border border-rose-200 rounded-lg hover:bg-rose-100 font-medium text-sm flex justify-center items-center gap-2 transition"
        >
           Like ({likeCount})
        </button>

        {}
        <button
          type="button"
          onClick={() => onToggleFollow(band.id)}
          className={`w-full py-2 px-3 rounded-lg font-medium text-sm transition ${
            isFollowing
              ? "bg-slate-200 text-slate-800 hover:bg-slate-300"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {isFollowing ? "✓ กำลังติดตาม" : "+ ติดตาม"}
        </button>
      </div>
    </div>
  );
}