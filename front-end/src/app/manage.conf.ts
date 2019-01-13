import { Routes } from '@angular/router';

import { ManageComponent } from './manage/manage.component';

//Import routing paths
import {eventRoutingPath, studentRoutingPath, teacherRoutingPath, courseRoutingPath, courseinstanceRoutingPath,  } from './manage/manage-routing.path';

export const ManageRoutes: Routes = [
  { path: 'manage', 
    component: ManageComponent,
    children: [ 
      {path: '',  redirectTo: 'event', pathMatch: 'full'},

      { path: "event",
        children: eventRoutingPath, 
        data: {"mraLevel": 1, "item": "event"}
      },
      { path: "student",
        children: studentRoutingPath, 
        data: {"mraLevel": 1, "item": "student"}
      },
      { path: "teacher",
        children: teacherRoutingPath, 
        data: {"mraLevel": 1, "item": "teacher"}
      },
      { path: "course",
        children: courseRoutingPath, 
        data: {"mraLevel": 1, "item": "course"}
      },
      { path: "courseinstance",
        children: courseinstanceRoutingPath, 
        data: {"mraLevel": 1, "item": "courseinstance"}
      },
    ]
  }
];

export const manage_server_root_uri:string = "/api/manage";
