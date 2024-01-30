import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(){}

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

    //Verificar el tipo de peticion (por el momento)
    if (req.method === 'POST'){

      //Verificar de donde vendrán estos valores
      const authorizationHeader = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE3MDY2Mjg0NTgsImlhdCI6MTcwNjYyODQ1OCwic3ViIjoiWmtCb1VRRXFtSE1zNjFLOGRWTGdEQi9US3hHRkFUZGVIQ0ZGSGR1ZTh2TTBjd3RITWdxZnRHOVVnSmhKOGx4T0tCZkRESXlDWVQ2eDhXUWRvNENnL3NXbGZLakFpSTlSdXplRWJYdGI4RGorOUNxUE5oV0xkcEV2MVVyR3RVNXhLaUMwZ2crWmZtNFYzQlI2MDAyKzFBMXNsSVd6YjgwMUF6eGhNSkxMaytPeXlpOFdnVmthaTdWL0JtUlR6dnZVT3hkak0rMnlHVU9sSmRYeE1BdWllN1VvQmVpenNybnJjOHV6SDJITXVvWlVUeGczcndWK1ZiZUpWeHVQRExNc2tyV2lEMVNIbFJqQmdneEJpa3daeE9GYSthZjRJNHVPYnVUWktKZjVKNkJJTXU0V1lPRXdSaDNtTWliRXEyZGszcmpEb3J2NXhGTGY1R25rVWJJN3lnPT0iLCJ1c2VyIjoiSU1vTE9LWHl2VUE4cEs2ei90aEN0NU9zOUlPUTFKZWd2UTUrRkJWZWl2ZWRyQ3NtTmM0QmVaTDZabm5ybjU5TnYrRDIyc0V1UjdWamV1bGY4Z2NucktBVXl4REM4OU9NamZrZ1dNKzBXdTlZZGFlMEJkRFhHTFdTdkRnUFdZU01xZVZFakRTN1JSblBzSUJ1TjRSb1UvcnNib1FTcDNNaklJNGlpdEQ1alplVlJxV1ByV2FxTi8yeXErSEMyQWJMSDBuci92TWNGWU5JVXVyOXlJY0FVUGU3RUpwZzRpRE5CVjdHTVp0VFZlSjF0Z2ZBaWtNVkoreUw2WjgwdGJTbG5jbmFlVE1lb2JVVmxNNFkrWnFIL2pKdVIyR0F5WlBEa0Q4Ui9pdXZPZUdkOHI3RlFYelhzeGloQ1BZc1I2WlJQN1pkRUxhMUZkWGpYUzhNa0FDOGxnPT0iLCJ0ZXJtaW5hbCI6ImZ2ak9xbHoxeDNKWUdMTnNlTk9TZk1YYkxxdi9HcWZZakd5WEdNMWk1c1JJRktGTUQrM2lYWS95V1ZqbktTVnRnYTMwL3hrYjZ2ZGFLU1dCajcxbGlEbFpFSnZUQisrTk11aUdiV0NQT091T2ZFTUtxREUySG04aFVwL3dLSTdsSzgzbW5iY091RnFiK29LaWZkK0ttWVNkT0FVR0dsTDBkOG9DUzNNRXRpWlRDY2dCS3Q4YjVpR2x3Vkl4VnVQYU1YMDBIUmx5cDRBa3F2SmVXYk1SN0JhMXY4a1ptOWNXSnUzMUU0U3EvWVBSemlISys2bDduUFlVY3JiemtFOUxQSWlyNnMwa2FSRXdOem1JUFBrTkhRSVJaMzM5Vm1rdzU4NDNkNzcvdFRwMEsyaHRFYUpnTkZkaXlwY2pZa2RhMnNKK0x0QXNNZjhLbTBWbzJXTXdtQT09IiwiYXBwbGljYXRpb24iOiJJNEt1bU5rNERKRHhvSlZ6cXhET2lVbWVCODN1TUNCemNxSWEyZlpuamNXVjJKbmdVQ3R5QThyMndxT0hxVEpxcnorU3VYeDFpcXJ4MCtINlFBSnhKRWR2MmhXMWp4Q2YrR0RIUjM3a0JIVllNUlRiRkZmRzRyOEtIeWdJc2c3TVFuNjZxVCtmRkNPbGlUK0hjNWQxbVl5YTJiK2ZkblZNaEJoQlFuSWsvZ1FJRzRKSnJpSUt6Z2FoZHd4VlI2bm8xUTcvS01wSUdIT0lzNFEzanlxSWlLbTVsSVErV0hJbkJyMGE4aHBvMjd1VUtOL2w4UFJ5ZXZtcjJkUUxCeTVXK1c2RVlWUFcxVGQvM1R2NFdJY3Zrb1lIS05ETWJUMFIyNmZGaFRUOG1LRXc0NnNvOWh6UEJad3RJZTlNcDNMZk41N2RDdTJaZHBaUi9LSVNpeFIvd2c9PSIsImV4cCI6MTcwNjcxNDg1OCwiaXNzIjoicG9zLXNlcnZpY2UifQ.uThbKC5M4kQbmLYRN7NC8GxtPcHchQOzQzF6J4AghXg';
      const terminalHeader = 'jA9ZcRGFxqF4kybHpHOnatGY4QHvmMxDyzN4clDVSsWWqwoBtCyTikYhJIUYRfRqAyVKc5BP4Fa7mLKJdEHznPmlKZGhJfU+pGqzBTisEzKwwYxRstZf/f8bS9YztRsUL9pIFstn7ip1DlCzWGCGrBLT9x3ae2TamKkPX4QSAOAToRQcZsRQyftEe2JxpuB5EHNetdlvDTBvp3BWpJrg0vVx7LQYhHIKLHkUoTxJqO+WFGKZaCGjq3z/8jNfo6tJ5nEzzCDI8hL/hfvfdgK50NSyvUZP1VEKEbrUbIaKqo4dyAumH3uR4ttVMYwUNzb2quyAmLqhcseWgQSKNNyZkw==';
      const userHeader = 'v7LhYvulcPxyvIaF8v2lXnsHVPazSaeSKB2T6GqCoT2B1Gfav8Mm6mGg7ym5d0dcnmzS/Sh9BG+a4boenjEY+8DmoiK/FBz47UcXn9wchkrboL4MdR210r5sxXaIibLL6v30xvyvq9pGPQTrcbYQdME2jROX0n7F2fl+PTN+BOLVE71xHFI4NoMnIDjIuFH1lEftE5FzjSLfa0F7Yy1g3xrNjkL2zi2LWxRArqGetylcs4R9LaMcil9PI/SRFg7J9l9rwMTGmUb7rng/jJVROccEJULOJpbYNARCgq7fK/0e5BSRsyd0OfVvAN3AuA2y7Uxu7cmQpgobb5cv4M/f3w==';

      //clonar la solicitud y agregar los encabezados
      const cloneReq = req.clone({
        setHeaders: {
          'Authorization': authorizationHeader,
          'Terminal': terminalHeader,
          'User': userHeader
        }
      })

      return next.handle( cloneReq );

    }

    //Pasa exactamente igual la petición si no es POST (por el momento)
    return next.handle(req);
    }

}
