import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContentShellComponent } from '../content-shell/content-shell.component';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../core/services/navigation.service';

// import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ContentShellComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
})
export class ShellComponent implements OnInit {
  parentRoutes?: string[];

  constructor(private nav: NavigationService) {}

  ngOnInit(): void {
    this.parentRoutes = this.nav.getAllParentRoutes();
    console.log(this.parentRoutes);
  }
}
