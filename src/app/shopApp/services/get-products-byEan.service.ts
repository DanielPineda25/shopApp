import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environments';
import { ByEanResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class GetProductsByEanService {

  //Utilizando la url desde las variables de entorno
  private readonly baseUrl: string = environment.baseUrlByEan;

  constructor(
    private http: HttpClient
  ) { }

  //Método de búsqueda por ean (código)
  getProductByEan_Service( eanCode: string ): Observable<ByEanResponse[]>{

    //definir cuerpo de la solicitud
    const requestBody = {
      eanCode: eanCode,
      reference: '',
      color: '',
      size: ''
    };

      // Realiza la solicitud HTTP POST
    return this.http.post<ByEanResponse[]>(`${this.baseUrl}`, requestBody);

  }

}
