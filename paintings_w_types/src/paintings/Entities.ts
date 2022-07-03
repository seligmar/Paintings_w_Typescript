export type Painting = {
  id: string,
  collecting_institution: string,
  date: string,
  dimensions: {
    text: string,
    height: number,
    width: number,
    depth: null,
    diameter: null
  },
  slug?: string,
  title: string,
  image: string,
  artist: {
    name: string,
    hometown: string,
    birthday: string,
    deathday: string
  },
  votes: number
}
