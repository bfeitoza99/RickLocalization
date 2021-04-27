import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RickFacadeService } from '../services/facade/rick-facade.service';
import { RickQueryResponse, RickResponse } from '../services/swagger-generated';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private rickService: RickFacadeService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  data : RickQueryResponse;
  formatedData = [];
  

  page = 0;
  size = 4;

  async ngOnInit() {

    this.data = await this.rickService.getAllAsync();
    

    this.getData({pageIndex: this.page, pageSize: this.size});
  }

  getData(obj) {
    
    let index=0,
        startingIndex=obj.pageIndex * obj.pageSize,
        endingIndex=startingIndex + obj.pageSize;

    this.formatedData = this.data.ricks.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }

  detail(id:number) {
    this.router.navigate(["details", id], { relativeTo: this.activatedRoute });    
  }
  
}


