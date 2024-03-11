import getProductData from "./productData";

const getProductById = id => {
    return getProductData().filter(product => product.id == id)[0];
}

export default getProductById;