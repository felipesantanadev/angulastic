import { Component, OnInit } from '@angular/core';
import {ClusterService} from '../../services/cluster.service';

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.css'],
  providers: [ClusterService]
})
export class ClusterComponent implements OnInit {
  clusterModel = {
    cluster_name: ""
  };

  constructor(private clusterService: ClusterService) { }

  ngOnInit() {
    this.clusterService.getInstance().subscribe(response => {
      this.clusterModel.cluster_name = response.cluster_name;
    });
  }

}
