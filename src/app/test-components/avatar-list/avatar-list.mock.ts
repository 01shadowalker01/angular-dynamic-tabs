export const AVATARS: Avatar[] = [
  {
    name: "Walter White",
    imageUrl: "assets/images/avatars/walter-white.jpg",
    highestBid: 200,
    spentAmount: 500,
  },
  {
    name: "shadowalker",
    imageUrl: "assets/images/avatars/shadowalker.jpg",
    highestBid: 200,
    spentAmount: 500,
  },
  {
    name: "John snow",
    imageUrl: "assets/images/avatars/john-snow.jpg",
    highestBid: 200,
    spentAmount: 500,
  },
  {
    name: "Sansa Stark",
    imageUrl: "assets/images/avatars/Sansa-Stark.jpg",
    highestBid: 200,
    spentAmount: 500,
  },
  {
    name: "Aria Stark",
    imageUrl: "assets/images/avatars/Aria-Stark.jpg",
    highestBid: 200,
    spentAmount: 500,
  },
  {
    name: "Night king",
    imageUrl: "assets/images/avatars/Night-king.webp",
    highestBid: 200,
    spentAmount: 500,
  },
];

export class Avatar {
  name: string;
  imageUrl: string;
  spentAmount: number;
  highestBid: number;
}
