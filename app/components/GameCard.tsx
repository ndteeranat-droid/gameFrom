"use client";


import Link from 'next/link';
import { Game, GameStatus } from '../data/gamesData';

interface GameCardProps {
  game: Game;
  onEdit: (game: Game) => void;
  onDeleteReq: (id: string) => void;
  onQuickStatusChange: (id: string, status: GameStatus) => void;
}

export default function GameCard({
  game,
  onEdit,
  onDeleteReq,
  onQuickStatusChange,
}: GameCardProps) {
  return (
    <div className="bg-white border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:border-slate-300 transition">
      <div>
        <div className="flex items-center gap-2">
          <Link
            href={`/games/${game.id}`}
            className="font-bold text-lg text-slate-800 hover:text-blue-600 hover:underline"
          >
            {game.title}
          </Link>
          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
            {game.platform}
          </span>
        </div>
        <p className="text-sm text-slate-500 mt-1"> {game.hours} ชั่วโมง</p>
      </div>

      <div className="flex items-center gap-3">
        {/* เปลี่ยนสถานะได้โดยตรงจากรายการ */}
        <select
          value={game.status}
          onChange={(e) => onQuickStatusChange(game.id, e.target.value as GameStatus)}
          className={`text-xs font-semibold px-2.5 py-1.5 rounded-full border cursor-pointer focus:outline-none ${
            game.status === 'เล่นจบแล้ว'
              ? 'bg-green-50 text-green-700 border-green-200'
              : game.status === 'กำลังเล่น'
              ? 'bg-amber-50 text-amber-700 border-amber-200'
              : 'bg-slate-50 text-slate-700 border-slate-200'
          }`}
        >
          <option value="ยังไม่เริ่ม">ยังไม่เริ่ม</option>
          <option value="กำลังเล่น">กำลังเล่น</option>
          <option value="เล่นจบแล้ว">เล่นจบแล้ว</option>
        </select>

        <button
          onClick={() => onEdit(game)}
          className="text-xs px-3 py-1.5 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50"
        >
          แก้ไข
        </button>
        <button
          onClick={() => onDeleteReq(game.id)}
          className="text-xs px-3 py-1.5 border border-red-200 text-red-600 rounded-lg hover:bg-red-50"
        >
          ลบ
        </button>
      </div>
    </div>
  );
}