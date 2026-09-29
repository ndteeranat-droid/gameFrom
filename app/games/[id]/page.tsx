
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { games } from '../../data/gamesData';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const game = games.find((g) => g.id === id);

  if (!game) {
    return { title: 'ไม่พบข้อมูลเกม | Maejo game 888' };
  }

  return {
    title: `${game.title} | Maejo game 888`,
    description: `รายละเอียดเกม ${game.title}`,
  };
}

export default async function GameDetailPage({ params }: PageProps) {
  const { id } = await params;
  const game = games.find((g) => g.id === id);

  if (!game) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto p-6 font-sans">
      <Link
        href="/games"
        className="inline-flex items-center text-sm text-blue-600 hover:underline mb-6"
      >
        ← กลับไปหน้ารายการเกม
      </Link>

      <div className="bg-white border rounded-2xl p-8 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-3xl font-extrabold text-slate-800">{game.title}</h1>
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${
              game.status === 'เล่นจบแล้ว'
                ? 'bg-green-100 text-green-800'
                : game.status === 'กำลังเล่น'
                ? 'bg-amber-100 text-amber-800'
                : 'bg-slate-100 text-slate-800'
            }`}
          >
            {game.status}
          </span>
        </div>

        <div className="space-y-3 border-t pt-4 text-slate-600">
          <p className="flex justify-between">
            <span className="font-medium text-slate-500">แพลตฟอร์ม:</span>
            <span className="font-semibold text-slate-800">{game.platform}</span>
          </p>
          <p className="flex justify-between">
            <span className="font-medium text-slate-500">จำนวนชั่วโมงที่คาดว่าจะใช้:</span>
            <span className="font-semibold text-slate-800">{game.hours} ชั่วโมง</span>
          </p>
          <p className="flex justify-between">
            <span className="font-medium text-slate-500">ID:</span>
            <span className="font-mono text-xs text-slate-400">{game.id}</span>
          </p>
        </div>
      </div>
    </div>
  );
}