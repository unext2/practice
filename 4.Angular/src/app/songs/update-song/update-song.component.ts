import { Component, OnInit } from '@angular/core';
import { Song } from '../../model/song';
import { SongService } from '../../service/song.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-song',
  templateUrl: './update-song.component.html',
  styleUrls: ['./update-song.component.css']
})
export class UpdateSongComponent implements OnInit {

  song: Song = new Song();
  id!: number;

  constructor(private songService: SongService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.songService.getSongById(this.id).subscribe(
      data => {
        this.song = data;
      },
      error => console.log(error)
    );
  }

  goToSongsList() {
    this.router.navigate(['/songs']);
  }

  onSubmit() {
    this.songService.updateSong(this.id, this.song).subscribe(
      data => {
        this.goToSongsList();
      },
      error => console.log(error)
    );
  }
}
