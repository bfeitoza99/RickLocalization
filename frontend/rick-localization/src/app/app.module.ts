import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BASE_PATH, NavigationService } from './rick/services/swagger-generated';

import { ListComponent } from './rick/list/list.component';

import { RickService } from './rick/services/swagger-generated/api/rick.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';




import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './rick/details/details.component';
import { NavigationHistoryComponent } from './rick/navigation-history/navigation-history.component';
import { CreateNavigationComponent } from './rick/create-navigation/create-navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





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
    FormsModule, 
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatSnackBarModule
   
    
  ],
  entryComponents: [ CreateNavigationComponent],
  providers: [ 
    
    { provide: BASE_PATH, useValue: 'https://localhost:5001' },
    RickService,
    NavigationService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
