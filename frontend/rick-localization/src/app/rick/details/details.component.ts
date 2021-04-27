import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RickFacadeService } from '../services/facade/rick-facade.service';
import { RickDetailsQueryResponse } from '../services/swagger-generated';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateNavigationComponent } from '../create-navigation/create-navigation.component';

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
    private modalService: NgbModal,
    ) { }

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;

    this.data = await this.rickService.getByIdAsync(this.id);
  }

  createNavigation(id: number){
    const modalInstance = this.modalService.open(CreateNavigationComponent, {
      size: "lg",
      backdrop: "static",
    });

    modalInstance.componentInstance.id = this.id;

    modalInstance.result.then(
      async (data) => {
        if (data) {
        }

      },
      (error) => console.warn("form closed", error)
    );
  }

  navigationHistory(id: number){
    this.router.navigate(["rick/navigation-history", id]);    
  }

}
