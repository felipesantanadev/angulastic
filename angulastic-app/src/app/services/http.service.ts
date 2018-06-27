import {ConfigurationService} from './configuration.service';
import {Configuration} from '../data/configuration';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
    configuration: Configuration;

    constructor(private configurationService: ConfigurationService, private httpClient: HttpClient){
        this.configuration = this.configurationService.getConfiguration();
    }

    get(route: string, authorize: boolean = false) : Observable<any> {
        let headers = this.configureHeaders(authorize);

        return this.httpClient.get(this.configuration.elasticsearch_url + route, { headers: headers});
    }

    post(route: string, data: any, authorize: boolean = false): Observable<any> {
        let headers = this.configureHeaders(authorize);

        return this.httpClient.post(this.configuration.elasticsearch_url + route, data, { headers: headers});
    }

    put(route: string, data: any = null, authorize: boolean = false): Observable<any> {
        let headers = this.configureHeaders(authorize);

        return this.httpClient.put(this.configuration.elasticsearch_url + route, data, { headers: headers});
    }

    private configureHeaders(authorize: boolean) : HttpHeaders{
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        
        if(authorize){
            headers = headers.set('Authorization', 'Bearer ');
        }
        return headers;
    }
}