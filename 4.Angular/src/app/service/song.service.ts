import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../model/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private baseUrl = "http://localhost:8080/api/songs";

  constructor(private httpClient: HttpClient) { }

  getSongsList(): Observable<Song[]> {
    return this.httpClient.get<Song[]>(`${this.baseUrl}`);
  }

  createSong(song: Song): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, song);
  }

  getSongById(id: number): Observable<Song> {
    return this.httpClient.get<Song>(`${this.baseUrl}/${id}`);
  }

  updateSong(id: number, song: Song): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, song);
  }

  deleteSong(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
