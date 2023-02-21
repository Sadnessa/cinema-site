export type Film = { title: string; price: number; img: string };

const films = [
  { title: "Lorem", price: 66, img: "https://picsum.photos/900/400?random=1" },
  { title: "Lorem", price: 66, img: "https://picsum.photos/900/400?random=2" },
  { title: "Lorem", price: 66, img: "https://picsum.photos/900/400?random=3" },
  { title: "Lorem", price: 66, img: "https://picsum.photos/900/400?random=4" },
  { title: "Lorem", price: 66, img: "https://picsum.photos/900/400?random=5" },
  { title: "Lorem", price: 66, img: "https://picsum.photos/900/400?random=6" },
  { title: "Lorem", price: 66, img: "https://picsum.photos/900/400?random=7" },
  { title: "Lorem", price: 66, img: "https://picsum.photos/900/400?random=8" },
  { title: "Lorem", price: 66, img: "https://picsum.photos/900/400?random=9" },
];

// const films2 = new Array<Film>(6)
//   .fill({ title: "Lorem", price: 66, img: "https://picsum.photos/900/400" })
//   .map((film, index) => {
//     film.img += `?random=${index + 1}`;
//     return film;
//   });

export const filmList = () => {
  return new Promise<Film[]>((resolve, reject) => {
    resolve(films);
  });
};
