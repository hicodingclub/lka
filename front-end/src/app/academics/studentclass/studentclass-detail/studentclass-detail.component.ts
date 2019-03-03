import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { StudentclassComponent, ViewType } from '../studentclass.component';
import { StudentclassService } from '../studentclass.service';


import { ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-studentclass-detail',
  templateUrl: './studentclass-detail.component.html',
  styleUrls: ['./studentclass-detail.component.css']
})
export class StudentclassDetailComponent extends StudentclassComponent implements OnInit {
  @Input() 
  protected id:string;


  constructor(
      protected componentFactoryResolver: ComponentFactoryResolver,
      protected studentclassService: StudentclassService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(componentFactoryResolver,
                studentclassService, injector, router, route, location, ViewType.DETAIL);



          this.referenceFields = ['student', 'class', ];
          this.referenceFieldsMap = {'student': 'student','class': 'class',};






  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
  }
}
