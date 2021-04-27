import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import '@angular/localize/init'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { runInThisContext } from 'node:vm';
import { NavigationFacadeService } from '../services/facade/navigation-facade.service';
import { RickCreateNavigationCommandRequest, RickLastDimensionNavigatedQueryResponse } from '../services/swagger-generated';

@Component({
  selector: 'app-create-navigation',
  templateUrl: './create-navigation.component.html',
  styleUrls: ['./create-navigation.component.css']
})
export class CreateNavigationComponent implements OnInit {

  constructor(private navigationService: NavigationFacadeService,
    public dialogRef: MatDialogRef<CreateNavigationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar) { }

    createNavigationForm:FormGroup;
    lastDimension: RickLastDimensionNavigatedQueryResponse;
    public submitting= false;
    public showCreateResultMessage = false;

  get dimensionOrigin() {
    return this.createNavigationForm.get("dimensionOrigin");
  }
  get dimensionDestiny() {
    return this.createNavigationForm.get("dimensionDestiny");
  }

  async ngOnInit() {
    this.createNavigationForm = this.formBuilder.group({ 
        dimensionOrigin: new FormControl('', [Validators.required]),
        dimensionDestiny: new FormControl('', [Validators.required])
    });
    this.lastDimension = await this.navigationService.getLastNavigationByRickIdAsync(this.data.id);

    this.dimensionOrigin.setValue(this.lastDimension.currentDimension);
  }

  
  closeDialog(){
    this.dialogRef.close();
  }

  getFields():RickCreateNavigationCommandRequest {
    return {
      rickId: this.data.id,
      dimensionDestiny: this.dimensionDestiny.value,
      dimensionOrigin: this.dimensionOrigin.value
    }
  }

  onValueChanges(): void {
    const controls: Array<AbstractControl> = [
      this.dimensionDestiny,
      this.dimensionOrigin,    
    ];

    controls.forEach((control) => {
      control.valueChanges.subscribe(() => {        
      
      });
    });
  }

  async onSubmit() {
    this.onValueChanges();
    console.log(this.createNavigationForm)
    console.log(this.dimensionDestiny)

    if (this.createNavigationForm.invalid) {
      return;
    }

    let message = ""
    let className = ""
    this.submitting= true;
    let result = await this.navigationService.createNavigationAsync(this.getFields())
    this.submitting = false;


    message= "Sucesso!"
    className = "snackBarSucces"
 
    if(!result.isSucess)  {
      className = "snackBarFailed"
      message = "Não foi possível completar sua requisão, por favor contate um administrador do sistema.";
    }
    

       const snackBarRef = this._snackBar.open(message, "" , {
         duration: 500,
         panelClass: [className]
       })

       snackBarRef.afterDismissed().subscribe(info => {
          this.closeDialog();
      });
    
  }

}
