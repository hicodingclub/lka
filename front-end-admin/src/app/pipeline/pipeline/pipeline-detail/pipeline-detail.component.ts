import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { PipelineComponent, ViewType } from '../pipeline.component';
import { PipelineService } from '../pipeline.service';




@Component({
  selector: 'app-pipeline-detail',
  templateUrl: './pipeline-detail.component.html',
  styleUrls: ['./pipeline-detail.component.css']
})
export class PipelineDetailComponent extends PipelineComponent implements OnInit {
  @Input() 
  protected id:string;
  @Input()
  protected searchObj:any;
  @Input()
  protected disableActionButtions:boolean;



  constructor(
      
      protected pipelineService: PipelineService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                pipelineService, injector, router, route, location, ViewType.DETAIL);


          this.stringFields.push('category');
          this.stringFields.push('muser_id');


          this.dateFields = ['createdAt', 'updatedAt', ];





  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.populateDetail(this.id);
      } else if (this.searchObj) {
        // search item based on the unique value
        this.populateDetailByFields(this.searchObj);
      } else {
        console.error("Routing error for detail view... no id...");
      }
  }
}
