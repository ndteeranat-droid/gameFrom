"use client";

import React, { useState, useEffect } from 'react';
import { Game, GameFormData, FormErrors, PLATFORM_OPTIONS } from '../data/gamesData';

interface GameFormProps {
  onSubmit: (data: GameFormData) => void;
  editingGame: Game | null;
  onCancelEdit: () => void;
}
// ค่าเริ่มต้นสำหรับล้างฟอร์ม
const initialFormState: GameFormData = {
  title: '',
  platform: '',
  hours: '',
  status: 'ยังไม่เริ่ม',
};
// State
export default function GameForm({ onSubmit, editingGame, onCancelEdit }: GameFormProps) {
  const [formData, setFormData] = useState<GameFormData>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
//ตรวจจับการเปลี่ยนแปลงของ editingGame
  useEffect(() => {
    if (editingGame) { 
      setFormData({
        title: editingGame.title,
        platform: editingGame.platform,
        hours: editingGame.hours.toString(),
        status: editingGame.status,
      });
      setErrors({});
    } else {
      setFormData(initialFormState);
    }
  }, [editingGame]);
// ฟังก์ชันตรวจสอบ
  const validateForm = (): boolean => {
  const newErrors: FormErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'กรุณากรอกชื่อเกม';
    }

    if (!formData.platform) {
      newErrors.platform = 'กรุณาเลือกแพลตฟอร์ม';
    }

    const hoursNum = Number(formData.hours);
    if (!formData.hours || isNaN(hoursNum) || !Number.isInteger(hoursNum) || hoursNum <= 0) {
      newErrors.hours = 'จำนวนชั่วโมงต้องเป็นจำนวนเต็มบวกเท่านั้น';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
// ฟังก์ชันผู้ใช้พิมพ์
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };
// ฟังก์ชันกด Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(formData);
    if (!editingGame) {
      setFormData(initialFormState);
    }
  };

  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm mb-8">
      <h2 className="text-xl font-semibold mb-4 text-slate-800">
        {editingGame ? ' แก้ไขข้อมูลเกม' : 'เพิ่มเกมใหม่เข้า Maejo 888'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-700">ชื่อเกม *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="เช่น Subnautica"
              className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                errors.title ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-200'
              }`}
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-700">แพลตฟอร์ม *</label>
            <select
              name="platform"
              value={formData.platform}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                errors.platform ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-200'
              }`}
            >
              <option value="">-- เลือกแพลตฟอร์ม --</option>
              {PLATFORM_OPTIONS.map((plat) => (
                <option key={plat} value={plat}>{plat}</option>
              ))}
            </select>
            {errors.platform && <p className="text-red-500 text-xs mt-1">{errors.platform}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-700">ชั่วโมงที่คาดว่าจะใช้ *</label>
            <input
              type="number"
              name="hours"
              value={formData.hours}
              onChange={handleChange}
              placeholder="เช่น 35"
              className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                errors.hours ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-200'
              }`}
            />
            {errors.hours && <p className="text-red-500 text-xs mt-1">{errors.hours}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-700">สถานะ</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option value="ยังไม่เริ่ม">ยังไม่เริ่ม</option>
              <option value="กำลังเล่น">กำลังเล่น</option>
              <option value="เล่นจบแล้ว">เล่นจบแล้ว</option>
            </select>
          </div>
        </div>

        <div className="flex gap-2 justify-end pt-2">
          {editingGame && (
            <button
              type="button"
              onClick={onCancelEdit}
              className="px-4 py-2 border rounded-lg text-sm text-slate-600 hover:bg-slate-100"
            >
              ยกเลิก
            </button>
          )}
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            {editingGame ? 'บันทึกการแก้ไข' : 'บันทึกเกม'}
          </button>
        </div>
      </form>
    </div>
  );
}