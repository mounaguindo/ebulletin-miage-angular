import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  private fb = inject(FormBuilder);
  private router = inject(Router);

  masquer = true;

  form = this.fb.group({

    email: ['', [
      Validators.required,
      Validators.email
    ]],

    password: ['', Validators.required]

  });

  connexion() {

    if (this.form.invalid) {
      return;
    }

    alert("Connexion bientôt reliée à Spring Boot");

  }

  retour() {

    this.router.navigate(['/dashboard']);

  }

}