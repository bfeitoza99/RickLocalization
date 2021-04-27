import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RickFacadeService } from '../services/facade/rick-facade.service';
import { RickDetailsQueryResponse } from '../services/swagger-generated';

import { CreateNavigationComponent } from '../create-navigation/create-navigation.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: number;
  data: RickDetailsQueryResponse;
  constructor(private rickService: RickFacadeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
    ) { }

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;

    this.data = await this.rickService.getByIdAsync(this.id);
  }

  createNavigation(id: number){
    const dialogRef = this.dialog.open(CreateNavigationComponent, {
      width: '300px',
      height: '270px',
      backdropClass: 'background-color-dialog',      
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  navigationHistory(id: number){
    this.router.navigate(["rick/navigation-history", id]);    
  }

}
