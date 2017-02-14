
//modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';

//Components
import { LoginAdminComponent } from './loginAdmin/loginAdmin.component';
import { AdminPageComponent } from './adminPage/adminPage.component';

import { OrdersComponent } from './adminPage/orders/orders.component';
//Services
import { AdminPageService } from './adminPage/adminPage.service';
import { LoginAdminService } from './loginAdmin/loginAdmin.service';





const childRout: Routes =  [
  { path: "orders", component: OrdersComponent }
  ];

const routes: Routes = [
    {
        path: '',
        redirectTo: 'loginAdmin',
        pathMatch: 'full'
    },
    { path: 'loginAdmin', component: LoginAdminComponent },
    { path: 'adminPage', component: AdminPageComponent,
        children: childRout
    }
];

const Router: ModuleWithProviders = RouterModule.forRoot(routes);


@NgModule({
    imports: [Router],
    providers: [ AdminPageService, LoginAdminService],
    exports: [RouterModule],

})

export class AppRoutingModule {}


// { path: 'adminPage',
//     component: AdminPageComponent,
//     children: [
//     {
//         path: 'orders',
//         component: OrdersComponent
//     }
// ]
// }
