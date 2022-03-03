import { PRODUCT_SAVED, PRODUCT_SAVED_ERROR, SUBMIT_FORM_PRODUCT } from '../types/index';

export function newProductAction(productData) {
    return (() => {
        //here insert in db and call reducer
        console.log('adding product', productData);
    })
}