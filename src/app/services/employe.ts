import { Injectable } from '@angular/core';
import { Employe } from '../models/employe';


@Injectable({
  providedIn: 'root'
})
export class EmployeService {


  private employes: Employe[] = [];



  constructor(){}



  getEmployes(): Employe[] {

    return this.employes;

  }




  addEmploye(employe: Employe): void {

    this.employes.push(employe);

  }





  updateEmploye(employe: Employe): void {


    const index = this.employes.findIndex(

      e => e.id === employe.id

    );


    if(index !== -1){

      this.employes[index] = employe;

    }


  }





  deleteEmploye(id:number): void {


    this.employes = this.employes.filter(

      e => e.id !== id

    );


  }



}