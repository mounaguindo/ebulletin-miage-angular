import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulletinService } from '../../services/bulletin.service';
import { Bulletin } from '../../models/bulletin';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

import { BulletinForm } 
from './bulletin-form/bulletin-form';

@Component({
  selector: 'app-bulletins',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule
  ],
  templateUrl: './bulletins.html',
  styleUrls: ['./bulletins.scss']
})
export class Bulletins implements OnInit {

  private dialog = inject(MatDialog);


  private service = inject(BulletinService);


  bulletins: Bulletin[] = [];



  ngOnInit(): void {

    this.charger();

  }



  charger() {

    this.service.getAll().subscribe({

      next: data => {

        console.log("Bulletins reçus :", data);

        this.bulletins = data;

      },

      error: err => {

        console.log("Erreur chargement bulletins :", err);

      }

    });

  }




  ajouter(){

  console.log("Clic sur ajouter");


  const dialogRef = this.dialog.open(
    BulletinForm,
    {
      width:'500px',
      data:null
    }
  );


  dialogRef.afterClosed()
  .subscribe(result=>{


    console.log("Données reçues :", result);


    if(result){


      this.service.create(result)
      .subscribe({

        next:()=>{

          this.charger();

        },

        error:err=>{

          console.log("Erreur ajout :",err);

        }

      });


    }


  });


}




  modifier(bulletin: Bulletin) {

    console.log("Modification du bulletin :", bulletin);

    // On ajoutera ici l'ouverture du formulaire de modification

  }




  supprimer(id:number) {


    if(confirm("Supprimer ce bulletin ?")) {


      this.service.delete(id).subscribe({

        next: () => {

          this.charger();

        },

        error: err => {

          console.log("Erreur suppression :", err);

        }

      });


    }


  }





  telecharger(id:number) {


    this.service.telechargerPdf(id)

    .subscribe({

      next: blob => {


        const url = window.URL.createObjectURL(blob);


        const a = document.createElement('a');


        a.href = url;


        a.download = "bulletin.pdf";


        a.click();


        window.URL.revokeObjectURL(url);


      },


      error: err => {

        console.log("Erreur téléchargement PDF :", err);

      }

    });


  }


}