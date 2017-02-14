import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { UserService } from '../service/user.service';
import { HttpClient } from '../service/http.service';

@Injectable()

export class AdminPageService {


    constructor(private userService: UserService, private http: HttpClient){
    }


}