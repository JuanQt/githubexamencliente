import { Component ,OnInit, ViewChild} from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Cliente } from '../modelo/cliente';
import { ClienteService } from '../servicios/cliente.service';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  

  clienteList : Cliente[];

  constructor(private clienteService: ClienteService){}
  
  ngOnInit(){
    this.MostrarClientes(); 
  }

 MostrarClientes(){
    this.clienteService.getCliente().snapshotChanges().subscribe(item => {
      this.clienteList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$keyRegistro"] = element.key;
        this.clienteList.push(x as Cliente);
      });
    });
  }
  
}
