import { Routes } from '@angular/router';

import { FilesComponent } from './files/files.component';

//Import routing paths
import {mfileRoutingPath, mfilelabelsRoutingPath,  } from './files/files-routing.path';

export const FilesRoutes: Routes = [
  { path: 'files', 
    component: FilesComponent,
    children: [ 
      {path: '',  redirectTo: 'mfile', pathMatch: 'full'},

      { path: "mfile",
        children: mfileRoutingPath, 
        data: {"mraLevel": 1, "item": "mfile"}
      },
      { path: "mfilelabels",
        children: mfilelabelsRoutingPath, 
        data: {"mraLevel": 1, "item": "mfilelabels"}
      },
    ]
  }
];

export const files_server_root_uri:string = "/api/files";
/*>>> Please check this recent updates and merge with existing ones***
**Date: Sat Mar 30 2019 19:22:00 GMT-0700 (Pacific Daylight Time)

import { Routes } from '@angular/router';

import { FilesComponent } from './files/files.component';

//Import routing paths
import {mfileRoutingPath, mfilelabelsRoutingPath,  } from './files/files-routing.path';

export const FilesRoutes: Routes = [
  { path: 'files', 
    component: FilesComponent,
    children: [ 
      {path: '',  redirectTo: 'mfile', pathMatch: 'full'},

      { path: "mfile",
        children: mfileRoutingPath, 
        data: {"mraLevel": 1, "item": "mfile"}
      },
      { path: "mfilelabels",
        children: mfilelabelsRoutingPath, 
        data: {"mraLevel": 1, "item": "mfilelabels"}
      },
    ]
  }
];

export const files_server_root_uri:string = "/api/files";**** End of recent updates.<<<*/
