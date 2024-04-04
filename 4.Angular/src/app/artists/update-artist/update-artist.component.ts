import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../../service/artist.service';
import { Artist } from '../../model/artist';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-artist',
  templateUrl: './update-artist.component.html',
  styleUrls: ['./update-artist.component.css']
})
export class UpdateArtistComponent implements OnInit {

  artist: Artist = new Artist();
  id!: number;

  constructor(private artistService: ArtistService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.artistService.getArtistById(this.id).subscribe(
      data => {
        this.artist = data;
      },
      error => console.log(error)
    );
  }

  goToArtistsList() {
    this.router.navigate(['/artists']);
  }

  onSubmit() {
    this.artistService.updateArtist(this.id, this.artist).subscribe(
      data => {
        this.goToArtistsList();
      },
      error => console.log(error)
    );
  }
}
