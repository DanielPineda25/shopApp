import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ByRefResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class GetProductsByRefService {

  //Url para hacer las peticiones por referencia
  private baseUrl: string = 'https://srvextranet.leonisa.com/Aplicativos_Informaticos/posservice/api/inventory/getInventories';

  //Guarda todo el objeto completo del articulo buscado por REF
  public listProductsByRef: ByRefResponse[] = [];

  constructor(
    private http: HttpClient
  ) { }

  //Método de consulta por Referencia
  getProductByRef_Service( refCode: string ): Observable<ByRefResponse>{

    //definir cuerpo de la solicitud
    const requestBody = {
      reference: refCode,
    };

    // Realiza la solicitud HTTP POST
    return this.http.post<ByRefResponse>( `${this.baseUrl}`, requestBody );

  }

}
