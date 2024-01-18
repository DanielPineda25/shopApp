import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

import { GetProductsByEanService } from '../../services/get-products-byEan.service';
import { GetProductsByRefService } from '../../services/get-products-byRef.service';

@Component({
  selector: 'shopApp-search-ref-ean',
  templateUrl: './search-ref-ean.component.html',
  styleUrl: './search-ref-ean.component.css'
})
export class SearchRefEanComponent implements OnInit {

  //Inyección de los servicios que vamos a utilizar para búsqueda por Ean y Ref
  private byEanService = inject( GetProductsByEanService );
  private byRefService = inject( GetProductsByRefService );

  public myForm!: FormGroup;

  constructor(
    private rootFormGroup: FormGroupDirective,
    ){
    }

    ngOnInit(): void {

      //Hará parte del formulario principal
      this.myForm = this.rootFormGroup.control;

      //Suscripción para reaccionar a los cambios ocurridos en los inputs radio
      this.myForm.get('searchByRefOrEan')!.get('selectedSearchBy')!.valueChanges
        .subscribe( data => this.selectRegisterBy(data) );

    }



  //Habilitar los inputs de registro según la eleccón byRef o byEan
  selectRegisterBy( word: string ): void{

    const searchByRef = this.myForm.get('searchByRefOrEan')!.get('searchByRef')!;
    const searchByEan = this.myForm.get('searchByRefOrEan')!.get('searchByEan')!;

    if( word === 'byRef' ){

      searchByRef.enable();
      searchByEan.disable();

      const inputRef = document.getElementById('inputSearchByRef');
      inputRef!.focus()
    }

    if( word === 'byEan' ){

      searchByEan.enable();
      searchByRef.disable();

      const inputEan: HTMLElement | null = document.getElementById('inputSearchByEan');
      inputEan!.focus()
    }

  }

  //Consultar producto por Ean
  getProductByEan(){

    const searchByEan = this.myForm.get('searchByRefOrEan')!.get('searchByEan')!;

    //Verificar no mandar cadena vacía y debouncer
    if( !searchByEan.value.trim() ) return;

    //Acá manda al servicio el valor obtenido
    this.byEanService.getProductByEan_Service( searchByEan.value )
    .subscribe({
      next: ( resp ) =>   { console.log( 'Respuesta exitosa', resp ) },
      error: ( err ) => { console.error( 'Denegado', err ) },
      complete: () => { console.log( 'Terminado' ) }
    });
    console.log( 'Petición lanzada', searchByEan.value );

    //Aca espera un momento (hasta la respuesta del servicio)
    setTimeout(() => {
      searchByEan.reset();
      const inputEan: HTMLElement | null = document.getElementById('inputSearchByEan');
      if (inputEan) {
        inputEan.focus();
      }
    }, 1000);

  }

  //Consultar producto por Ref
  getProductByRef(){

    const searchByRef = this.myForm.get('searchByRefOrEan')!.get('searchByRef')!;

    //Verificar no mandar cadena vacía y debouncer
    if( !searchByRef.value.trim() ) return;

    //Acá manda al servicio el valor obtenido
    this.byRefService.getProductByRef_Service( searchByRef.value )
    .subscribe({
      next: ( resp ) =>   { console.log( 'Respuesta exitosa', resp ) },
      error: ( err ) => { console.error( 'Denegado', err ) },
      complete: () => { console.log( 'Terminado' ) }
    });
    console.log( 'Petición lanzada', searchByRef.value );

    //Aca espera un momento (hasta la respuesta del servicio)
    setTimeout(() => {
      searchByRef.reset();
      const inputRef: HTMLElement | null = document.getElementById('inputSearchByRef');
      if (inputRef) {
        inputRef.focus();
      }
    }, 1000);

  }

}
