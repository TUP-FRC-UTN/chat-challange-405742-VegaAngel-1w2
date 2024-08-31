import { Component, inject, Input, input } from '@angular/core';
import { Usuario } from '../Models/usuario';
import { MensajeriaService } from '../mensajeria.service';
import { FormsModule } from '@angular/forms';
import { SalaComponent } from '../sala/sala.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [FormsModule,SalaComponent,NgIf],
  templateUrl: './mensaje-usuario.component.html',
  styleUrl: './mensaje-usuario.component.css'
})
export class MensajeUsuarioComponent {
  _mensajeria = inject(MensajeriaService)
   mensaje:string =''
   @Input() user:Usuario ={
    name:"",lastname:""
   }
   unread:number = 0
  

  enviarMensaje(){
        this._mensajeria.enviarMensaje(this.user,this.mensaje)
        this.mensaje = ""
  }
}
