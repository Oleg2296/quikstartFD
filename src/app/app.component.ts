import { Component } from '@angular/core';

import { UserService } from './service/user.service';
import { HttpClient } from './service/http.service';

@Component({
    selector: 'my-app',
    providers: [ UserService, HttpClient],
    templateUrl: "../templetes/myApp.html"
})

export class AppComponent{
    constructor(private userService: UserService){}
}

