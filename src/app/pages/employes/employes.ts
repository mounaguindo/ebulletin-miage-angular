import { Component, OnInit } from '@angular/core';

import { PageHeader } from '../../shared/page-header/page-header';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormsModule } from '@angular/forms';

import { EmployeService } from '../../services/employe';
import { Employe } from '../../models/employe';


@Component({
  selector: 'app-employes',
  standalone: true,
  imports: [
    PageHeader,

    MatTableModule,
    MatButtonModule,

    MatFormFieldModule,
    MatInputModule,

    FormsModule
  ],
  templateUrl: './employes.html',
  styleUrl: './employes.scss'
})
export class Employes implements OnInit {


  displayedColumns = [
    'matricule',
    'nom',
    'poste',
    'salaire'
  ];


  employes: Employe[] = [];


  nouvelEmploye: Employe = {

    id: 0,
    matricule: '',
    nom: '',
    prenom: '',
    poste: '',
    salaire: 0,
    email: ''

  };


  constructor(
    private employeService: EmployeService
  ) {}


  ngOnInit(): void {

    this.chargerEmployes();

  }



  chargerEmployes(): void {

    this.employes =
      this.employeService.getEmployes();

  }



  ajouterEmploye(): void {


    this.nouvelEmploye.id =
      this.employes.length + 1;



    this.employeService.addEmploye(
      this.nouvelEmploye
    );



    this.chargerEmployes();



    this.nouvelEmploye = {

      id: 0,
      matricule: '',
      nom: '',
      prenom: '',
      poste: '',
      salaire: 0,
      email: ''

    };


  }


}