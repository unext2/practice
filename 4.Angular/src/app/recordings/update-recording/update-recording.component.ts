import { Component, OnInit } from '@angular/core';
import { Artist, Employee, Song, Recording } from '../../model/recording';
import { RecordingService } from '../../service/recording.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-recording',
  templateUrl: './update-recording.component.html',
  styleUrls: ['./update-recording.component.css']
})
export class UpdateRecordingComponent implements OnInit {

  recording: Recording = new Recording();
  id!: number;

  constructor(private recordingService: RecordingService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.recordingService.getRecordingById(this.id).subscribe(
      data => {
        this.recording = data;
      },
      error => console.log(error)
    );
  }

  goToRecordingsList() {
    this.router.navigate(['/recordings']);
  }

  onSubmit() {
    this.recordingService.updateRecording(this.id, this.recording).subscribe(
      data => {
        this.goToRecordingsList();
      },
      error => console.log(error)
    );
  }
}
