import { Injectable } from '@angular/core';
//importamos el modelo creado
import { Cliente } from '../modelo/cliente'
//importamos nuestro servicio de la base de datos firebase
import{ AngularFireDatabase, AngularFireList} from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //llamaremos a nuestra clase cliente
  selectedCliente: Cliente = new Cliente();
  //nuestra lista, noes traera la información de la bd
  clienteList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getCliente(){
    return this.clienteList = this.firebase.list('cliente')
  }

  //creamos nuestro metodo insertar

  insertCliente(cliente: Cliente){
    this.clienteList.push({
        dni: cliente.dni,
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        telefono: cliente.telefono,
        direccion: cliente.direccion
    });
  }

  //metodo actualizar

  updateCliente(cliente: Cliente){
    this.clienteList.update(cliente.$keyRegistro,{
      dni: cliente.dni,
      nombre: cliente.nombre,
      apellido: cliente.apellido,
      telefono: cliente.telefono,
      direccion: cliente.direccion
    });
  }

  //metodo eliminar

  deleteCliente($keyRegistro: string){
    this.clienteList.remove($keyRegistro);
  }

}
