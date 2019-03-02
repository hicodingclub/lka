import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { MaccountListComponent } from './maccount-list.component';
import { MaccountService } from '../maccount.service';

@Component({
  selector: 'app-maccount-select',
  templateUrl: './maccount-select.component.html',
  styleUrls: ['./maccount-list.component.css']
})
export class MaccountSelectComponent extends MaccountListComponent
        implements OnInit {
    @Input() inputData;
    @Output() outputData;
    done = new EventEmitter<boolean>();

    constructor(
        protected maccountService: MaccountService,
        protected injector: Injector,
        protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location
        ) {
            super(maccountService, injector, router, route, location);
            this.majorUi = false;
    }

    ngOnInit() {
        this.selectedId = this.inputData;
        this.populateList();
    }
}
