import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './employees/update-employee/update-employee.component';
import { ArtistListComponent } from './artists/artist-list/artist-list.component';
import { CreateArtistComponent } from './artists/create-artist/create-artist.component';
import { UpdateArtistComponent } from './artists/update-artist/update-artist.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { CreateAlbumComponent } from './albums/create-album/create-album.component';
import { UpdateAlbumComponent } from './albums/update-album/update-album.component';
import { SongListComponent } from './songs/song-list/song-list.component';
import { CreateSongComponent } from './songs/create-song/create-song.component';
import { UpdateSongComponent } from './songs/update-song/update-song.component';
import { RecordingListComponent } from './recordings/recording-list/recording-list.component';
import { CreateRecordingComponent } from './recordings/create-recording/create-recording.component';
import { UpdateRecordingComponent } from './recordings/update-recording/update-recording.component';


const routes: Routes = [
  {path: "employees", component: EmployeeListComponent},
  {path: "create-employee", component: CreateEmployeeComponent},
  {path: "update-employee/:id", component: UpdateEmployeeComponent},
  {path: "artists", component: ArtistListComponent},
  {path: "create-artist", component: CreateArtistComponent},
  {path: "update-artist/:id", component: UpdateArtistComponent},
  {path: "songs", component: SongListComponent},
  {path: "create-song", component: CreateSongComponent},
  {path: "update-song/:id", component: UpdateSongComponent},
  {path: "albums", component: AlbumListComponent},
  {path: "create-album", component: CreateAlbumComponent},
  {path: "update-album/:id", component: UpdateAlbumComponent},
  {path: "recordings", component: RecordingListComponent},
  {path: "create-recording", component: CreateRecordingComponent},
  {path: "update-recording/:id", component: UpdateRecordingComponent},
  {path: "", redirectTo: 'employees', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
