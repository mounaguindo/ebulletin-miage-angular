import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule
} from '@angular/material/dialog';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';

import { Bulletin } from '../../../models/bulletin';


@Component({
  selector: 'app-bulletin-form',
  standalone:true,

  imports:[
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],

  templateUrl:'./bulletin-form.html',
  styleUrls:['./bulletin-form.scss']
})


export class BulletinForm {


form;


constructor(

private fb:FormBuilder,

private dialogRef:MatDialogRef<BulletinForm>,

@Inject(MAT_DIALOG_DATA)
public data:Bulletin|null


){


this.form=this.fb.group({

mois:[
data?.mois || '',
Validators.required
],


annee:[
data?.annee || new Date().getFullYear(),
Validators.required
],


salaireBrut:[
data?.salaireBrut || 0,
Validators.required
],


retenues:[
data?.retenues || 0,
Validators.required
],


salaireNet:[
data?.salaireNet || 0,
Validators.required
],


employeId:[

'',

Validators.required

]


});


}




enregistrer(){


console.log("Formulaire :",this.form.value);



if(this.form.valid){


this.dialogRef.close({

...this.form.value,

employe:{
id:this.form.value.employeId
}

});


}

else{

console.log("Formulaire invalide");

}


}




fermer(){

this.dialogRef.close();

}


}