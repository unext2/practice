import { Component, OnInit } from '@angular/core';
import { Artist } from '../../model/artist';
import { ArtistService } from '../../service/artist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  artists: Artist[] = [];

  constructor(private artistService: ArtistService,
    private router: Router) {}

  ngOnInit(): void {
    this.getArtists();
  }

  private getArtists() {
    this.artistService.getArtistsList().subscribe(data => {
      this.artists = data;
    });
  }

  updateArtist(id: number) {
    this.router.navigate(['update-artist', id]);
  }

  deleteArtist(id: number) {
    this.artistService.deleteArtist(id).subscribe(data => {
      console.log(data);
      this.getArtists();
    });
  }

  createArtist() {
    this.router.navigate(['create-artist']);
  }
}
