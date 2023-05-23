import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, filter, map } from 'rxjs';
import { RouteItem, RouteItems, routeItems } from './navigation.misc';

/**
 * Service for managing navigation.
 */
@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  /**
   * The current route tree.
   */
  private currentRouteTree?: RouteItem;

  /**
   * The current top-level route.
   */
  private currentTopLevelRoute: string = '';

  /**
   * The current child routes.
   */
  private currentChildRoutes: RouteItem[] = [];

  /**
   * Constructs the service and injects the Router.
   * @param router - The Angular Router.
   */
  constructor(private router: Router) {}

  /**
   * Gets the parent route from the current URL.
   * @returns The parent route.
   */
  getParentRoute(): string {
    return this.router.url.split('/')[1];
  }

  getParentName(): string {
    const parentRoute = this.getParentRoute();
    const parentName = routeItems.find(
      (route) => route.route === parentRoute
    )?.name;
    return parentName !== undefined ? parentName : '';
  }

  getAllParentRoutes(): string[] {
    return routeItems.map((route) => route.route);
  }

  getAllParentNames(): string[] {
    return routeItems.map((route) => route.name);
  }

  /**
   * Gets the sub-routes of the current route.
   * @returns An Observable that emits an array of child routes whenever the route changes.
   */
  getSubRoutes(): Observable<RouteItem[]> {
    // Create an observable that emits NavigationEnd events
    const routeObject = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ) as Observable<NavigationEnd>;

    return routeObject.pipe(
      map((event) => {
        // Get the top-level route from the URL
        const e = event.url.split('/')[1];

        // If there's no top-level route, return an empty array
        if (e === undefined) {
          return [];
        }
        // If the top-level route hasn't changed and we already have its route tree, return the current route tree's children.
        if (e === this.currentTopLevelRoute && this.currentRouteTree) {
          return this.currentRouteTree.children || [];
        }
        // Find the route tree in the routeItems array
        const routeTree = routeItems.find((route) => route.route === `/${e}`);

        // Update the current top-level route and its route tree
        this.currentRouteTree = routeTree || undefined;
        this.currentTopLevelRoute = routeTree?.route || '';
        this.currentChildRoutes = routeTree?.children || [];

        // Return the route tree's children, or an empty array if there are no child routes
        return routeTree?.children || [];
      })
    );
  }
}
