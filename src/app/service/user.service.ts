import { Injectable } from '@angular/core'
import 'rxjs/add/operator/toPromise';

import { HttpClient } from './http.service';
import { Router } from '@angular/router';
import { Admin } from '../admin_user/userAdmin';


@Injectable()

export class UserService {

    constructor(private http: HttpClient,private router: Router){}

    admin=Admin;
    currentAdmin: any;

    checkAdmin(){
        this.currentAdmin = JSON.parse(sessionStorage.getItem('currentAdmin'));
        if(this.currentAdmin != null) {
            if(this.currentAdmin.login != this.admin.login){
                this.router.navigate(['loginAdmin']);
            }
        } else {
            this.router.navigate(['loginAdmin']);
        }
    }

}
