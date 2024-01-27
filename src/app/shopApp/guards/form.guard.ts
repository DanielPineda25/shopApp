import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { GetProductsByRefService } from '../services/get-products-byRef.service';

export const formGuard: CanActivateFn = (route, state) => {

  const productsService = inject ( GetProductsByRefService );
  const router = inject ( Router )

  if( productsService.listProductsByRef.length > 0 ) {
    return true;
  } else {
    const urlTree = router.createUrlTree(['/register']);
    return urlTree;
  }

};
