import { Injectable } from "@angular/core";
import { NavigationService, RickCreateNavigationCommandRequest, RickCreateNavigationCommandResponse, RickLastDimensionNavigatedQueryResponse, RickNavigationsQueryResponse } from "../swagger-generated";

@Injectable({
    providedIn: 'root'
})
export class NavigationFacadeService { 

    constructor(private navigationService: NavigationService){}

    public  getNavigationsByRickIdAsync(id:number): Promise<RickNavigationsQueryResponse>{
        return new Promise((resolve, reject) => {
    
            const successCallback = async (data: RickNavigationsQueryResponse) => {
              resolve(data);
            };
            const errorCallback = error => reject(error);
      
            this.navigationService.navigationsRickIdGet(id)
            .subscribe(successCallback, errorCallback);
          });
        }
    
        public  getLastNavigationByRickIdAsync(id:number): Promise<RickLastDimensionNavigatedQueryResponse>{
            return new Promise((resolve, reject) => {
        
                const successCallback = async (data: RickLastDimensionNavigatedQueryResponse) => {
                  resolve(data);
                };
                const errorCallback = error => reject(error);
          
                this.navigationService.lastNavigationRickIdGet(id)
                .subscribe(successCallback, errorCallback);
              });
            }

            public  createNavigationAsync(rickNavigation: RickCreateNavigationCommandRequest): Promise<RickCreateNavigationCommandResponse> {
                return new Promise((resolve, reject) => {
            
                  const successCallback = async (data: RickCreateNavigationCommandResponse) => {
                    resolve(data);
                  };
                  const errorCallback = error => {
                    reject(error);
                  };
            
                  this.navigationService.createPost(rickNavigation)
                    .subscribe(successCallback, errorCallback);
                });
              } 
}