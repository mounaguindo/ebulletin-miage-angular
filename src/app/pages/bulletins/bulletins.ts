import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulletinService } from '../../services/bulletin.service';
import { Bulletin } from '../../models/bulletin';

@Component({
  selector: 'app-bulletins',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bulletins.html',
  styleUrls: ['./bulletins.scss']
})
export class Bulletins implements OnInit {

  private service = inject(BulletinService);

  bulletins: Bulletin[] = [];

  ngOnInit(): void {

    this.charger();

  }

  charger() {

    this.service.getAll().subscribe({

      next: data => this.bulletins = data,

      error: err => console.log(err)

    });

  }

  supprimer(id:number){

    if(confirm("Supprimer ce bulletin ?")){

      this.service.delete(id).subscribe(()=>{

        this.charger();

      });

    }

  }

  telecharger(id:number){

    this.service.telechargerPdf(id)

    .subscribe(blob=>{

        const url=window.URL.createObjectURL(blob);

        const a=document.createElement('a');

        a.href=url;

        a.download="bulletin.pdf";

        a.click();

        window.URL.revokeObjectURL(url);

    });

}

}