import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recording } from '../model/recording';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecordingService {
  private baseUrl = `${environment.baseUrl}/recordings`;

  constructor(private httpClient: HttpClient) { }

  getRecordingsList(): Observable<Recording[]> {
    return this.httpClient.get<Recording[]>(`${this.baseUrl}`);
  }

  createRecording(recording: Recording): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, recording);
  }

  getRecordingById(id: number): Observable<Recording> {
    return this.httpClient.get<Recording>(`${this.baseUrl}/${id}`);
  }

  updateRecording(id: number, recording: Recording): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, recording);
  }

  deleteRecording(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
