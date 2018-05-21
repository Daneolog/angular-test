import { Injectable } from '@angular/core'
import { Http } from "@angular/http";

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

const DB_URL: string = 'db.json'

export class Data {
    text: string;
    target: string;
  
    constructor(text: string, target: string) {
        this.text = text;
        this.target = target;
    }
}

@Injectable()
export class DataService {
    data: any[];

    constructor(private http: Http) {
        // this.data = [new Data('numero uno', 'http://google.com'), 
        //              new Data('numero due', 'http://yahoo.com'),
        //              new Data('numero tre', 'https://duckduckgo.com/'),
        //              new Data('numero quattro', 'https://bing.com/')];
    }

    getData(): Observable<any[]> {
        return this.http
            .get(DB_URL)
            .map(response => response.json());        
    }

    addData() {
        // return this.http
        //     .put(`${DB_URL}/, )
        //     .map
    }
}