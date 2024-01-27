import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environments';
import { ByRefResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class GetProductsByRefService {

  //Utilizando la url desde las variables de entorno
  private readonly baseUrl: string = environment.baseUrlByRef;

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
