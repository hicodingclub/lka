import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { MmoduleListComponent } from './mmodule-list.component';
import { MmoduleService } from '../mmodule.service';

@Component({
  selector: 'app-mmodule-select',
  templateUrl: './mmodule-select.component.html',
  styleUrls: ['./mmodule-list.component.css']
})
export class MmoduleSelectComponent extends MmoduleListComponent
        implements OnInit {
    @Input() inputData;
    @Output() outputData;
    done = new EventEmitter<boolean>();

    constructor(
        protected mmoduleService: MmoduleService,
        protected injector: Injector,
        protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location
        ) {
            super(mmoduleService, injector, router, route, location);
            this.majorUi = false;
    }

    ngOnInit() {
        this.selectedId = this.inputData;
        this.populateList();
    }
}
