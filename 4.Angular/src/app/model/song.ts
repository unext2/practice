export class Album {
    id!: number;
  }
  
  export class Song {
    id!: number;
    name!: string;
    album!: Album;
  }
  