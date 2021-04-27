import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BASE_PATH } from './rick/services/swagger-generated';
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";

import { ListComponent } from './rick/list/list.component';

import { RickService } from './rick/services/swagger-generated/api/rick.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './rick/details/details.component';
import { NavigationHistoryComponent } from './rick/navigation-history/navigation-history.component';
import { CreateNavigationComponent } from './rick/create-navigation/create-navigation.component';




@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    NavigationHistoryComponent,
    CreateNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatPaginatorModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgbModalModule,
    NgbModule
  ],
  entryComponents: [ CreateNavigationComponent],
  providers: [ 
    
    { provide: BASE_PATH, useValue: 'https://localhost:5001' },
    RickService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
