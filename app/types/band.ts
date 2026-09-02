export type Band = {
  id: number;
  name: string;
  genre: string;
  image: string;
  members: Member[];
};
export interface Member {
  id: number;
  name: string;
  role: string;
  image?: string;
}