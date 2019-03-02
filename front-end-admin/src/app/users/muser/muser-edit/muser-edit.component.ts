import { Component, OnInit, Input, Output, Directive, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MuserComponent, ViewType } from '../muser.component';
import { MuserService } from '../muser.service';





@Component({
  selector: 'app-muser-edit',
  templateUrl: './muser-edit.component.html',
  styleUrls: ['./muser-edit.component.css']
})
export class MuserEditComponent extends MuserComponent implements OnInit {        
    @Input() 
    protected id: string;
    @Input()
    protected cid: string;//copy id
    @Input()
    protected initData: any; //some fields has data already. eg: {a: b}. Used for add
    @Output() done = new EventEmitter<boolean>();

    protected action:string;
    protected confirmPassword;
        
    constructor(
      
      protected muserService: MuserService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super( 
                 muserService, injector, router, route, location, ViewType.EDIT);

          this.enums['status'] = ['Enabled', 'Disabled', 'Pending', ];

          this.stringFields.push('username');
          this.stringFields.push('email');
          this.stringFields.push('phone');
          this.stringFields.push('status');
          this.stringFields.push('password');




          
          let detail = {};
          this.detail = this.formatDetail(detail);
    }

    ngOnInit() {
        if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.action="Edit";
            this.populateDetailForAction(this.id, "edit"); //populate with action as "edit"
        }
        else {
            this.action="Create";
            if (!this.cid) this.cid = this.route.snapshot.queryParamMap.get('cid');
            if (this.cid) {
                this.populateDetailFromCopy(this.cid);
            } else if (this.initData) {
                this.action="Add";
                this.subEdit = true;
                let detail = {
                    
                };
                for (let prop in this.initData) {
                    detail[prop] = this.initData[prop];
                    this.hiddenFields.push(prop);
                }
                this.detail = this.formatDetail(detail);
            } else {
                let detail = {
                    
                };
                this.detail = this.formatDetail(detail);
            }
        }
    }

}
