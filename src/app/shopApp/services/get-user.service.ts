import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environments';
import { UserResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  //Manejar código del país aparte
  private countriesCode: string = '169'

  //Utilizando la url desde las variables de entorno
  private readonly baseUrl: string = environment.baseUrlUser;

  //Manejar el valor actual desde el servicio
  public currentUser?: UserResponse[];

  //Manejar valor del documento del usuario actual
  public currentDocument?: string;

  constructor(
    private http: HttpClient
  ) { }

  //Método para consultar el usuario por documento
  getUserByDocument_Service( document: string ): Observable<UserResponse[]>{

    //Realizar la solicitud HTTP GET
    return this.http.get<UserResponse[]>(`${ this.baseUrl }/${ document }/${ this.countriesCode }`);

  }

}
