import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


interface MenuOption{
  icon: string,
  label: string,
  route: string,
  sublabel: string
}

@Component({
  selector: 'app-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {

  menuOptions:MenuOption[] = [
    {
    icon: 'fa-solid fa-chart-line',
    label: 'Trending',
    sublabel: 'Gifs Populares',
    route: '/dashboard/treding'
    },
    {
    icon: 'fa-solid fa-magnifying-glass',
    label: 'Buscador',
    sublabel: 'Buscar Gifs',
    route: '/dashboard/search'
    }
  ]


 }
