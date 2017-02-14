import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';


@Injectable()

export class HttpClient{
    constructor(private http: Http){}

    post(url: string, data: any) {
        let headers = new Headers();
        return this.http.post(url, data, {
            headers: headers
        });
    }
}