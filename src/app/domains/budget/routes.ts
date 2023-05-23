import { Route } from '@angular/router';
import { FinanceOverviewComponent } from './finance-overview/finance-overview.component';

export default [
  { path: '', redirectTo: 'finance-overview', pathMatch: 'full' },
  { path: 'finance-overview', component: FinanceOverviewComponent },
  {
    path: 'create',
    loadComponent: () =>
      import('./create/create.component').then((m) => m.CreateComponent),
  },
] as Route[];
