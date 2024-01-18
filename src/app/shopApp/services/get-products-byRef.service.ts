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

  constructor(
    private http: HttpClient
  ) { }

  //Nuestro método de búsqueda por Ref. Nos devolverá un observable con la respuesta que tiene su determinada interfaz
  getProductByRef_Service( refCode: string ): Observable<ByRefResponse>{

    //definir cuerpo de la solicitud
    const requestBody = {
      reference: refCode,
    };

    // Realiza la solicitud HTTP POST
    return this.http.post<ByRefResponse>( `${this.baseUrl}`, requestBody );

  }

}
