import { Component, OnInit } from '@angular/core';

import { Application } from '../application';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent implements OnInit {

  application: Application = new Application();
  submitted = false;

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
  }

  newApplication(): void {
    this.submitted = false;
    this.application = new Application();
  }

  save() {
    this.applicationService.createApplication(this.application)
      .subscribe(data => console.log(data), error => console.log(error));
    this.application = new Application();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
