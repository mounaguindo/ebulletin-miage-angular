import { Component } from '@angular/core';

import { PageHeaderComponent } 
from '../../shared/page-header/page-header.component';

import { MatCardModule } 
from '@angular/material/card';

import { MatIconModule } 
from '@angular/material/icon';


@Component({

  selector: 'app-dashboard',

  standalone: true,

  imports: [

    PageHeaderComponent,

    MatCardModule,

    MatIconModule

  ],

  templateUrl: './dashboard.html',

  styleUrl: './dashboard.scss',

})


export class Dashboard {

}