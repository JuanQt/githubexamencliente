import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../modelo/cliente';
import { ClienteService } from '../../servicios/cliente.service';
import { NgForm, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  clienteList: Cliente[];

  clienteForm: FormGroup;

  constructor(private clienteService: ClienteService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
  }

  //creamos funcion para resetar el formulario
  resetForm(clienteForm: NgForm){
    if(clienteForm != null)
      clienteForm.reset();
      this.clienteService.selectedCliente = new Cliente();

     
  }

  onSubmit(clienteForm: NgForm){

    this.clienteService.getCliente();

    if(clienteForm.value.$keyRegistro == null){
      this.clienteService.insertCliente(clienteForm.value);
      this.router.navigate(['/']);
    } this.resetForm(clienteForm)
  }
 

}
