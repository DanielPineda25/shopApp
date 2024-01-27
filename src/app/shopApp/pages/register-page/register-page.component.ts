import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { GetProductsByRefService } from '../../services/get-products-byRef.service';
import { ByRefResponse } from '../../interfaces';

@Component({
  selector: 'shopApp-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  //Inyectamos el servicio para saber cuantos productos hay agregados
  private productsService = inject( GetProductsByRefService );

  //Leemos la lista de productos agregados que hay en el servicio
  public readonly listProduct: ByRefResponse[] = this.productsService.listProductsByRef;

  //injectamos el formBuilder
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ){}

  //Crear formulario reactivo con los grupos de inputs y validaciones síncronas
  public myForm: FormGroup = this.fb.group({

    selectStore: this.fb.group({
      selectedOption: [ '', Validators.required ]
    }),
    userDocument: this.fb.group({
      document: [ '', [ Validators.required, Validators.minLength(8) ] ]
    }),
    searchByRefOrEan: this.fb.group({
      selectedSearchBy: [ '',  ],
      searchByRef:       [ '', ],
      searchByEan:       [ '', ]
    }),

  });

  onSubmit(): void{

    if ( this.myForm.invalid || this.listProduct.length === 0 ) return

    this.router.navigateByUrl('/detail');

  }

}
