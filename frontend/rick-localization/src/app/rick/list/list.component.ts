import { Component, OnInit } from '@angular/core';
import { RickFacadeService } from '../services/facade/rick-facade.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private rickService: RickFacadeService,) { }

  async ngOnInit() {

    let data = await this.rickService.getAllAsync();

    console.log(data.ricks);
  }

}
