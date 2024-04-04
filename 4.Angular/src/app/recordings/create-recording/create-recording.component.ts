import { Component, OnInit } from '@angular/core';
import { Artist, Employee, Song, Recording } from '../../model/recording';
import { RecordingService } from '../../service/recording.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-recording',
  templateUrl: './create-recording.component.html',
  styleUrls: ['./create-recording.component.css']
})
export class CreateRecordingComponent implements OnInit {

  recording: Recording = new Recording;
  artistId!: number;
  employeeId!: number;
  songId!: number;

  constructor(private recordingService: RecordingService,
    private router: Router) {}

  ngOnInit(): void {
  }

  saveRecording() {
    const artist: Artist = { id: this.artistId };
    const employee: Employee = { id: this.employeeId };
    const song: Song = { id: this.songId };
    this.recording.artist = artist;
    this.recording.employee = employee;
    this.recording.song = song;

    this.recordingService.createRecording(this.recording).subscribe(
      data => {
        console.log(data);
        this.goToRecordingsList();
      },
      error => console.log(error)
    );
  }

  goToRecordingsList() {
    this.router.navigate(['/recordings']);
  }

  onSubmit() {
    console.log(this.recording);
    this.saveRecording();
  }
}
