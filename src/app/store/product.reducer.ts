import { createReducer } from "@ngrx/store";
import * as ProductActions from './product.actions'
import { ProductType } from "./product.model";
import { on } from "@ngrx/store";

export interface initialStateType{
    products: ProductType[];
    error: string | null;
}

export const initialState: initialStateType = {
    products: [],
    error: null
}

export const productReducer = createReducer(
    initialState,

    on(ProductActions.loadProductsSuccess, (state, {products}) => ({
        ...state,
        products,
        error: null
    })),

    on(ProductActions.loadProductsFailure, (state, {error})=> ({
        ...state,
        error: error
    })),

    on(ProductActions.addProductSuccess, (state, {product})=> ({
        ...state,
        products: [...state.products, product],
        error: null
    })),

    on(ProductActions.addProductFailure, (state, {error})=> ({
        ...state,
        error: error
    })),

    on(ProductActions.deleteProductSuccess, (state, {id})=> ({
        ...state,
        products: state.products.filter(product => product.id !== id),
        error: null
    })),

    on(ProductActions.deleteProductFailure, (state, {error})=> ({
        ...state,
        error: error
    }))
)