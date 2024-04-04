import { Component, OnInit } from '@angular/core';
import { Album } from '../../model/album';
import { AlbumService } from '../../service/album.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {

  album: Album = new Album();

  constructor(private albumService: AlbumService,
    private router: Router) {}

  ngOnInit(): void {
  }

  saveAlbum() {
    this.albumService.createAlbum(this.album).subscribe(
      data => {
        console.log(data);
        this.goToAlbumsList();
      },
      error => console.log(error)
    );
  }

  goToAlbumsList() {
    this.router.navigate(['/albums']);
  }

  onSubmit() {
    console.log(this.album);
    this.saveAlbum();
  }
}
