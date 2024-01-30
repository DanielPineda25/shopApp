import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ByEanResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class GetProductsByEanService {

  //Url para hacer las peticiones por ean
  private baseUrl: string = 'https://srvextranet.leonisa.com/Aplicativos_Informaticos/posservice/api/price/public';

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
