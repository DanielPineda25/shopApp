import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

import { GetUserService } from '../../services/get-user.service';

@Component({
  selector: 'shopApp-user-document',
  templateUrl: './user-document.component.html',
  styleUrl: './user-document.component.css'
})
export class UserDocumentComponent implements OnInit {

  //Inyectar servicio para la búsqueda del usuario con el documento
  private getUserService = inject( GetUserService );

  myForm!: FormGroup;

  constructor(
    private rootFormGroup: FormGroupDirective,
   ){}

  ngOnInit(): void {
    this.myForm = this.rootFormGroup.control;

    //Mantiene el valor del documento en el input cuando no se ha terminado la consulta
    this.myForm.get('userDocument.document')?.setValue( this.getUserService.currentDocument );
  }

  //Consultar datos del usuario con su documento
  getUserByDocument(){

    //Guarda el contenido del input que contiene el número del documento (cédula)
    const userDocument = this.myForm.get('userDocument.document')!.value.trim();

    //Verificar no mandar cadena vacía
    if( !userDocument ) return;

    //Manejar el número de documento actual (desde el servicio)
    this.getUserService.currentDocument = userDocument;
    //Manda al servicio el valor recibido
    this.getUserService.getUserByDocument_Service( userDocument )
    .subscribe( resp => {
      //Manejamos la información del usuario obtenido, en el servicio
      this.getUserService.currentUser = resp;
    });

  }

}
