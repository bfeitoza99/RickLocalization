import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BASE_PATH } from './rick/services/swagger-generated';
import { RickModule } from './rick/rick.module';
import { ListComponent } from './rick/list/list.component';

import { RickService } from './rick/services/swagger-generated/api/rick.service';
import { HttpBackend, HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ 
    
    { provide: BASE_PATH, useValue: 'https://localhost:5001' },
    RickService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
