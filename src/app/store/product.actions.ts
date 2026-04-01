import { createAction } from "@ngrx/store";
import { ProductType } from "./product.model";
import { props } from "@ngrx/store";


export const loadProducts = createAction('[Products] Load Data')

export const loadProductsSuccess = createAction(
    '[Products] Load Products Sucess',
    props<{products: ProductType[]}>()
)

export const loadProductsFailure = createAction(
    '[Products] Load Products Failure',
    props<{error: string}>()
)

export const addProduct = createAction(
    '[Product] Add Product',
    props<{product: ProductType}>()
)

export const addProductSuccess = createAction(
    '[Product] Add Product Success',
    props<{product: ProductType}>()
)

export const addProductFailure = createAction(
    '[Product] Add Product Failure',
    props<{error: string}>()
)

export const deleteProduct = createAction(
    '[Product] Delete Product',
    props<{id: string}>()
)

export const deleteProductSuccess = createAction(
    '[Product] Delete Product Success',
    props<{id: string}>()
)

export const deleteProductFailure = createAction(
    '[Product] Delete Product Failure',
    props<{error: string}>()
)