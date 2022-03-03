import axiosClient from '../config/axios';
import { PRODUCT_SAVED, PRODUCT_SAVED_ERROR, SUBMIT_FORM_PRODUCT } from '../types/index';

export function newProductAction(productData) {
    return (async (dispatch) => {
        //here insert in db and call reducer
        const addProduct = () => ({ type: SUBMIT_FORM_PRODUCT })
        dispatch(addProduct());
        try {
            //el retorno de la funcion que se invoca en el dispatch es el action
            //por tanto, PRODUCT_SAVED se encuentra en action.type
            const res = await axiosClient.post('/products', productData);
            console.log(res);
            const productSaved = (productData) => ({ type: PRODUCT_SAVED, payload: productData })
            dispatch(productSaved(productData));
        } catch (error) {
            console.log(error)
            const productSavedError = () => ({ type: PRODUCT_SAVED_ERROR })
            dispatch(productSavedError());
        }
    })
}