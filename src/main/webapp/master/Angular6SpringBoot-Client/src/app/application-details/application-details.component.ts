import { Component, OnInit, Input } from '@angular/core';
import { ApplicationService } from '../application.service';
import { Application } from '../application';

import { ApplicationsListComponent } from '../applications-list/applications-list.component';

@Component({
  selector: 'application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent implements OnInit {

  @Input() application: Application;

  constructor(private applicationService: ApplicationService, private listComponent: ApplicationsListComponent) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.applicationService.updateApplication(this.application.id,
      { name: this.application.name, age: this.application.age, active: isActive })
      .subscribe(
        data => {
          console.log(data);
          this.application = data as Application;
        },
        error => console.log(error));
  }

  deleteApplication() {
    this.applicationService.deleteApplication(this.application.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
}
