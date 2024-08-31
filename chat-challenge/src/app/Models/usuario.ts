export interface Usuario{
    name:string
    lastname:string
}
export interface Mensaje{
   envia:Usuario
   valor:string
   fecha?:Date
}