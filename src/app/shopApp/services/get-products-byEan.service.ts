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

  //Nuestro método de búsqueda por ean. Nos devolverá un observable con la respuesta que tiene su determinada interfaz
  getProductByEan_Service( eanCode: string ): Observable<ByEanResponse>{

    //definir cuerpo de la solicitud
    const requestBody = {
      eanCode: eanCode,
      reference: '',
      color: '',
      size: ''
    };

    // definir los headers de la solicitud (invasivo)
    /* const headers = new HttpHeaders()
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE3MDUxNzg5NDIsImlhdCI6MTcwNTE3ODk0Miwic3ViIjoiUThCeVVuR2tnWDBHSmg4emZ5U3B3MFZBaUxvTWw0VGp6d2NXOHNCeDNwbUlaVWovOFBWcmpFMlpHTEwwRlYvNzR4ZG4vUjRISjZUT0k2dTgwQVhuMW02V3dWNTF3OEdPT0NhSVFvZC9RNGRZSXovK2M4cFg4alNwZnBaa3EyNVdDbFpDMG1xUmZSTXdUTE9WNTZlTkVMeTV6QzlSa3pKenlGc3FjZXRPU0JWTDJ2NUU5UWxDb1E0M2JUdUVYVDdZV1QxakRRSDZoakoreTVUNi9hK0hPcy8zMjhDWlZpT0ozY0I2RnVSMjlWNXNObUxqZjRCQ3I2MlpFT1lvUkVWSm9DdTBPU24wbU9DMW9Db1ZSZWxiTkVDU3VnOUdqQzBWWDVpYUM1c3RUVm5YY1ZCWHR4THZJNTdZNlZqaFprcVZCSnBTTHVudW1CK0orOGE5aDVIZmZBPT0iLCJ1c2VyIjoiRXhTb3BnMnJHUzJ4Y3JBM0VyUlVCR3ZqODVNQVI1NE85VlZvd3llVUZENVpPVUJiZDVIRGZyRGczWS9VRGVPazVqVTFrSUJWYmpMc0pDV1RXVzJGZ3hiRUJScFJjdFZ5RTdSK0o3SFNBQjFJUUgwU2VueHlVUXdwQTZyUVRVUWNWeXY1VjBxRjVrdE5QdjVEbGNGQno2bVVxZ1prOCswdURic3RVLzJjczZ6SmFpQTZuSmhhS0xLcGtKMGloN1NQbVpBK0JSS2N1aXZ1b0c4d3FBMFZpREcvazRibXozY2lJZXVMY29LdThudHBYNjJDNjBYQ1dLbGtleko4U2Q2QXkxWk90NStOb1VlNHJSVFJvRVptNDVCbloySkNEOGxUa1BqSlRIVXJHMjl5RmpkSEQweS9ISUFVVXJzYnZXaU1TVHgxZHRMYTQzZDZVUE9zRU9DQ0hRPT0iLCJ0ZXJtaW5hbCI6IkQ5eG9LKzJyZE0yTVprODEvZmZoMjNjS3RYQ1ZaQ2RpWDUxY0JxT2dqNVRucmJKclVkWVZBNTVOZXRtYmJSRldPMkVnV1dXQnRvc0EzVW9qTkNLbDh4YVBlbUtlQmZZVjJXNGVqOVVZdmVYaTM1bnZKc2d1ODdJeUxtN3p1YytvbUJMdlNVTGFZM0NNVC8vM0c4MHlFamQrNGMweDloZDRGdGU2TWhQVlAvY1RiWnVHZzFUcnBuVG5nTkdMMkMxMU11ZW1rWkZxdzFEc3owbmRLMENxQ1NGWUIvN0NITFRiWG4wMGNWb2U4WHZYa0dWREthZmRHMTYrNTFGTlY1bTNTaG9CVVRBWVI1NW5EajVuWmtKTFlLcDE0ZFZ5TFR0SDBCWW9IYUdYdDNQNmhaZUJTR1JURzU3SmdnaldFMTBTelV4YlA5UEV2a2JDeW1FbGJ0elI1QT09IiwiYXBwbGljYXRpb24iOiJJNEt1bU5rNERKRHhvSlZ6cXhET2lVbWVCODN1TUNCemNxSWEyZlpuamNXVjJKbmdVQ3R5QThyMndxT0hxVEpxcnorU3VYeDFpcXJ4MCtINlFBSnhKRWR2MmhXMWp4Q2YrR0RIUjM3a0JIVllNUlRiRkZmRzRyOEtIeWdJc2c3TVFuNjZxVCtmRkNPbGlUK0hjNWQxbVl5YTJiK2ZkblZNaEJoQlFuSWsvZ1FJRzRKSnJpSUt6Z2FoZHd4VlI2bm8xUTcvS01wSUdIT0lzNFEzanlxSWlLbTVsSVErV0hJbkJyMGE4aHBvMjd1VUtOL2w4UFJ5ZXZtcjJkUUxCeTVXK1c2RVlWUFcxVGQvM1R2NFdJY3Zrb1lIS05ETWJUMFIyNmZGaFRUOG1LRXc0NnNvOWh6UEJad3RJZTlNcDNMZk41N2RDdTJaZHBaUi9LSVNpeFIvd2c9PSIsImV4cCI6MTcwNTI2NTM0MiwiaXNzIjoicG9zLXNlcnZpY2UifQ.iBZH0ELBwwckRE5JaA1iZ722-TRh9l7mLLmbepQlpOY')
      .set('Terminal', 'oQjK7y80wSgde7ub7gPniXkSSK7WELbMqQtDfyaXbrMAThJaUGdijGwXZc+MKsaY+CyeEs0jdQQTBd1oX2td6vK0zFSU9VwY03mSTBU8E+JBIMzzcBjWenfcRhJrLMW6eQPDQuRBJTxsAklr7GBj7iWS1fbgi6Qs0rS+vtLi02wIRLrPHlmdUxUl1XgQppK2AQdEuVu9NPQgORQoiY4fgvgnfkEYhroNGrF2XGHAYNzRoDR2AUJEFItHynRX7hnN2nspl7x4UBd9VuML/nyipRV0LLRdGilVJNxPDfvmRurnt8c+F4MTnT8j4r2U15J6p9vnkLq0YOomCjENRlNBMQ==')
      .set('User', 'E4PF5t0GnBO9Y264FQpm0jtBCqt0fWFeoF/oVrgCvDu7tUlDmyZFgVncqq5JHTV9SwFwzhtrP9e3shBI57p5st2gBReI/sNgFCQgPFtj8dhLG8qjkTy4jw8eKL2sFRUL+qaeE0hGhoLs2wFeQD4XsQtjEP7Bykv2WllBi6seRDrpMvvM5peudYfOPIp/MQVwJfnkQKJwa05cZkGXAt3LELSgGAQFyAS3Cvsf7/ijs14Ce6PDcWMJZ0ZOVyENuhycL7SrdFmCgu6lR+wfPOGuGAY3A7n7HX3u4cSE8TnRDvt1fHwYYow8+jdI8cfXMdOI6g4CsNqpmqxS7I+iePbgXQ=='); */

      // Realiza la solicitud HTTP POST
    return this.http.post<ByEanResponse>(`${this.baseUrl}`, requestBody, /*{ headers: headers }*/);

  }

}
