"use client";

import React, { useState } from 'react';
import { Game, GameFormData, GameStatus } from '../data/gamesData';
import GameForm from './GameForm';
import GameCard from './GameCard';

interface GameExplorerProps {
  initialGames: Game[];
}

export default function GameExplorer({ initialGames }: GameExplorerProps) {
    // States
  const [games, setGames] = useState<Game[]>(initialGames);
  const [editingGame, setEditingGame] = useState<Game | null>(null);


  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ทั้งหมด');
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  // Derived State ชั่วโมงรวม
  const totalUnstartedHours = games
    .filter((g) => g.status === 'ยังไม่เริ่ม')
    .reduce((sum, g) => sum + g.hours, 0);

  //กรองเกม
  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'ทั้งหมด' || game.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
//  โหมดแก้ไข
  const handleFormSubmit = (data: GameFormData) => {
    if (editingGame) {
      setGames((prev) =>
        prev.map((g) =>
          g.id === editingGame.id
            ? { ...g, title: data.title, platform: data.platform, hours: Number(data.hours), status: data.status }
            : g
        )
      );
      setEditingGame(null);
    } else {
      //  โหมดเพิ่ม
      const newGame: Game = {
        id: Date.now().toString(),
        title: data.title,
        platform: data.platform,
        hours: Number(data.hours),
        status: data.status,
      };
      setGames((prev) => [...prev, newGame]);
    }
  };

  const handleQuickStatusChange = (id: string, newStatus: GameStatus) => {
    setGames((prev) =>
      prev.map((g) => (g.id === id ? { ...g, status: newStatus } : g))
    );
  };

  const handleConfirmDelete = () => {
    if (confirmDeleteId) {
      setGames((prev) => prev.filter((g) => g.id !== confirmDeleteId));
      setConfirmDeleteId(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Maejo game 888</h1>

      {/* Summary Banner (Derived State) */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 flex justify-between items-center">
        <div>
          <p className="text-xs text-blue-700 font-medium">ชั่วโมงรวมของเกมที่ยังไม่ได้เริ่มเล่น</p>
          <p className="text-2xl font-bold text-blue-900">{totalUnstartedHours} ชั่วโมง</p>
        </div>
        <div className="text-right text-xs text-slate-500">
          ทั้งหมด {games.length} รายการ
        </div>
      </div>

      <GameForm
        onSubmit={handleFormSubmit}
        editingGame={editingGame}
        onCancelEdit={() => setEditingGame(null)}
      />

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder=" ค้นหาชื่อเกม..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
        >
          <option value="ทั้งหมด">กรองสถานะ: ทั้งหมด</option>
          <option value="ยังไม่เริ่ม">ยังไม่เริ่ม</option>
          <option value="กำลังเล่น">กำลังเล่น</option>
          <option value="เล่นจบแล้ว">เล่นจบแล้ว</option>
        </select>
      </div>

      {/* List */}
      <div className="space-y-3">
        {filteredGames.length === 0 ? (
          <p className="text-center py-8 text-slate-400">ไม่พบรายการเกมที่ตรงเงื่อนไข</p>
        ) : (
          filteredGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onEdit={(g) => setEditingGame(g)}
              onDeleteReq={(id) => setConfirmDeleteId(id)}
              onQuickStatusChange={handleQuickStatusChange}
            />
          ))
        )}
      </div>

      {/* Modal ยืนยันการลบ */}
      {confirmDeleteId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-xl">
            <h3 className="text-lg font-bold text-slate-800 mb-2">ยืนยันการลบเกม</h3>
            <p className="text-sm text-slate-600 mb-6">คุณแน่ใจหรือไม่ว่าต้องการลบรายการนี้?</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setConfirmDeleteId(null)}
                className="px-4 py-2 border rounded-lg text-sm text-slate-600 hover:bg-slate-100"
              >
                ยกเลิก
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700"
              >
                ลบรายการ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}