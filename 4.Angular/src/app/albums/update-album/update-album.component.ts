import { Component, OnInit } from '@angular/core';
import { Album } from '../../model/album';
import { AlbumService } from '../../service/album.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-album',
  templateUrl: './update-album.component.html',
  styleUrls: ['./update-album.component.css']
})
export class UpdateAlbumComponent implements OnInit {

  album: Album = new Album();
  id!: number;

  constructor(private albumService: AlbumService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.albumService.getAlbumById(this.id).subscribe(
      data => {
        this.album = data;
      },
      error => console.log(error)
    );
  }

  goToAlbumsList() {
    this.router.navigate(['/albums']);
  }

  onSubmit() {
    this.albumService.updateAlbum(this.id, this.album).subscribe(
      data => {
        this.goToAlbumsList();
      },
      error => console.log(error)
    );
  }
}
