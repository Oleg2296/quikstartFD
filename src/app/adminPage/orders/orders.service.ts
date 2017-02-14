import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { UserService } from '../../service/user.service';
import { HttpClient } from '../../service/http.service';
import { Orders } from "../../admin_user/orders";


@Injectable()

export class OrdersService{
    private orders: any = Orders;
    private archOrd: any[]=[];
    archId:number = 0;

    constructor(private userService: UserService, private http: HttpClient){
    }

    getOrder(){
        return this.orders;
    }

    archOrder(x:any){
        for (let i in this.orders){
            if(this.orders[i].orderId == x.orderId){
                this.archOrd.push(this.orders[i]);
                this.orders.splice(i,1);
            }
        }
        // console.log(this.archOrd);
    }

    deleteOrd(x:any){
        for (let i in this.orders){
            if(this.orders[i].orderId == x.orderId){
                this.orders.splice(i,1);
            }
        }
    }

    getArchOrd(){
        return this.archOrd;
    }
}

