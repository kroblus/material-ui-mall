import {TextField} from "@mui/material";
import getProductData from "../data/productData";


const SearchBasic = ({setProducts}) => {
    const searchProducts = e => {
        const searchValue = e.target.value;
        const productData = getProductData().filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()))
        setProducts(productData);
    }

    return (
        <TextField
            onChange={e => searchProducts(e)}
            fullWidth
            id="standard-basic"
            label="Search"
            variant="standard"
        />
    )
}

export default SearchBasic