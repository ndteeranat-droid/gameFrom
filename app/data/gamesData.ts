export type GameStatus = 'ยังไม่เริ่ม' | 'กำลังเล่น' | 'เล่นจบแล้ว';

export interface Game {
  id: string;
  title: string;
  platform: string;
  hours: number;
  status: GameStatus;
}

export interface GameFormData {
  title: string;
  platform: string;
  hours: string;
  status: GameStatus;
}

export interface FormErrors {
  title?: string;
  platform?: string;
  hours?: string;
}

export const PLATFORM_OPTIONS = ['PC', 'PlayStation 5', 'Xbox Series X', 'Nintendo Switch'];

export const games: Game[] = [
  { id: '1', title: 'Subnautica', platform: 'PC', hours: 35, status: 'กำลังเล่น' },
  { id: '2', title: 'Red Dead Redemption 2', platform: 'PC', hours: 60, status: 'เล่นจบแล้ว' },
  { id: '3', title: 'Monster Hunter Wilds', platform: 'PlayStation 5', hours: 80, status: 'ยังไม่เริ่ม' },
  { id: '4', title: 'ELDEN RING', platform: 'PC', hours: 100, status: 'ยังไม่เริ่ม' },
  { id: '5', title: 'Zelda: Tears of the Kingdom', platform: 'Nintendo Switch', hours: 90, status: 'กำลังเล่น' },
];