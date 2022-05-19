export class Banda {
  id: number;
  name: string;
  numberOfMembers: number;
  description: string;
  popularSongs: Array<string>;
  image: string;

  public constructor(id: number, name: string, numberOfMembers: number, description: string, popularSongs: Array<string>, image:string) {
    this.id = id;
    this.name = name;
    this.numberOfMembers = numberOfMembers;
    this.description = description;
    this.popularSongs = popularSongs;
    this.image = image;
  }
}
