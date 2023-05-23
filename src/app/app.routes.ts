import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'link',
    loadChildren: () => import('./domains/link/routes'),
  },
  {
    path: 'budget',
    loadChildren: () => import('./domains/budget/routes'),
  },
];
