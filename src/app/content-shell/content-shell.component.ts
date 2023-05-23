import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterModule,
} from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { NavigationService } from '../core/services/navigation.service';
import { RouteItem } from '../core/services/navigation.misc';
import { Observable } from 'rxjs/internal/Observable';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-content-shell',
  standalone: true,
  imports: [CommonModule, RouterModule, MatListModule, MatToolbarModule],
  templateUrl: './content-shell.component.html',
  styleUrls: ['./content-shell.component.css'],
})
export class ContentShellComponent implements OnInit {
  parentTitle = this.nav.getParentName();
  children$: Observable<RouteItem[]> = this.nav.getSubRoutes();

  constructor(private nav: NavigationService) {}

  ngOnInit(): void {}
}
