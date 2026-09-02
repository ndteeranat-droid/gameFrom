import Image from 'next/image';
import { Band } from '../types/band';

interface BandCardProps {
  band: Band;
}

export default function BandCard({ band }: BandCardProps) {
  return (
    <div className="courseCard flex flex-col w-full max-w-sm space-y-4">
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
      <div className="space-y-1.5">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">{band.name}</h2>
        <div>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
            {band.genre}
          </span>
        </div>
      </div>

      {}
      <div className="pt-3 border-t border-slate-100">
        <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-3">
          สมาชิกในวง
        </p>
        <ul className="flex flex-col gap-3">
          {band.members.map((member) => (
            <li 
              key={member.id} 
              className="flex items-center gap-3.5 p-1 rounded-lg hover:bg-slate-50 transition-colors"
            >
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  width={64}
                  height={64}
                  className="band-member-img shrink-0"
                />
              ) : (
                <div className="band-member-img shrink-0 bg-slate-200 flex items-center justify-center text-slate-400 text-xs font-medium">
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
    </div>
  );
}