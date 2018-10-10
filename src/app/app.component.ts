import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Hola Angular';
  imagenUrl = 'assets/logo.png';
  elementos = [{
    titulo : 'angular',
    ciudad : 'bogota'
  }, {
    titulo : 'react',
    ciudad : 'bogota'
  }, {
    titulo : 'vue',
    ciudad : 'bogota'
  }, {
    titulo : 'ionic',
    ciudad : 'bogota'
  }, {
    titulo : 'flutter',
    ciudad : 'bogota'
  }];

  alerta() {
    alert('Se hizo click en la imagen');
  }
}
