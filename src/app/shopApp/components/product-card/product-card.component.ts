import { Component, OnInit, inject } from '@angular/core';

import { GetProductsByRefService } from '../../services/get-products-byRef.service';
import { ByRefResponse } from '../../interfaces';

@Component({
  selector: 'shopApp-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {
  ngOnInit(): void {

      // Inicializar selectedSize con la primera talla disponible para cada producto
      this.listProducts.forEach((product, index) => {
        //Tomar la primera talla disponible
        const firstSize = this.getNoRepeatSize(index)[0];
        this.selectedSize[index] = firstSize;
      });
  }

  //Servicio para los articulos
  private byRefService = inject( GetProductsByRefService );

  //Manejar la lista de productos agregados
  public readonly listProducts:ByRefResponse[] = this.byRefService.listProductsByRef;

  //Referencias iguales

  //Extraer cada producto
  getListProducts( i:number ){
    return this.listProducts[i].items;
  }

  // Filtrar las imágenes
  getImageUrls(productIndex: number, size: string): string[] {
    const imageList = this.listProducts[productIndex].items.filter(item => item.presentationSize === size)[0].images.split('||');
    const filteredImages = imageList.filter(image => image.toLowerCase().endsWith('.jpg'));
    return filteredImages;
  }

  // Filtrar los videos
  getVideoUrls(productIndex: number, size: string): string[] {
    const imageList = this.listProducts[productIndex].items.filter(item => item.presentationSize === size)[0].images.split('||');
    const filteredVideos = imageList.filter(image => !image.toLowerCase().endsWith('.jpg'));
    return filteredVideos;
  }

  //Obtener valores sin repetir talla
  getNoRepeatSize(i: number): string[] {

    //Guardamos los productos agregados
    const productList = this.getListProducts(i);

    // Obtener valores únicos de presentationSize (cada talla sin repetir)
    const noRepeatSize = [...new Set( productList.map( ref => ref.presentationSize ) )];

    return noRepeatSize;
  }

  getPresentationSize(i: number, targetPresentationSize: string) {
    //Guardamos los productos agregados
    const productList = this.getListProducts(i);

    //Regresamos solo los que sean iguales (lo hará en cada iteración, por lo tanto agrupará)
    return productList.filter(ref => ref.presentationSize === targetPresentationSize);
  }

  //Objeto donde la clave es el índice y el string es el valor de cada talla
  public selectedSize: { [key: number]: string } = {};

  //Se le envía cada
  selectPresentationSize(i: number, presentationSize: string): void {
    this.selectedSize[i] = presentationSize;
  }

}
