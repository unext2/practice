import { Component, OnInit } from '@angular/core';
import { Album } from '../../model/album';
import { AlbumService } from '../../service/album.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums: Album[] = [];

  constructor(private albumService: AlbumService,
    private router: Router) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  private getAlbums() {
    this.albumService.getAlbumsList().subscribe(data => {
      this.albums = data;
    });
  }

  updateAlbum(id: number) {
    this.router.navigate(['update-album', id]);
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(data => {
      console.log(data);
      this.getAlbums();
    });
  }

  createAlbum() {
    this.router.navigate(['create-album']);
  }
}
