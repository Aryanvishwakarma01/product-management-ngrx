import { createSelector } from "@ngrx/store";
import { createFeatureSelector } from "@ngrx/store";
import { ProductType } from "./product.model";
import { initialStateType } from "./product.reducer";
export const selectProductFeature  =createFeatureSelector<initialStateType>('product')

export const selectProducts = createSelector(
    selectProductFeature,

    (state: initialStateType) => state.products
)

export const selectApiError = createSelector(
    selectProductFeature,

    (state: initialStateType) => state.error
)