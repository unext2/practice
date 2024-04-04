export class Artist {
    id!: number;
}

export class Employee {
    id!: number;
}

export class Song {
    id!: number;
}

export class Recording {
    id!: number;
    artist!: Artist;
    employee!: Employee;
    song!: Song;
    date!: string;
  }
  