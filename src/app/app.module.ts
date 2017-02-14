//Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from "ngx-modal";

//Router module
import { AppRoutingModule } from './app.router';

//Components
import { AppComponent } from './app.component';
import { LoginAdminComponent } from './loginAdmin/loginAdmin.component';
import { AdminPageComponent } from './adminPage/adminPage.component';
import { OrdersComponent } from './adminPage/orders/orders.component';
//Services
import { HttpClient } from './service/http.service';
import { UserService } from './service/user.service';
import { OrdersService } from './adminPage/orders/orders.service';


@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule, AppRoutingModule, ModalModule],
    declarations: [ AppComponent, LoginAdminComponent, AdminPageComponent, OrdersComponent],
    providers: [ UserService, HttpClient, OrdersService],
    bootstrap: [ AppComponent ]
})

export class AppModule { }


