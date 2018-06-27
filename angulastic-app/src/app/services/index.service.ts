import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Index } from '../data/index';
import { map } from 'rxjs/operators';

@Injectable()
export class IndexService {
    constructor(private httpService: HttpService) {}

    createIndex(indexName: string): Observable<any> {
        return this.httpService.put(indexName + "?pretty");
    }

    getAll(): Observable<any> {
        return this.httpService.get('_cat/indices?format=json');
    }
}