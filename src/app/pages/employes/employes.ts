import { Component } from '@angular/core';

import { PageHeader } from '../../shared/page-header/page-header';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-employes',
  standalone: true,
  imports: [
    PageHeader,
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './employes.html',
  styleUrl: './employes.scss',
})
export class Employes {

  displayedColumns = [
    'matricule',
    'nom',
    'poste',
    'salaire'
  ];


  employes = [
    {
      matricule: 'EMP001',
      nom: 'Moussa Traoré',
      poste: 'Développeur',
      salaire: 350000
    },
    {
      matricule: 'EMP002',
      nom: 'Awa Diarra',
      poste: 'Comptable',
      salaire: 300000
    }
  ];

}