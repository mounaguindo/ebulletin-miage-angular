import { Injectable } from '@angular/core';
import { Employe } from '../models/employe';


@Injectable({
  providedIn: 'root'
})
export class EmployeService {


  private employes: Employe[] = [

    {
      id: 1,
      matricule: 'EMP001',
      nom: 'Traoré',
      prenom: 'Moussa',
      poste: 'Développeur',
      salaire: 350000,
      email: 'moussa@example.com'
    },

    {
      id: 2,
      matricule: 'EMP002',
      nom: 'Diarra',
      prenom: 'Awa',
      poste: 'Comptable',
      salaire: 300000,
      email: 'awa@example.com'
    }

  ];


  getEmployes(): Employe[] {

    return this.employes;

  }


  addEmploye(employe: Employe): void {

    this.employes.push(employe);

  }


  deleteEmploye(id: number): void {

    this.employes = this.employes.filter(
      employe => employe.id !== id
    );

  }

}