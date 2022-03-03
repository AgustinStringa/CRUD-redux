//este reducer recibe el state y la accion desde el store
import { PRODUCT_SAVED, PRODUCT_SAVED_ERROR, SUBMIT_FORM_PRODUCT } from '../types/index';

const initialState = {
    products: [],
    error: null,
    loading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case PRODUCT_SAVED:
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                error: false,
                products: [...state.products, action.payload]
            }
        case PRODUCT_SAVED_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        case SUBMIT_FORM_PRODUCT:
            console.log(action);
            return {
                ...state,
                loading: true,
            }
        default:
            return {
                ...state
            }
    }
}