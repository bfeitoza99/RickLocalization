import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationFacadeService } from '../services/facade/navigation-facade.service';
import { RickFacadeService } from '../services/facade/rick-facade.service';
import { RickDetailsQueryResponse,    RickNavigationsQueryResponse } from '../services/swagger-generated';

@Component({
  selector: 'app-navigation-history',
  templateUrl: './navigation-history.component.html',
  styleUrls: ['./navigation-history.component.css']
})
export class NavigationHistoryComponent implements OnInit {

  id: number;
  data: RickDetailsQueryResponse;
  table: RickNavigationsQueryResponse;
  displayedColumns = ['dimensionOrigin', 'dimensionDestiny'];
  dataSource: any;

  resultsLength = 0;
  formatedData = [];
  page = 0;
  size = 5;

 

  constructor(private rickService: RickFacadeService,
    private activatedRoute: ActivatedRoute,    
    private navigationService: NavigationFacadeService) { }

  

  

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.data = await this.rickService.getByIdAsync(this.id);

    this.table = await this.navigationService.getNavigationsByRickIdAsync(this.id);
    this.dataSource = this.table.navigations;

    this.getData({pageIndex: this.page, pageSize: this.size});
  }

  
  getData(obj) {
    
    let index=0,
        startingIndex=obj.pageIndex * obj.pageSize,
        endingIndex=startingIndex + obj.pageSize;

    this.formatedData = this.dataSource.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }
  

}
