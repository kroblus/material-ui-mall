import ProductCard from "../component/ProductCard";
import Grid from "@mui/material/Unstable_Grid2";
const ProductList = ({products})=> {

    return (
        <Grid container spacing={2} sx={{padding: '10px'}}>
            {products.map((product) => {
                return (
                    <Grid item key={product.id} xs={3}>
                        <ProductCard key={product.id} product={product}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default ProductList;