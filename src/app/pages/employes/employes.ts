import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Employe } from '../../models/employe';

import { EmployeService } 
from '../../services/employe';


import { MatButtonModule }
from '@angular/material/button';


import { MatTableModule }
from '@angular/material/table';


import { MatDialog, MatDialogModule }
from '@angular/material/dialog';


import { EmployeFormDialog }
from './employe-form-dialog';


// Vérifie ce chemin selon ton projet
import { PageHeaderComponent }
from '../../shared/page-header/page-header.component';



@Component({

  selector:'app-employes',

  standalone:true,


  imports:[

    CommonModule,

    MatButtonModule,

    MatTableModule,

    MatDialogModule,

    PageHeaderComponent

  ],


  templateUrl:'./employes.html'

})


export class Employes {



  private service = inject(EmployeService);


  private dialog = inject(MatDialog);




  employes: Employe[] = [];





  displayedColumns = [


    'matricule',

    'nom',

    'poste',

    'departement',

    'salaireBrut',

    'actif',

    'actions'


  ];







  ngOnInit(){


    this.chargerEmployes();


  }








  chargerEmployes(){


    this.employes = this.service.getEmployes();


  }









  ouvrirFormulaire(){



    const dialogRef = this.dialog.open(


      EmployeFormDialog,


      {


        width:'600px',

        data:null


      }


    );






    dialogRef.afterClosed()

    .subscribe(result=>{



      if(result){


        this.chargerEmployes();


      }



    });



  }









  modifier(employe:Employe){



    const dialogRef = this.dialog.open(


      EmployeFormDialog,


      {


        width:'600px',


        data:employe



      }



    );







    dialogRef.afterClosed()

    .subscribe(result=>{



      if(result){


        this.chargerEmployes();


      }



    });



  }









  supprimer(id:number){



    this.service.deleteEmploye(id);



    this.chargerEmployes();



  }





}