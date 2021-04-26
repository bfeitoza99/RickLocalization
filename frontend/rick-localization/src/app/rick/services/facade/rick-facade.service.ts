import { Injectable } from "@angular/core";
import { RickDetailsQueryResponse, RickQueryResponse, RickService } from "../swagger-generated";

@Injectable({
    providedIn: 'root'
})
export class RickFacadeService {
    constructor(private rickService: RickService,){}


   public  getById(id:number): Promise<RickDetailsQueryResponse>{
    return new Promise((resolve, reject) => {

        const successCallback = async (data: RickDetailsQueryResponse) => {
          resolve(data);
        };
        const errorCallback = error => reject(error);
  
        this.rickService.detailsRickIdGet(id)
        .subscribe(successCallback, errorCallback);
      });
    }

    public  getAll(): Promise<RickQueryResponse>{
        return new Promise((resolve, reject) => {
    
            const successCallback = async (data: RickQueryResponse) => {
              resolve(data);
            };
            const errorCallback = error => reject(error);
      
            this.rickService.rickGet()
            .subscribe(successCallback, errorCallback);
          });
        }
}