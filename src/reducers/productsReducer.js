//este reducer recibe el state y la accion desde el store
import { PRODUCT_SAVED, PRODUCT_SAVED_ERROR, SUBMIT_FORM_PRODUCT } from '../types/index';

const initialState = {
    products: [],
    error: null,
    loading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        // case PRODUCT_SAVED:

        // case PRODUCT_SAVED_ERROR:

        // case SUBMIT_FORM_PRODUCT:

        default:
            return {
                ...state
            }
    }
}