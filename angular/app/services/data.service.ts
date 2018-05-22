import { Injectable } from '@angular/core'
import { Http } from "@angular/http";

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

const DB_URL: string = 'api/data'

export class Data {
    id: number;
    name: string;
    url: string;
  
    constructor(id: number, name: string, url: string) {
        this.name = name;
        this.url = url;
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

    setData(id, title, url): Observable<any[]> {
        return this.http
            .put(`${DB_URL}/${id}`, new Data(id, title, url))
            .map(response => response.json());
    }

    addData(id, title, url): Observable<any[]> {
        return this.http
            .post(`${DB_URL}`, new Data(id, title, url))
            .map(response => response.json());
    }
}