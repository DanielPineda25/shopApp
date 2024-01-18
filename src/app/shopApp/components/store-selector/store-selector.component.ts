import { Component, OnInit, computed, inject, signal } from '@angular/core';
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

  public storesList: PointSale[] = [];

  myForm!: FormGroup;

  constructor(
    private rootFormGroup: FormGroupDirective,
   ){}

  ngOnInit(): void {
    this.myForm = this.rootFormGroup.control;
    this.storesList = this.storesService.stores;
  }

}
