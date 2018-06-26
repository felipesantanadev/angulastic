import {ElasticsearchInstance} from '../data/elasticsearch-instance';
import {HttpService} from '../services/http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ClusterService {
    constructor(private httpService: HttpService){

    }

    getInstance(): Observable<ElasticsearchInstance> {
        return this.httpService.get("");
    }
}