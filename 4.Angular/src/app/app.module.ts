import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './employees/update-employee/update-employee.component';
import { ArtistListComponent } from './artists/artist-list/artist-list.component';
import { CreateArtistComponent } from './artists/create-artist/create-artist.component';
import { UpdateArtistComponent } from './artists/update-artist/update-artist.component';
import { CreateAlbumComponent } from './albums/create-album/create-album.component';
import { UpdateAlbumComponent } from './albums/update-album/update-album.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { SongListComponent } from './songs/song-list/song-list.component';
import { CreateSongComponent } from './songs/create-song/create-song.component';
import { UpdateSongComponent } from './songs/update-song/update-song.component';
import { RecordingListComponent } from './recordings/recording-list/recording-list.component';
import { CreateRecordingComponent } from './recordings/create-recording/create-recording.component';
import { UpdateRecordingComponent } from './recordings/update-recording/update-recording.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    ArtistListComponent,
    CreateArtistComponent,
    UpdateArtistComponent,
    CreateAlbumComponent,
    UpdateAlbumComponent,
    AlbumListComponent,
    SongListComponent,
    CreateSongComponent,
    UpdateSongComponent,
    RecordingListComponent,
    CreateRecordingComponent,
    UpdateRecordingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
