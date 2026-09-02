import BandCard from "../components/BandCard";
import { bandsData } from "../data/bandsData";

export default function BandsPage() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">วงดนตรีที่ชื่นชอบ</h1>
      <div className="flex flex-wrap gap-4">
        {bandsData.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </div>
    </main>
  );
}