import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRecordingComponent } from './update-recording.component';

describe('UpdateRecordingComponent', () => {
  let component: UpdateRecordingComponent;
  let fixture: ComponentFixture<UpdateRecordingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateRecordingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
