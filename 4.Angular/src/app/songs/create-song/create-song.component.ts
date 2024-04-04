import { Component, OnInit } from '@angular/core';
import { Album, Song } from '../../model/song';
import { SongService } from '../../service/song.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit {

  song: Song = new Song();
  albumId!: number;

  constructor(private songService: SongService,
    private router: Router) {}

  ngOnInit(): void {
  }

  saveSong() {
    const album: Album = { id: this.albumId };
    this.song.album = album;

    this.songService.createSong(this.song).subscribe(
      data => {
        console.log(data);
        this.goToSongsList();
      },
      error => console.log(error)
    );
  }

  goToSongsList() {
    this.router.navigate(['/songs']);
  }

  onSubmit() {
    console.log(this.song);
    this.saveSong();
  }
}
