export type Film = { id: number, title: string; price: number; img: string, seats: { count: number, booked: number[], available: number }};

const films = [
  { id: 1, title: "Lorem", price: 66, img: "https://picsum.photos/900/400?random=1", seats: { count: 40, booked: [10, 30, 22, 1, 4], available: 35 } },
  { id: 2, title: "Lorem", price: 66, img: "https://picsum.photos/900/400?random=2", seats: { count: 40, booked: [10, 30, 22, 1, 4], available: 35 } },
  { id: 3, title: "Lorem", price: 66, img: "https://picsum.photos/900/400?random=3", seats: { count: 40, booked: [10, 30, 22, 1, 4], available: 35 } },
  { id: 4, title: "Lorem", price: 66, img: "https://picsum.photos/900/400?random=4", seats: { count: 40, booked: [10, 30, 22, 1, 4], available: 35 } },
  { id: 5, title: "Lorem", price: 66, img: "https://picsum.photos/900/400?random=5", seats: { count: 40, booked: [10, 30, 22, 1, 4], available: 35 } },
  { id: 6, title: "Lorem", price: 66, img: "https://picsum.photos/900/400?random=6", seats: { count: 40, booked: [10, 30, 22, 1, 4], available: 35 } },
  { id: 7, title: "Lorem", price: 66, img: "https://picsum.photos/900/400?random=7", seats: { count: 40, booked: [10, 30, 22, 1, 4], available: 35 } },
  { id: 8, title: "Lorem", price: 66, img: "https://picsum.photos/900/400?random=8", seats: { count: 40, booked: [10, 30, 22, 1, 4], available: 35 } },
  { id: 9, title: "Lorem", price: 66, img: "https://picsum.photos/900/400?random=9", seats: { count: 40, booked: [10, 30, 22, 1, 4], available: 35 } },
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
