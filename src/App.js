import React, {useState} from 'react';
import Nav from "./page/Nav";
import Carousels from "./page/Carousels";
import ProductList from "./page/ProductList";
import getProductData from "./data/productData";
import Footer from "./component/Footer";


function App() {
    const [products, setProducts] = useState(getProductData())
    return (
        <div>
            <Nav setProducts={setProducts}/>
            <Carousels/>
            <ProductList products={products}/>
            <Footer/>
        </div>
    )
}

export default App;
