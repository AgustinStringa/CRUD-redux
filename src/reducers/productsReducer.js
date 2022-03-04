//este reducer recibe el state y la accion desde el store
import {
    GET_PRODUCTS,
    PRODUCT_SAVED,
    PRODUCT_SAVED_ERROR,
    SUBMIT_FORM_PRODUCT,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_SUCCESS
} from '../types/index';

const initialState = {
    products: [],
    error: null,
    loading: false,
}

function productsReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCT_SAVED:
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
            return {
                ...state,
                loading: true,
                error: false,
            }
        case GET_PRODUCTS:
            return {
                ...state,
                loading: true,
            }
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                products: action.payload,
            }
        default:
            return {
                ...state
            }
    }
}

export default productsReducer;