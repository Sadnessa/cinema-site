export type Film = {
  id: number;
  title: string;
  price: number;
  img: string;
  description: string;
  seats: { count: number; booked: { row: number, seat: number }[], seatsInRow: number[] };
};

const films = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    price: 66,
    img: "https://picsum.photos/900/600?random=1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    seats: { count: 40, booked: [{ row: 1, seat: 1, }], seatsInRow: [15, 20, 20, 20, 20, 20, 10]  },
  },
  {
    id: 2,
    title: "Lorem",
    price: 66,
    img: "https://picsum.photos/900/400?random=2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    seats: { count: 40, booked: [{ row: 1, seat: 3 }], seatsInRow: [15, 20, 20, 20, 20, 20, 10] },
  },
  {
    id: 3,
    title: "Lorem",
    price: 66,
    img: "https://picsum.photos/900/400?random=3",
    description: "fkjdkfjskfjskfjskfsjfksfksjskjfks",
    seats: { count: 40, booked: [{ row: 1, seat: 3 }], seatsInRow: [15, 20, 20, 20, 20, 20, 10] },
  },
  {
    id: 4,
    title: "Lorem",
    price: 66,
    img: "https://picsum.photos/900/400?random=4",
    description: "fkjdkfjskfjskfjskfsjfksfksjskjfks",
    seats: { count: 40, booked: [{ row: 1, seat: 3 }], seatsInRow: [15, 20, 20, 20, 20, 20, 10] },
  },
  {
    id: 5,
    title: "Lorem",
    price: 66,
    img: "https://picsum.photos/900/400?random=5",
    description: "fkjdkfjskfjskfjskfsjfksfksjskjfks",
    seats: { count: 40, booked: [{ row: 1, seat: 3 }], seatsInRow: [15, 20, 20, 20, 20, 20, 10] },
  },
  {
    id: 6,
    title: "Lorem",
    price: 66,
    img: "https://picsum.photos/900/400?random=6",
    description: "fkjdkfjskfjskfjskfsjfksfksjskjfks",
    seats: { count: 40, booked: [{ row: 1, seat: 3 }], seatsInRow: [15, 20, 20, 20, 20, 20, 10] },
  },
  {
    id: 7,
    title: "Lorem",
    price: 66,
    img: "https://picsum.photos/900/400?random=7",
    description: "fkjdkfjskfjskfjskfsjfksfksjskjfks",
    seats: { count: 40, booked: [{ row: 1, seat: 3 }], seatsInRow: [15, 20, 20, 20, 20, 20, 10] },
  },
  {
    id: 8,
    title: "Lorem",
    price: 66,
    img: "https://picsum.photos/900/400?random=8",
    description: "fkjdkfjskfjskfjskfsjfksfksjskjfks",
    seats: { count: 40, booked: [{ row: 1, seat: 3 }], seatsInRow: [15, 20, 20, 20, 20, 20, 10] },
  },
  {
    id: 9,
    title: "Lorem",
    price: 66,
    img: "https://picsum.photos/900/400?random=9",
    description: "fkjdkfjskfjskfjskfsjfksfksjskjfks",
    seats: { count: 40, booked: [{ row: 1, seat: 3 }], seatsInRow: [15, 20, 20, 20, 20, 20, 10] },
  },
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
