import { Component, inject } from '@angular/core';

import { GetUserService } from '../../services/get-user.service';
import { PointSaleService } from '../../services/point-sale.service';

import { PointSale, UserResponse } from '../../interfaces';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css'
})
export class DetailPageComponent {

  //Servicio para la información del usuario
  private getUserService = inject( GetUserService );

  //Servicio para la elección de la tienda
  private storeSelectedService = inject( PointSaleService );

  //Manejar la elección de la tienda
  public readonly storeSelected?: PointSale = this.storeSelectedService.storeSelected;

  //Manejar el usuario actual
  public readonly currentUser?: UserResponse[] = this.getUserService.currentUser;

  onSubmit(){
    console.log('Terminado');
  }

}
