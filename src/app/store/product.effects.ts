import { createEffect } from "@ngrx/effects";
import * as ProductActions from './product.actions'
import { ofType } from "@ngrx/effects";
import { catchError, pipe } from "rxjs";
import { switchMap } from "rxjs";
import { map } from "rxjs";
import { Actions } from "@ngrx/effects";
import { Inject, Injectable } from "@angular/core";
import { inject } from "@angular/core";
import { ProductService } from "../services/product-service";
import { of } from "rxjs";

@Injectable()
export class ProductEffects{
    private actions$ =  inject(Actions)
    private productService  =inject(ProductService)

    loadProducts$ = createEffect(()=>
        this.actions$.pipe(
            ofType(ProductActions.loadProducts),
            switchMap(()=>
                this.productService.getProducts().pipe(
                    map((response:any)=>ProductActions.loadProductsSuccess({products:response})),
                    catchError(()=>of(ProductActions.loadProductsFailure({error:"Failed to get products from api"})))
                )
            )
        )
    );

    addProduct$ = createEffect(()=>
        this.actions$.pipe(
            ofType(ProductActions.addProduct),
            switchMap(({product})=>
                this.productService.addProduct(product).pipe(
                    map((response:any)=>ProductActions.addProductSuccess({product:response})),
                    catchError(()=>of(ProductActions.addProductFailure({error:"Failed to add product"})))
                )
            )
        )
    );

    deleteProduct$ = createEffect(()=>
        this.actions$.pipe(
            ofType(ProductActions.deleteProduct),
            switchMap(({id})=>
                this.productService.deleteProduct(id).pipe(
                    map((response:any)=>ProductActions.deleteProductSuccess({id})),
                    catchError(()=>of(ProductActions.deleteProductFailure({error:"Failed to delete product"})))
                )
            )
        )
    );


}