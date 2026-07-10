import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
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
  private authService = inject(AuthService);

  masquer = true;

  form = this.fb.group({

  username: ['', Validators.required],

  password: ['', Validators.required]

});

  connexion() {

  if (this.form.invalid) {
    return;
  }

  this.authService.login(this.form.getRawValue() as any).subscribe({

    next: (response) => {

      if (response.success) {

        alert(response.message);

        this.router.navigate(['/dashboard']);

      } else {

        alert(response.message);

      }

    },

    error: (err) => {

      console.error(err);

      alert("Erreur de connexion avec le serveur.");

    }

  });

}

  retour() {

    this.router.navigate(['/dashboard']);

  }

}