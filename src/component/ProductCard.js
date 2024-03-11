import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import useImgUrl from "../hooks/useImgUrl";

const ProductCard = ({product}) => {
    const navigate = useNavigate()

    const image = useImgUrl(product.id)

    return (
        <Card sx={{maxWidth: 345}}>
            <CardActionArea onClick={() => navigate(`/product/${product.id}`)}>
                <CardMedia
                    component="img"
                    height="140"
                    src={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.price}$
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ProductCard