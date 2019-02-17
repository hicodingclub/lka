import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { MmoduleDetailComponent } from './mmodule-detail.component';
import { MmoduleService } from '../mmodule.service';

@Component({
  selector: 'app-mmodule-detail-pop',
  templateUrl: './mmodule-detail-pop.component.html',
  styleUrls: ['./mmodule-detail.component.css']
})
export class MmoduleDetailPopComponent extends MmoduleDetailComponent 
        implements OnInit {
    @Input() inputData;
    @Output() outputData;
    done = new EventEmitter<boolean>();
    
    constructor(
        protected mmoduleService: MmoduleService,
        protected commonService: MraCommonService,
        protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location) {
            super(mmoduleService, commonService, router, route, location);
            this.majorUi = false;
    }

    ngOnInit() {
      if (!this.id) this.id = this.inputData;
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
    }
}