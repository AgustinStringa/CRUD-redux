//este reducer recibe el state y la accion desde el store
import {
    GET_PRODUCTS,
    PRODUCT_SAVED,
    PRODUCT_SAVED_ERROR,
    SUBMIT_FORM_PRODUCT,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_SUCCESS,
    DELETE_PRODUCT,
    DELETE_PRODUCT_ERROR,
    DELETE_PRODUCT_SUCCESS,
    GET_PRODUCT_DATA,
    GET_PRODUCT_DATA_SUCCESS,
    GET_PRODUCT_DATA_ERROR,
    SAVE_PRODUCT_DATA,
    SAVE_PRODUCT_DATA_SUCCESS,
} from '../types/index';

const initialState = {
    products: [],
    error: null,
    loading: false,
    productEdit: null,
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
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        case SUBMIT_FORM_PRODUCT:
        case GET_PRODUCTS:
        case DELETE_PRODUCT:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                products: action.payload,
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                products: state.products.filter((prod) => prod.id !== action.payload)
            }
        case DELETE_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
            }
        case GET_PRODUCT_DATA:
            return {
                ...state,
                productEdit: null,
                error: false,
                loading: true,
            }
        case GET_PRODUCT_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                productEdit: action.payload
            }
        case GET_PRODUCT_DATA_ERROR:
            return {
                ...state,
                productEdit: null,
                error: true,
                loading: false,
            }
        case SAVE_PRODUCT_DATA:
            return {
                ...state,
                loading: true,
                error: false,
                productEdit: null
            }
        case SAVE_PRODUCT_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                productEdit: null,
            }
        default:
            return {
                ...state
            }
    }
}

export default productsReducer;