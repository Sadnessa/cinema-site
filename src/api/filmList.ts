const films = [
  { title: "Lorem", price: 66, img: "https://picsum.photos/500/400?random=1"},
  { title: "Lorem", price: 66, img: "https://picsum.photos/500/400?random=2"}
]

export const filmList = () => {
  return new Promise((resolve, reject) => {
    resolve(films)
  })
}