import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app/app-routing.module';
import { ClusterComponent } from './components/cluster/cluster.component';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { EsIndexComponent } from './components/es-index/es-index.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClusterComponent,
    EsIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
