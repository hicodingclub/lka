import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router'

import { MraRouteReuseStrategy } from 'mean-rest-angular';

import { ManageComponent } from './manage.component';
import { ManageRoutes } from '../manage.conf';
//Import components for each schema

import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';
    





const eventRoutingPath = [
    {path: 'list', component: EventListComponent},
    {path: 'detail/:id', component: EventDetailComponent},
    {path: 'edit/:id', component: EventEditComponent},
    {path: 'new', component: EventEditComponent},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forChild(ManageRoutes)],
  exports: [RouterModule],
  providers: [//only use these providers in component scope
    { provide: RouteReuseStrategy, useClass: MraRouteReuseStrategy }, 
  ],

})
export class ManageRoutingModule { }
