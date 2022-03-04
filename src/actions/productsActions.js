import axiosClient from '../config/axios';
import Swal from 'sweetalert2';
import {
    PRODUCT_SAVED,
    PRODUCT_SAVED_ERROR,
    SUBMIT_FORM_PRODUCT,
    GET_PRODUCTS,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_SUCCESS,
    DELETE_PRODUCT,
    DELETE_PRODUCT_ERROR,
    DELETE_PRODUCT_SUCCESS
} from '../types/index';

export function newProductAction(productData) {
    return (async (dispatch) => {
        //here insert in db and call reducer
        const addProduct = () => ({ type: SUBMIT_FORM_PRODUCT })
        dispatch(addProduct());
        try {
            //el retorno de la funcion que se invoca en el dispatch es el action
            //por tanto, PRODUCT_SAVED se encuentra en action.type
            await axiosClient.post('/products', productData);
            const productSaved = (productData) => ({ type: PRODUCT_SAVED, payload: productData })
            dispatch(productSaved(productData));
            Swal.fire('Product Saved', `Your new product "${productData.name}" was created successfully`, 'success');
        } catch (error) {
            console.log(error)
            const productSavedError = () => ({ type: PRODUCT_SAVED_ERROR })
            dispatch(productSavedError());
            Swal.fire('Error', 'Error at db inserction', 'error');
        }
    })
}

export function getProductsAction() {
    return (async (dispatch) => {
        try {
            const products = () => ({ type: GET_PRODUCTS });
            dispatch(products());
            const res = await axiosClient.get('/products');
            const productsSuccess = () => ({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
            dispatch(productsSuccess());
        } catch (error) {
            console.log(error);
            const productsError = () => ({ type: GET_PRODUCTS_ERROR });
            dispatch(productsError())
        }
    })
}

export function deleteProductAction(id) {
    return (async (dispatch) => {
        try {
            const deleteProduct = () => ({ type: DELETE_PRODUCT });
            dispatch(deleteProduct());
            await axiosClient.delete(`/products/${id}`);
            //llamar de nuevo a la api y cargar los productos o filtrar y eliminar el que tiene el id
            setTimeout(() => {
                const deleteProductSuccess = () => ({ type: DELETE_PRODUCT_SUCCESS, payload: id });
                dispatch(deleteProductSuccess());
            }, 2000)
        } catch (error) {
            console.log(error);
            const deleteProductError = () => ({ type: DELETE_PRODUCT_ERROR })
            dispatch(deleteProductError());
            Swal.fire('Error', 'Error at delete', 'error');
        }
    })
}