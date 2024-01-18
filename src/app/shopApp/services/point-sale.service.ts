import { Injectable } from '@angular/core';
import { PointSale } from '../interfaces/point-sale.interface';

@Injectable({
  providedIn: 'root'
})
export class PointSaleService {

  constructor() { }

  public get stores(): PointSale[]{

    return [
        {
            id: '1566',
            name: 'DISSEN S.A.S. LA 14 ARMENIA'
        },
        {
            id: '5887',
            name: 'DISSEN S.A.S. LA 14 MANIZALES'
        },
        {
            id: '9950',
            name: 'DISSEN S.A.S. LA 14 NO 5 MOSTRADOR'
        },
        {
            id: '4061',
            name: 'DISSEN S.A.S. LA 14 NO. 10 BOULEVAR'
        },
        {
            id: '4060',
            name: 'DISSEN S.A.S. LA 14 NO. 11 LIMONAR'
        },
        {
            id: '9955',
            name: 'DISSEN S.A.S. LA 14 NO. 15 BUENAVENTURA '
        },
        {
            id: '9947',
            name: 'DISSEN S.A.S. LA 14 NO. 25 ALFAGUARA'
        },
        {
            id: '9957',
            name: 'DISSEN S.A.S. LA 14 NO. 27 TULUA'
        },
        {
            id: '0579',
            name: 'DISSEN S.A.S. LA 14 NO. 33 PASOANCHO'
        },
        {
            id: '4131',
            name: 'DISSEN S.A.S. LA 14 NO. 35 COSMOCENTRO '
        },
        {
            id: '4047',
            name: 'DISSEN S.A.S. LA 14 NO. 4 LEO'
        },
        {
            id: '4046',
            name: 'DISSEN S.A.S. LA 14 NO. 4 MOSTRADOR'
        },
        {
            id: '4075',
            name: 'DISSEN S.A.S. LA 14 NO. 6 LEO'
        },
        {
            id: '4053',
            name: 'DISSEN S.A.S. LA 14 NO. 6 MOSTRADOR'
        },
        {
            id: '4057',
            name: 'DISSEN S.A.S. LA 14 NO. 8 LEO'
        },
        {
            id: '4056',
            name: 'DISSEN S.A.S. LA 14 NO. 8 MOSTRADOR'
        },
        {
            id: '4059',
            name: 'DISSEN S.A.S. LA 14 NO. 8 SOTANO'
        },
        {
            id: '4117',
            name: 'DISSEN S.A.S. LA 14 PALMIRA'
        },
        {
            id: '5892',
            name: 'DISSEN S.A.S. LA 14 PEREIRA'
        },
        {
            id: '9968',
            name: 'DISSEN S.A.S. LA 14 VALLE DEL LILI'
        },
        {
            id: '5997',
            name: 'DISSEN S.A.S. OUTLET B/QUILLA CRA 43'
        },
        {
            id: '9446',
            name: 'DISSEN S.A.S. OUTLET BGOTA (CRA 15)'
        },
        {
            id: '9976',
            name: 'DISSEN S.A.S. OUTLET BOGOTA CALLE 11'
        },
        {
            id: '5996',
            name: 'DISSEN S.A.S. OUTLET BUCARAMANGA'
        },
        {
            id: '0141',
            name: 'DISSEN S.A.S. OUTLET CALI (UNICO)'
        },
        {
            id: '5903',
            name: 'DISSEN S.A.S. OUTLET CARTAGENA PLAZUELAS'
        },
        {
            id: '5949',
            name: 'DISSEN S.A.S. OUTLET DOS QUEBRADAS'
        },
        {
            id: '9663',
            name: 'DISSEN S.A.S. OUTLET LEONISA AMERICAS'
        },
        {
            id: '9689',
            name: 'DISSEN S.A.S. OUTLET LEONISA AMERICAS #2'
        },
        {
            id: '5976',
            name: 'DISSEN S.A.S. OUTLET LEONISA LA 65'
        },
        {
            id: '9683',
            name: 'DISSEN S.A.S. OUTLET LSA SALON CORSETERO'
        },
        {
            id: '2220',
            name: 'DISSEN S.A.S. OUTLET LSA -VEST DE BAÑO'
        },
        {
            id: '4037',
            name: 'DISSEN S.A.S. OUTLET MED (JUNIN)'
        },
        {
            id: '5925',
            name: 'DISSEN S.A.S. OUTLET MED (MAYORCA)'
        },
        {
            id: '5921',
            name: 'DISSEN S.A.S. OUTLET MED(SUCRE)'
        },
        {
            id: '5924',
            name: 'DISSEN S.A.S. OUTLET MED(SUPER CENTRO)'
        },
        {
            id: '5995',
            name: 'DISSEN S.A.S. OUTLET PASEO BOLIVAR'
        },
        {
            id: '9916',
            name: 'DISSEN S.A.S. OUTLET RESTREPO '
        },
        {
            id: '9054',
            name: 'DISSEN S.A.S. OUTLET SAN VICTORINO'
        },
        {
            id: '5906',
            name: 'DISSEN S.A.S. OUTLET UNICO BARRRANQUILLA'
        },
        {
            id: '1005',
            name: 'DISSEN S.A.S. OUTLET UNICO HUILA NEIVA'
        },
        {
            id: '1143',
            name: 'DISSEN S.A.S. OUTLET UNICO NO 3'
        },
        {
            id: '1142',
            name: 'DISSEN S.A.S. OUTLET UNICO NO. 2'
        },
        {
            id: '6037',
            name: 'DISSEN S.A.S. OUTLET UNICO NO.2 B/QULLA'
        },
        {
            id: '1150',
            name: 'DISSEN S.A.S. OUTLET UNICO PASTO'
        },
        {
            id: '9688',
            name: 'DISSEN S.A.S. OUTLET UNICO VILLAVICENCIO'
        },
        {
            id: '4032',
            name: 'DISSEN S.A.S. OUTLET VENTA ESPECIAL MED'
        },
        {
            id: '5907',
            name: 'DISSEN S.A.S. TDA LEONISA CARIBE PLAZA'
        },
        {
            id: '9678',
            name: 'DISSEN S.A.S. TDA LEONISA DUITAMA BOYACA'
        },
        {
            id: '9682',
            name: 'DISSEN S.A.S. TDA LEONISA GRAN ESTACION'
        },
        {
            id: '5551',
            name: 'DISSEN S.A.S. TDA LEONISA LOS MOLINOS'
        },
        {
            id: '1017',
            name: 'DISSEN S.A.S. TDA LEONISA PLAZA CENTRAL'
        },
        {
            id: '1018',
            name: 'DISSEN S.A.S. TDA LEONISA PORTAL DEL PRAD '
        },
        {
            id: '0589',
            name: 'DISSEN S.A.S. TDA LEONISA UNIC. CALI'
        },
        {
            id: '1009',
            name: 'DISSEN S.A.S. TDA LEONISA VIVA B/QUILLA'
        },
        {
            id: '9685',
            name: 'DISSEN S.A.S. TDA LEONISA YOPAL'
        },
        {
            id: '1061',
            name: 'DISSEN S.A.S. TDA LSA B/VISTA STA MARTA'
        },
        {
            id: '1149',
            name: 'DISSEN S.A.S. TDA LSA CAMPANARIO POPAYAN'
        },
        {
            id: '5597',
            name: 'DISSEN S.A.S. TDA LSA PORTAL DEL QUINDIO'
        },
        {
            id: '9686',
            name: 'DISSEN S.A.S. TDA LSA SAN PEDRO NEIVA'
        },
        {
            id: '5989',
            name: 'DISSEN S.A.S. TDA LSA. ALAMEDAS PEREIRA'
        },
        {
            id: '5990',
            name: 'DISSEN S.A.S. TDA LSA. FUNDADORES MZLES'
        },
        {
            id: '9675',
            name: 'DISSEN S.A.S. TDA UNICENTRO VILLAVICENC'
        },
        {
            id: '1715',
            name: 'DISSEN S.A.S. TDA  CLLE 36 BMANGA'
        },
        {
            id: '5992',
            name: 'DISSEN S.A.S. TIENDA BASICA BQUILLA 72'
        },
        {
            id: '9680',
            name: 'DISSEN S.A.S. TIENDA BASICA KENNEDY NO.2'
        },
        {
            id: '5888',
            name: 'DISSEN S.A.S. TIENDA BASICA MANIZALES'
        },
        {
            id: '0329',
            name: 'DISSEN S.A.S. TIENDA CALI (COSMOCENTRO)'
        },
        {
            id: '9684',
            name: 'DISSEN S.A.S. TIENDA CENTRO MAYOR'
        },
        {
            id: '0617',
            name: 'DISSEN S.A.S. TIENDA JARDIN PLAZA'
        },
        {
            id: '5994',
            name: 'DISSEN S.A.S. TIENDA LEONISA B/MANGA'
        },
        {
            id: '9973',
            name: 'DISSEN S.A.S. TIENDA LEONISA CHIPICHAPE'
        },
        {
            id: '2847',
            name: 'DISSEN S.A.S. TIENDA LEONISA EL TESORO2'
        },
        {
            id: '1015',
            name: 'DISSEN S.A.S. TIENDA LEONISA LA COLINA'
        },
        {
            id: '2708',
            name: 'DISSEN S.A.S. TIENDA LEONISA MAYORCA'
        },
        {
            id: '5929',
            name: 'DISSEN S.A.S. TIENDA LEONISA OVIEDO'
        },
        {
            id: '9672',
            name: 'DISSEN S.A.S. TIENDA LEONISA PALATINO'
        },
        {
            id: '0596',
            name: 'DISSEN S.A.S. TIENDA LEONISA PALMIRA'
        },
        {
            id: '9662',
            name: 'DISSEN S.A.S. TIENDA LEONISA PORTAL 80'
        },
        {
            id: '5948',
            name: 'DISSEN S.A.S. TIENDA LEONISA SAN DIEGO'
        },
        {
            id: '9660',
            name: 'DISSEN S.A.S. TIENDA LEONISA SOGAMOSO'
        },
        {
            id: '5977',
            name: 'DISSEN S.A.S. TIENDA LEONISA STA FE'
        },
        {
            id: '9977',
            name: 'DISSEN S.A.S. TIENDA LEONISA TUNJA'
        },
        {
            id: '4028',
            name: 'DISSEN S.A.S. TIENDA LEONISA UNIC. MED'
        },
        {
            id: '3039',
            name: 'DISSEN S.A.S. TIENDA LEONISA VIVA ENVIGADO'
        },
        {
            id: '5913',
            name: 'DISSEN S.A.S. TIENDA LSA B/VISTA B/QUILL'
        },
        {
            id: '5912',
            name: 'DISSEN S.A.S. TIENDA LSA BUENAVISTA MONT'
        },
        {
            id: '2705',
            name: 'DISSEN S.A.S. TIENDA LSA CACIQUE B/MANGA'
        },
        {
            id: '5993',
            name: 'DISSEN S.A.S. TIENDA LSA CART-BOCAGRAN'
        },
        {
            id: '1007',
            name: 'DISSEN S.A.S. TIENDA LSA LA ESTACION IBAG'
        },
        {
            id: '1008',
            name: 'DISSEN S.A.S. TIENDA LSA MALL PLAZA EL CA'
        },
        {
            id: '1004',
            name: 'DISSEN S.A.S. TIENDA LSA SANTAFE BOGOTA'
        },
        {
            id: '1702',
            name: 'DISSEN S.A.S. TIENDA LSA UNICENTRO PASTO'
        },
        {
            id: '9670',
            name: 'DISSEN S.A.S. TIENDA UNICENTRO BOGOTA'
        },
        {
            id: '5946',
            name: 'DISSEN S.A.S. TIENDA  ARMENIA'
        },
        {
            id: '9924',
            name: 'DISSEN S.A.S. TIENDA  FUSAGASUGA'
        },
        {
            id: '2216',
            name: 'DISSEN S.A.S. TIENDA  LA 33'
        },
        {
            id: '5988',
            name: 'DISSEN S.A.S. TIENDA  SAN NICOLAS'
        },
        {
            id: '4045',
            name: 'DISSEN S.A.S. ZEBRA MED ( LA 33)'
        },
        {
            id: '5923',
            name: 'DISSEN S.A.S. ZEBRA MED (SABANETA)'
        },
        {
            id: '4033',
            name: 'DISSEN S.A.S. ZEBRA MED (TERM. 324 )'
        },
        {
            id: '4039',
            name: 'DISSEN S.A.S. ZEBRA MED (TERM. DEL SUR )'
        },
        {
            id: '5926',
            name: 'DISSEN S.A.S. ZEBRA MED  (TERM NTE 357)'
        },
        {
            id: '3006',
            name: 'DISSEN S.A.S. OUTLET CENTRO MERCANTIL #2'
        },
        {
            id: '5902',
            name: 'DISSEN S.A.S.TDA BASICA PASEO LA CASTELL'
        },
        {
            id: '1016',
            name: 'DISSEN S.A.S.TDA LEONISA GUATAPURÍ V/PAR'
        },
        {
            id: '0625',
            name: 'DISSEN S.A.S.TDA LSA MULTIPLAZA LA FELIC'
        },
        {
            id: '5998',
            name: 'DISSEN S.A.S.TIENDA BASICA ZARAGOZA CGEN'
        },
        {
            id: '1010',
            name: 'DISSEN S.A.S.TIENDA LEONISA TITÁN '
        },
        {
            id: '1006',
            name: 'DISSEN S.A.S.TIENDA LSA PRIMAVERA URBANA'
        }
    ];
  }

}
