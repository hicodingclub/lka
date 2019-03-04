import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { MpubaccessComponent, ViewType } from '../mpubaccess.component';
import { MpubaccessService } from '../mpubaccess.service';


import { ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-mpubaccess-list',
  templateUrl: './mpubaccess-list.component.html',
  styleUrls: ['./mpubaccess-list.component.css']
})
export class MpubaccessListComponent extends MpubaccessComponent implements OnInit {


  constructor(
protected componentFactoryResolver: ComponentFactoryResolver,
      protected mpubaccessService: MpubaccessService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(componentFactoryResolver,
                mpubaccessService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('modulePermission');

          this.referenceFields = ['group', 'module', ];
          this.referenceFieldsMap = {'group': 'musergroup','module': 'mpubmodule',};





          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
