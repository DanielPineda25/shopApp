import { Component, Input } from '@angular/core';

import { ByRefResponse } from '../../interfaces';

@Component({
  selector: 'shopApp-view-list',
  templateUrl: './view-list.component.html',
  styleUrl: './view-list.component.css'
})
export class ViewListComponent {

  //Recibe desde el padre la lista de productos agregados
  @Input()
  public productsList: ByRefResponse[] = [];

}
