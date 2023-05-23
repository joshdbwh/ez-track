/**
 * Interface for a route item.
 */
export interface RouteItem {
  /**
   * The name of the route, typically used for display purposes.
   */
  name: string;

  /**
   * The path of the route, used for routing.
   */
  route: string;

  /**
   * Optional array of child routes.
   */
  children?: RouteItem[];
}

/**
 * Type alias for an array of route items.
 */
export type RouteItems = RouteItem[];

/**
 * Array of top-level routes, each with an optional array of child routes.
 */
export const routeItems: RouteItems = [
  {
    name: 'Budget',
    route: '/budget',
    children: [
      { name: 'Finance Overview', route: '/budget/finance-overview' },
      { name: 'Create', route: '/budget/create' },
    ],
  },
  {
    name: 'Link',
    route: '/link',
    children: [
      { name: 'Accounts', route: '/link/accounts' },
      { name: 'Plaid', route: '/link/plaid' },
    ],
  },
];
