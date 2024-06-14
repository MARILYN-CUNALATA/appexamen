import { Component } from '@angular/core';

@Component({
  selector: 'app-validacion-correo',
  templateUrl: './validacion-correo.page.html',
  styleUrls: ['./validacion-correo.page.scss'],
})
export class ValidacionCorreoPage {
  correo: string = ''; // Definición de la propiedad correo
  mensaje: string = ''; // Definición de la propiedad mensaje

  constructor() {}

  enviarMensaje() {
    if (this.correo && this.correo.includes('@')) {
      this.mensaje = `Mensaje enviado a ${this.correo}`;
    } else {
      this.mensaje = 'Formato de correo inválido. Introduce un correo válido.';
    }
  }
}

