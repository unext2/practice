import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../model/album';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private baseUrl = `${environment.baseUrl}/albums`;

  constructor(private httpClient: HttpClient) { }

  getAlbumsList(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(`${this.baseUrl}`);
  }

  createAlbum(album: Album): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, album);
  }

  getAlbumById(id: number): Observable<Album> {
    return this.httpClient.get<Album>(`${this.baseUrl}/${id}`);
  }

  updateAlbum(id: number, album: Album): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, album);
  }

  deleteAlbum(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
