import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

@Component({
  standalone: true,
  imports: [RouterModule, ShellComponent],
  selector: 'app-root',
  template: ` <app-shell></app-shell> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'eztrack';
}
