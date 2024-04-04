import { Component, OnInit } from '@angular/core';
import { Artist } from '../../model/artist';
import { ArtistService } from '../../service/artist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.css']
})
export class CreateArtistComponent implements OnInit {

  artist: Artist = new Artist();

  constructor(private artistService: ArtistService,
    private router: Router) {}

  ngOnInit(): void {
  }

  saveArtist() {
    this.artistService.createArtist(this.artist).subscribe(
      data => {
        console.log(data);
        this.goToArtistsList();
      },
      error => console.log(error)
    );
  }

  goToArtistsList() {
    this.router.navigate(['/artists']);
  }

  onSubmit() {
    console.log(this.artist);
    this.saveArtist();
  }
}
