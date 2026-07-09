import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employe, EmployeDTO } from '../models/employe';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private http = inject(HttpClient);

  private api = `${environment.apiUrl}/employes`;

  getEmployes(): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.api);
  }

  getEmploye(id: number): Observable<Employe> {
    return this.http.get<Employe>(`${this.api}/${id}`);
  }

  addEmploye(employe: EmployeDTO): Observable<Employe> {
    return this.http.post<Employe>(this.api, employe);
  }

  updateEmploye(employe: Employe): Observable<Employe> {
    return this.http.put<Employe>(
      `${this.api}/${employe.id}`,
      employe
    );
  }

  deleteEmploye(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }

}