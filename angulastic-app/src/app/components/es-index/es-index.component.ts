import { Component, OnInit } from '@angular/core';
import { IndexService } from '../../services/index.service';
import { Index } from '../../data/index';

@Component({
  selector: 'app-es-index',
  templateUrl: './es-index.component.html',
  styleUrls: ['./es-index.component.css'],
  providers: [IndexService]
})
export class EsIndexComponent implements OnInit {

  createIndexName = "";
  index: Index;
  indices = [];
  constructor(private indexService: IndexService) { }

  ngOnInit() {
    this.mapIndices()
  }

  createIndex(){
    if(this.createIndexName != ""){
      this.indexService.createIndex(this.createIndexName).subscribe(response => {
        alert('The index ' + this.createIndexName + ' was created!');
        this.mapIndices();
      }, error => {
        alert(error);
      });
    }
  }

  private mapIndices(): void{
    this.indexService.getAll().subscribe(response => {
      for(let index of response){
        this.index = new Index();
        this.index.docs_count = index["docs.count"];
        this.index.health = index.health;
        this.index.index_name = index.index;
        this.index.id = index.uuid;
        this.indices.push(this.index);
      }
    }, error => {
      console.log(error);
    });
  }
}
