import { Band } from '../types/band';

export const bandsData: Band[] = [
  {
    id: 1,
    name: 'Landokmai',
    genre: 'Dream Pop / Indie Pop',
    image: '/images/Landokmai1.jpg',
    members: [
      { id: 1, name: 'อูปิม', role: 'ร้องนำ', image: '/images/upim.png' },
      { id: 2, name: 'แอ้นท์', role: 'กีตาร์' ,image: '/images/ant.png'},
    ],
  },
  {
    id: 2,
    name: 'Purpeech',
    genre: 'Indie Pop',
    image: '/images/purpeech.jpg',
    members: [
      { id: 1, name: 'เล็ก', role: 'ร้องนำ' , image: '/images/lek.png'},
      { id: 2, name: 'ยีนส์', role: 'คีย์บอร์ด',image: '/images/jeans.png' },
      { id: 3, name: 'เซ็นต์ ', role: 'กีตาร์', image: '/images/james.png' },
      { id: 4, name: 'คอมพ์ ', role: ' เบส' , image: '/images/saint.png'},
      { id: 5, name: 'เจมส์', role: 'กลอง', image: '/images/comp.png' },
    ],
  },
  {
  id: 4, 
  name: 'Three Man Down',
  genre: 'Pop Rock',
  image: '/images/threemandown.png',
  members: [
    { id: 1, name: 'กิต', role: 'ร้องนำ', image: '/images/kit.png' },
    { id: 2, name: 'ตูน', role: 'กีตาร์', image: '/images/toon.png' },
    { id: 3, name: 'เต', role: 'กลอง', image: '/images/tay.png' },
    { id: 4, name: 'เส็ง', role: 'ซินธิไซเซอร์', image: '/images/seng.png' },
  ],
},
];