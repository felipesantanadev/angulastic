import { Injectable } from '@angular/core';
import { Configuration } from '../data/configuration';

@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {
    constructor(){}

    getConfiguration(): Configuration {
        let config: Configuration = {
            number_of_nodes: 1,
            elasticsearch_url: 'http://localhost:9200/'
        };

        return config;
    }
}