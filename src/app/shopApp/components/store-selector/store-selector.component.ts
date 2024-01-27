import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

import { PointSaleService } from '../../services/point-sale.service';
import { PointSale } from '../../interfaces/point-sale.interface';

@Component({
  selector: 'shopApp-store-selector',
  templateUrl: './store-selector.component.html',
  styleUrl: './store-selector.component.css'
})
export class StoreSelectorComponent implements OnInit{

  //Inyección del servicio de los puntos de venta
  private storesService = inject( PointSaleService );

  //Maneja la elección se la tienda (traida desde el servicio)
  public storesList: PointSale[] = this.storesService.stores;

  myForm!: FormGroup;

  constructor(
    private rootFormGroup: FormGroupDirective,
   ){}

  ngOnInit(): void {
    this.myForm = this.rootFormGroup.control;

    //Actualizar la lista de tiendas disponibles
    this.storesList = this.storesService.stores;

    //Mantener la elección de la tienda al regresar sin enviar
    if( this.storesService.storeSelected ){
      this.myForm.get('selectStore.selectedOption')?.setValue( this.storesService.storeSelected );
    }
  }

  //Método para la asignación de la tienda
  onStoreSelected(){
    this.storesService.storeSelected = this.myForm.get('selectStore.selectedOption')?.value;
  }

}
