export type Film = { title: string; price: number; img: string };

const films = [
  { title: "Lorem", price: 66, img: "https://picsum.photos/500/400?random=1" },
  { title: "Lorem", price: 66, img: "https://picsum.photos/500/400?random=2" },
  { title: "Lorem", price: 66, img: "https://picsum.photos/500/400?random=3" },
  { title: "Lorem", price: 66, img: "https://picsum.photos/500/400?random=4" },
  { title: "Lorem", price: 66, img: "https://picsum.photos/500/400?random=5" },
  { title: "Lorem", price: 66, img: "https://picsum.photos/500/400?random=6" },
];

export const filmList = () => {
  return new Promise<Film[]>((resolve, reject) => {
    resolve(films);
  });
};
