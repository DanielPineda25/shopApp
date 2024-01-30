import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { map } from 'rxjs';

import { GetProductsByEanService } from '../../services/get-products-byEan.service';
import { GetProductsByRefService } from '../../services/get-products-byRef.service';
import { ByRefResponse } from '../../interfaces';

@Component({
  selector: 'shopApp-search-ref-ean',
  templateUrl: './search-ref-ean.component.html',
  styleUrl: './search-ref-ean.component.css'
})
export class SearchRefEanComponent implements OnInit {

  //Manejar los inputs directamente
  @ViewChild('inputSearchByRef')
  public inputSearchByRef!: ElementRef<HTMLInputElement>;

  @ViewChild('inputSearchByEan')
  public inputSearchByEan!: ElementRef<HTMLInputElement>;

  //Inyección de los servicios que vamos a utilizar para búsqueda por Ean y Ref
  private byEanService = inject( GetProductsByEanService );
  private byRefService = inject( GetProductsByRefService );

  //Leer copia de los productos agregados
  public readonly listProducts: ByRefResponse[] = this.byRefService.listProductsByRef;

  public myForm!: FormGroup;

  //Manejar estado del loader de búsqueda
  public loader: boolean = false;

  //Mostrar aviso de referencia o código incorrecto
  public invalidRef: boolean = false;

  //Manejar error de autenticacion
  public authtenticationError: boolean = false;

  //Buscar Ref a partir de un EAN
  public eanForGetByRef: string = '';

  //Mostrar aviso de referencia o código incorrecto
  public invalidEan: boolean = false;

  //Mostrar aviso de error inesperado
  public generalError: boolean = false;

  constructor(
    private rootFormGroup: FormGroupDirective,
    ){}

    ngOnInit(): void {

      //Hará parte del formulario principal
      this.myForm = this.rootFormGroup.control;

      //Suscripción para reaccionar a los cambios ocurridos en los inputs radio
      this.myForm.get('searchByRefOrEan.selectedSearchBy')!.valueChanges
        .subscribe( data => this.selectRegisterBy(data) );

      //De entrada aparecen desactivados los inputs de búsqueda
      this.myForm.get('searchByRefOrEan.searchByRef')!.disable();
      this.myForm.get('searchByRefOrEan.searchByEan')!.disable();

    }

  //Método para habilitar los inputs de registro según la eleccón byRef o byEan
  selectRegisterBy( word: string ): void{

    const searchByRef = this.myForm.get('searchByRefOrEan.searchByRef')!;
    const searchByEan = this.myForm.get('searchByRefOrEan.searchByEan')!;

    if( word === 'byRef' ){

      searchByRef.enable();
      searchByEan.disable();
      searchByEan.reset();
      this.invalidEan = false;
      this.authtenticationError = false;
      this.inputSearchByRef.nativeElement.focus();

    }

    if( word === 'byEan' ){

      searchByEan.enable();
      searchByRef.disable();
      searchByRef.reset();
      this.invalidRef = false;
      this.authtenticationError = false;
      this.inputSearchByEan.nativeElement.focus();
    }

  }

  //Consultar producto por Ean
  getProductByEan( ean: string ): void{

    const searchByEan = ean.trim();

    //Verificar no mandar cadena vacía
    if( !searchByEan ) return;


    this.loader = true;
    this.invalidEan = false;
    this.generalError = false;
    //Acá manda al servicio el valor obtenido
    this.byEanService.getProductByEan_Service( searchByEan )
     .pipe(
       map( resp => {
        if( resp === null ) return;

         return resp[0].reference;
        }),
        )
      .subscribe({
        next: (ref) => {

          if( ref === undefined ) {
            this.invalidEan = true;
            this.loader = false;
            return
          }

          this.invalidEan = false;
          this.loader = false;
          this.getProductByRef( ref );
          //Aca espera un momento (hasta la respuesta del servicio) para enfocar
          this.myForm.get('searchByRefOrEan.searchByEan')!.reset();
          this.inputSearchByEan.nativeElement.focus();
        },
        error: (error) => {
          // Manejar el error
          if (error.status === 401) {
            // Código para manejar la respuesta 401 (no autorizado)
            this.authtenticationError = true;
          }

          this.loader = false;
          this.invalidEan = false;
          this.generalError = true;

        },
        complete: () => {}
      });

     console.log( 'Petición lanzada por Ean', searchByEan );

  };

  //Consultar producto por Ref
  getProductByRef( ref: string ): void{

    //Guarda el contenido del input que busca por Referencia
    const searchByRef = ref.trim();

    //Verificar no mandar cadena vacía
    if( !searchByRef ) return;

    this.generalError = false;
    this.authtenticationError = false;
    this.loader = true;
    this.invalidRef = false;
    //Manda al servicio el valor obtenido
    this.byRefService.getProductByRef_Service( searchByRef )
    .subscribe({
      next: (resp) => {

        if ( !resp.items  ) {
          this.invalidRef = true;
          this.loader = false;
          return
        }

        this.loader = false;
        this.invalidRef = false;
        //Agregar la respuesta al arreglo
        this.byRefService.listProductsByRef.unshift( resp );
        //Aca espera un momento (hasta la respuesta) para enfocar
        this.myForm.get('searchByRefOrEan.searchByRef')!.reset();
        this.inputSearchByRef.nativeElement.focus();

      },
      error: (error) => {
        // Manejar el error de autenticación
        if (error.status === 401) {
          // Código para manejar la respuesta 401 (no autorizado)
          console.log('Error 401: No autorizado');
          this.authtenticationError = true;

        }

        this.loader = false;
        this.invalidRef = false;
        this.generalError = true;


      },
      complete: ()=>{
      }
    });

    console.log( 'Petición lanzada por Ref', searchByRef );

  };

}
