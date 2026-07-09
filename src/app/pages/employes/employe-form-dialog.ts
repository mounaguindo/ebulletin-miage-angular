import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup
} from '@angular/forms';

import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule
} from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

import { EmployeService } from '../../services/employe';
import { Employe } from '../../models/employe';


@Component({
  selector: 'app-employe-form-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './employe-form-dialog.html'
})
export class EmployeFormDialog {

  private fb = inject(FormBuilder);
  private service = inject(EmployeService);
  private snack = inject(MatSnackBar);
  public dialogRef = inject(MatDialogRef<EmployeFormDialog>);

  form!: FormGroup;

  public isEdit = false;


  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Employe | null
  ) {

    this.isEdit = !!data;

    this.form = this.fb.group({

      matricule: [
        data?.matricule ?? '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      nom: [
        data?.nom ?? '',
        Validators.required
      ],

      prenom: [
        data?.prenom ?? '',
        Validators.required
      ],

      email: [
        data?.email ?? '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      poste: [
        data?.poste ?? '',
        Validators.required
      ],

      departement: [
        data?.departement ?? '',
        Validators.required
      ],

      salaireBrut: [
        data?.salaireBrut ?? 0,
        [
          Validators.required,
          Validators.min(1)
        ]
      ],

      dateEmbauche: [
        data?.dateEmbauche ?? '',
        Validators.required
      ],

      actif: [
        data?.actif ?? true
      ]

    });

  }


  submit() {

    if (this.form.invalid) {
      return;
    }


    const employe: Employe = {
      ...this.form.value,
      id: this.data?.id
    };


    if (this.isEdit) {

      this.service.updateEmploye(employe)
        .subscribe({

          next: () => {

            this.snack.open(
              'Employé modifié avec succès',
              'OK',
              {
                duration: 2000
              }
            );

            this.dialogRef.close(true);

          },

          error: (err) => {

            console.error(err);

            this.snack.open(
              'Erreur lors de la modification',
              'OK',
              {
                duration: 3000
              }
            );

          }

        });


    } else {


      this.service.addEmploye(employe)
        .subscribe({

          next: () => {

            this.snack.open(
              'Employé ajouté avec succès',
              'OK',
              {
                duration: 2000
              }
            );

            this.dialogRef.close(true);

          },

          error: (err) => {

            console.error(err);

            this.snack.open(
              'Erreur lors de l’ajout',
              'OK',
              {
                duration: 3000
              }
            );

          }

        });

    }

  }

}