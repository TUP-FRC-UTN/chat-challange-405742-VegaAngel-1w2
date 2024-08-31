import { Injectable } from '@angular/core';
import { Mensaje, Usuario } from './Models/usuario';
import { last } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeriaService {
  
   timer:number = 0

   unread1:number = 0
   unread2:number = 0

   first:Usuario = {
    name:"",lastname:""
   }
   isFirst:boolean = true
   mensajes:Mensaje[]=[]

   enviarMensaje(user:Usuario,msj:string){

    if(this.timer == 0){
      this.first = user
        this.timer = 1
    }
    if(this.first === user){
       this.isFirst = true
    }else{
      this.isFirst = false
    }
   this.mensajes.push({envia:user,valor:msj,fecha:new Date})
  
   }
  constructor() { }
}
