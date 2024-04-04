import { Component, OnInit } from '@angular/core';
import { Recording } from '../../model/recording';
import { RecordingService } from '../../service/recording.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recording-list',
  templateUrl: './recording-list.component.html',
  styleUrls: ['./recording-list.component.css']
})
export class RecordingListComponent implements OnInit {

  recordings: Recording[] = [];

  constructor(private recordingService: RecordingService,
    private router: Router) {}

  ngOnInit(): void {
    this.getRecordings();
  }

  private getRecordings() {
    this.recordingService.getRecordingsList().subscribe(data => {
      this.recordings = data;
    });
  }

  updateRecording(id: number) {
    this.router.navigate(['update-recording', id]);
  }

  deleteRecording(id: number) {
    this.recordingService.deleteRecording(id).subscribe(data => {
      console.log(data);
      this.getRecordings();
    });
  }

  createRecording() {
    this.router.navigate(['create-recording']);
  }
}
