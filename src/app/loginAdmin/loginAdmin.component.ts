import { Component } from '@angular/core';
import { LoginAdminService } from './loginAdmin.service';
import { Router } from '@angular/router';
// import { UserService } from '../service/user.service';


@Component({
    moduleId: module.id,
    selector: 'login-admin',
    templateUrl: '../../templetes/views/loginAdmin.html',
    styleUrls: ['../../style/layout/LoginAdmin.css']
})

export class LoginAdminComponent {
    constructor(private LoginAdminService: LoginAdminService, private router: Router){}

    wrongPass:boolean;

    loginAdmin(login: any, password: any): any{
        let user: any = {login: login, password: password };
        if(this.LoginAdminService.loginIn(user)){
            sessionStorage.setItem('currentAdmin', JSON.stringify(user));
            this.router.navigate(["adminPage"]);
        }else {
            this.wrongPass=true;
        }

    }

}