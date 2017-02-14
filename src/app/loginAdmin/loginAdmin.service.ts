import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { UserService } from '../service/user.service';
import { HttpClient } from '../service/http.service';

import { Admin } from '../admin_user/userAdmin';

@Injectable()

export class LoginAdminService{

    admin=Admin;

    constructor(private userService: UserService,private http: HttpClient){}

    loginIn(user:any){
        if(user.login==this.admin.login && user.password==this.admin.password) {
            return true;
        }else{
            return false;
        }
    }
    // loginIn(user:any):any{
    //     return this.http.post("link", user).toPromise()
    //         .then(
    //             (data: any) => {
    //                 var obj=JSON.parse(data._body);
    //                 this.http.setToken(obj.token);
    //             })
    // }
}