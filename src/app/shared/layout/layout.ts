import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,

    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  // Titre de l'application
  appTitle = 'eBulletin — Gestion des Salaires';

  // Nombre de notifications
  notifications = 3;

  // Menu de navigation
  menuItems = [
    {
      label: 'Tableau de bord',
      icon: 'dashboard',
      route: '/dashboard'
    },
    {
      label: 'Employés',
      icon: 'people',
      route: '/employes'
    },
    {
      label: 'Bulletins',
      icon: 'description',
      route: '/bulletins'
    }
  ];

  // Ouvrir/Fermer le menu
  toggleMenu(): void {
    this.sidenav.toggle();
  }

}