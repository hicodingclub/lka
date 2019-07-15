import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { EventListComponent } from './event-list.component';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list-ex-h',
  templateUrl: './event-list-home.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListHomeComponent extends EventListComponent implements OnInit {
  constructor(
      public eventService: EventService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
        super( eventService, injector, router, route, location);
        this.per_page = 3;
  }

  ngOnInit() {
    const detail = this.searchObj || {};
    this.detail = this.formatDetail(detail);
    this.searchList();
  }
}
