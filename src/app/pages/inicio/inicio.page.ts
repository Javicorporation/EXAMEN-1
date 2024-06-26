import { Component, OnInit } from '@angular/core';
interface componente{
  icon: string;
  name: string;
  redirectTo:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Input',
      redirectTo: '/input'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
