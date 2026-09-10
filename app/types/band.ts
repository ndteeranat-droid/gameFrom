export type Band = {
  id: number;
  name: string;
  genre: string;
  image: string;
  formedYear?: number; // เพิ่มฟิลด์นี้เข้าไป
  likes?: number;      // เพิ่มฟิลด์นี้เข้าไป
  members: Member[];
};

export interface Member {
  id: number;
  name: string;
  role: string;
  image?: string;
}