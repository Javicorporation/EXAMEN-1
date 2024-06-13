import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  nombre:string= 'Fernando';
usuario = {
  email: '',
  password: ''
  }
  constructor(){}
  ngOnInit() {
  }
 
  onSubmit(formulario: NgForm) {
    if (formulario.valid) {
      console.log('Formulario enviado', this.usuario);
    } else {
      console.log('Formulario no válido');
    }
  }

}
