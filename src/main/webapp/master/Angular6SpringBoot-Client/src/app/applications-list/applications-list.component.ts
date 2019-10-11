import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApplicationService } from '../application.service';
import { Application } from '../application';

@Component({
  selector: 'applications-list',
  templateUrl: './applications-list.component.html',
  styleUrls: ['./applications-list.component.css']
})
export class ApplicationsListComponent implements OnInit {

  applications: Observable<Application[]>;

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteApplications() {
    this.applicationService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadData() {
    this.applications = this.applicationService.getApplicationsList();
  }
}
