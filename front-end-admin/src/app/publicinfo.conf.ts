import { Routes } from '@angular/router';

import { PublicinfoComponent } from './publicinfo/publicinfo.component';

//Import routing paths
import {generalinfoRoutingPath, faqRoutingPath, eventRoutingPath,  } from './publicinfo/publicinfo-routing.path';

export const PublicinfoRoutes: Routes = [
  { path: 'publicinfo', 
    component: PublicinfoComponent,
    children: [ 
      {path: '',  redirectTo: 'generalinfo', pathMatch: 'full'},

      { path: "generalinfo",
        children: generalinfoRoutingPath, 
        data: {"mraLevel": 1, "item": "generalinfo"}
      },
      { path: "faq",
        children: faqRoutingPath, 
        data: {"mraLevel": 1, "item": "faq"}
      },
      { path: "event",
        children: eventRoutingPath, 
        data: {"mraLevel": 1, "item": "event"}
      },
    ]
  }
];

export const publicinfo_server_root_uri:string = "/api/publicinfo";
