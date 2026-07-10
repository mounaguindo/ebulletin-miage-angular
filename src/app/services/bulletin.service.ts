import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Bulletin } from '../models/bulletin';
import { LigneBulletin } from '../models/ligne-bulletin';

@Injectable({
  providedIn: 'root'
})
export class BulletinService {

  private http = inject(HttpClient);

  private api = 'http://localhost:8080/api/bulletins';

  getAll(): Observable<Bulletin[]> {

    return this.http.get<Bulletin[]>(this.api);

  }

  getById(id:number): Observable<Bulletin>{

    return this.http.get<Bulletin>(`${this.api}/${id}`);

  }

  getByEmploye(id:number): Observable<Bulletin[]>{

    return this.http.get<Bulletin[]>(`${this.api}/employe/${id}`);

  }

  create(bulletin:Bulletin):Observable<Bulletin>{

    return this.http.post<Bulletin>(this.api, bulletin);

  }

  update(id:number, bulletin:Bulletin):Observable<Bulletin>{

    return this.http.put<Bulletin>(`${this.api}/${id}`, bulletin);

  }

  delete(id:number){

    return this.http.delete(`${this.api}/${id}`);

  }

  getLignes(id:number):Observable<LigneBulletin[]>{

    return this.http.get<LigneBulletin[]>(`${this.api}/${id}/lignes`);

  }

  ajouterLigne(ligne:LigneBulletin){

    return this.http.post(`${this.api}/ligne`, ligne);

  }

  supprimerLigne(id:number){

    return this.http.delete(`${this.api}/ligne/${id}`);

  }

  telechargerPdf(id:number){

    return this.http.get(

        `http://localhost:8080/api/bulletins/${id}/pdf`,

        {

            responseType:'blob'

        }

    );

}

}