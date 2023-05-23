import { Route } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';

export default [
  { path: '', redirectTo: 'accounts', pathMatch: 'full' },
  { path: 'accounts', component: AccountsComponent },
  {
    path: 'plaid',
    loadComponent: () =>
      import('./plaid/plaid.component').then((m) => m.PlaidComponent),
  },
] as Route[];
