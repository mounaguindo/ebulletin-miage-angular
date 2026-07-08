import { Component } from '@angular/core';


import { PageHeaderComponent }
from '../../shared/page-header/page-header.component';


import { MatTableModule }
from '@angular/material/table';


import { MatButtonModule }
from '@angular/material/button';


import { MatIconModule }
from '@angular/material/icon';



@Component({

  selector: 'app-bulletins',

  standalone: true,


  imports: [

    PageHeaderComponent,

    MatTableModule,

    MatButtonModule,

    MatIconModule

  ],


  templateUrl: './bulletins.html',

  styleUrl: './bulletins.scss'

})


export class Bulletins {



  displayedColumns = [

    'matricule',

    'employe',

    'mois',

    'salaire',

    'actions'

  ];




  bulletins = [


    {

      matricule: 'EMP001',

      employe: 'Moussa Traoré',

      mois: 'Juin 2026',

      salaire: 350000

    },


    {

      matricule: 'EMP002',

      employe: 'Awa Diarra',

      mois: 'Juin 2026',

      salaire: 300000

    }


  ];

}