import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { CourseListComponent } from './course-list.component';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list-home',
  templateUrl: './course-list-home.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListHomeComponent extends CourseListComponent implements OnInit {
  private parentData = {};
  constructor(
      protected courseService: CourseService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
        super( courseService, injector, router, route, location);
        this.per_page = 6;
  }

  ngOnInit() {
      this.populateList();
  }
}