import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../model/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private baseUrl = "http://localhost:8080/api/artists";

  constructor(private httpClient: HttpClient) { }

  getArtistsList(): Observable<Artist[]> {
    return this.httpClient.get<Artist[]>(`${this.baseUrl}`);
  }

  createArtist(artist: Artist): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, artist);
  }

  getArtistById(id: number): Observable<Artist> {
    return this.httpClient.get<Artist>(`${this.baseUrl}/${id}`);
  }

  updateArtist(id: number, artist: Artist): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, artist);
  }

  deleteArtist(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
