import { Component } from '@angular/core';
import { MenuItem } from '../../shared/interfaces/menu-items';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-list-group-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-group-menu.component.html',
  styleUrl: './list-group-menu.component.css'
})
export class ListGroupMenuComponent {
  menu: MenuItem[] = [
    {text: 'Component Input Example', routerLink: 'component-input-example'},
    {text: '@For Directive Example', routerLink: 'for-directive-example'},
    {text: 'Event Bind Example', routerLink: 'event-bind-example'},
  ];
}
