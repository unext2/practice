import { Component, OnInit } from '@angular/core';
import { Song } from '../../model/song';
import { SongService } from '../../service/song.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songs: Song[] = [];

  constructor(private songService: SongService,
    private router: Router) {}

  ngOnInit(): void {
    this.getSongs();
  }

  private getSongs() {
    this.songService.getSongsList().subscribe(data => {
      this.songs = data;
    });
  }

  updateSong(id: number) {
    this.router.navigate(['update-song', id]);
  }

  deleteSong(id: number) {
    this.songService.deleteSong(id).subscribe(data => {
      console.log(data);
      this.getSongs();
    });
  }

  createSong() {
    this.router.navigate(['create-song']);
  }
}
