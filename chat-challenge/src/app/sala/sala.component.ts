import { Component, inject } from '@angular/core';
import { MensajeUsuarioComponent } from "../mensaje-usuario/mensaje-usuario.component";
import { MensajeriaService } from '../mensajeria.service';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Usuario } from '../Models/usuario';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeUsuarioComponent,DatePipe,NgClass,UpperCasePipe],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
_service = inject(MensajeriaService)

usario1:Usuario = {
  name:"carlo",lastname:"rodriguez"
}
usario2:Usuario = {
  name:"marco",lastname:"tropolla"
}

  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
 // this._service.enviarMensaje("hola")


//usuario:string = ""
}
