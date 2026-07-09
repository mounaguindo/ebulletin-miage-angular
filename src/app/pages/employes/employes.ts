import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Employe } from '../../models/employe';
import { EmployeService } from '../../services/employe';

import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { EmployeFormDialog } from './employe-form-dialog';

import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import {
  MatTableDataSource,
  MatTableModule
} from '@angular/material/table';

import {
  MatDialog,
  MatDialogModule
} from '@angular/material/dialog';

import {
  MatSnackBar,
  MatSnackBarModule
} from '@angular/material/snack-bar';

import {
  MatFormFieldModule
} from '@angular/material/form-field';

import {
  MatInputModule
} from '@angular/material/input';

import {
  MatSort,
  MatSortModule
} from '@angular/material/sort';

import {
  MatPaginator,
  MatPaginatorModule
} from '@angular/material/paginator';

@Component({
  selector: 'app-employes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,

    PageHeaderComponent,

    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './employes.html'
})
export class Employes {

  private service = inject(EmployeService);
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  dataSource = new MatTableDataSource<Employe>();

  tousLesEmployes: Employe[] = [];

  recherche = '';

  displayedColumns = [
    'matricule',
    'nom',
    'poste',
    'departement',
    'salaireBrut',
    'actif',
    'actions'
  ];

  ngOnInit(): void {
    this.chargerEmployes();
  }

  chargerEmployes(): void {

    this.tousLesEmployes =
      this.service.getEmployes();

    this.dataSource.data =
      [...this.tousLesEmployes];

    setTimeout(() => {

      this.dataSource.sort =
        this.sort;

      this.dataSource.paginator =
        this.paginator;

    });

  }

  rechercher(): void {

    const valeur =
      this.recherche
        .toLowerCase()
        .trim();

    if (!valeur) {

      this.dataSource.data =
        [...this.tousLesEmployes];

      return;

    }

    this.dataSource.data =
      this.tousLesEmployes.filter(e =>

        e.nom.toLowerCase().includes(valeur) ||

        e.prenom.toLowerCase().includes(valeur) ||

        e.matricule.toLowerCase().includes(valeur) ||

        e.poste.toLowerCase().includes(valeur) ||

        e.departement.toLowerCase().includes(valeur)

      );

  }

  ouvrirFormulaire(): void {

    const dialogRef =
      this.dialog.open(
        EmployeFormDialog,
        {
          width: '600px',
          data: null
        }
      );

    dialogRef.afterClosed()
      .subscribe(result => {

        if (result) {

          this.chargerEmployes();

        }

      });

  }

  modifier(employe: Employe): void {

    const dialogRef =
      this.dialog.open(
        EmployeFormDialog,
        {
          width: '600px',
          data: employe
        }
      );

    dialogRef.afterClosed()
      .subscribe(result => {

        if (result) {

          this.chargerEmployes();

        }

      });

  }

  supprimer(id: number): void {

    if (!confirm('Voulez-vous vraiment supprimer cet employé ?')) {

      return;

    }

    this.service.deleteEmploye(id);

    this.chargerEmployes();

    this.snackBar.open(
      'Employé supprimé avec succès',
      'OK',
      {
        duration: 2000
      }
    );

  }

}