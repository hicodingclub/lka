import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { ClassListComponent } from './class-list.component';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-class-list-sub',
  templateUrl: './class-list-sub.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListSubComponent extends ClassListComponent implements OnInit {
  private parentData = {};
  constructor(
      protected classService: ClassService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
        super(null, classService, injector, router, route, location);
  }

  ngOnInit() {
      let ref = this.getParentRouteRefField();
      let id = this.getParentRouteItemId();
      this.detail = {};

    if (this.arrayFields.some(x=>x[0] == ref)) {
          this.parentData[ref] = {'selection':[{'_id': id}] }; 
          this.detail[ref] = {'selection':[{'_id': id}] }; //search on array list
      } else {
          this.parentData[ref] = {'_id': id };
          this.detail[ref] = {'_id': id }; //make this as the search context
      }
      this.processSearchContext();
      this.populateList();
  }
}
