import { Component, OnInit, ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs';

import { MddsUploadService } from './mddsupload.service';

@Component({
  selector: 'mdds-upload',
  templateUrl: './mddsupload.component.html',
  styleUrls: ['./files.component.css'],
})
export class MddsUploadComponent implements OnInit {
  @ViewChild('file') file;
  public files: Set<File> = new Set();

  progress;
  canBeClosed = true; 
  primaryButtonText = 'Upload';
  showCancelButton = true; 
  uploading = false;
  uploadSuccessful = false;

  constructor(public uploadService: MddsUploadService) {}
  
  ngOnInit() {
  }
  
  addFiles() {
    this.file.nativeElement.click();
  }
  
  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        this.files.add(files[key]);
      }
    }
  }
  
  uploadFiles() {
    // if everything was uploaded already, just close the dialog
//    if (this.uploadSuccessful) {
//      return this.dialogRef.close();
//    }
//  
    // set the component state to "uploading"
    this.uploading = true;
  
    // start the upload and save the progress map
    this.progress = this.uploadService.upload(this.files);
  
    // convert the progress map into an array
    let allProgressObservables = [];
    for (let key in this.progress) {
      allProgressObservables.push(this.progress[key].progress);
    }
  
    // Adjust the state variables
  
    // The OK-button should have the text "Finish" now
    this.primaryButtonText = 'Finish';
  
    // The dialog should not be closed while uploading
    this.canBeClosed = false;
    //this.dialogRef.disableClose = true;
  
    // Hide the cancel-button
    this.showCancelButton = false;
  
    // When all progress-observables are completed...
    forkJoin(allProgressObservables).subscribe(end => {
      // ... the dialog can be closed again...
      this.canBeClosed = true;
      //this.dialogRef.disableClose = false;
  
      // ... the upload was successful...
      this.uploadSuccessful = true;
  
      // ... and the component is no longer uploading
      this.uploading = false;
    });
  }
}