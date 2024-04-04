import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recording } from '../model/recording';

@Injectable({
  providedIn: 'root'
})
export class RecordingService {
  private baseUrl = "http://localhost:8080/api/recordings";

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
