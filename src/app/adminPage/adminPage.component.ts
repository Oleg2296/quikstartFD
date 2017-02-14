import { Component, OnInit } from '@angular/core';
import { AdminPageService } from './adminPage.service'
import { Router } from '@angular/router';

import { UserService } from '../service/user.service';


@Component({
    moduleId: module.id,
    selector: 'admin-page',
    templateUrl: '../../templetes/views/AdminPage.html'
})

export class AdminPageComponent implements OnInit {

    constructor(private adminService: AdminPageService, private router: Router, private userService: UserService) {

    }

    rout(){
        this.router.navigate(['orders']);
    }

    ngOnInit() {
        this.userService.checkAdmin();
    }
}
