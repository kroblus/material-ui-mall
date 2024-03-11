import {useParams} from "react-router-dom";
import Nav from "./Nav";
import React from "react";
import Footer from "../component/Footer";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import getProductById from "../data/getProductById";
import useImgUrl from "../hooks/useImgUrl";
import Button from "@mui/material/Button";

const Product = () => {
    const param = useParams()
    const id = param.id;
    const product = getProductById(id)
    const image = useImgUrl(id)
    return (
        <div>
            <Nav/>
            <Card sx={{display: 'flex'}}>
                <CardMedia
                    component="img"
                    sx={{width: 1000}}
                    image={image}
                    alt="Live from space album cover"
                />
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <CardContent sx={{flex: '1 0 auto'}}>
                        <Typography component="div" variant="h1">
                            {product.name}
                        </Typography><br/><br/><br/><br/><br/>
                        <Typography variant="h3" color="text.secondary" component="div">
                            {product.description}
                        </Typography><br/><br/><br/><br/><br/>
                        <Typography variant="h3" color="text.primary" component="div">
                            Price: {product.price}$
                        </Typography><br/><br/><br/><br/><br/>
                        <div align='center'>
                            <Button variant="outlined" color="success">Buy Now</Button>
                        </div>

                    </CardContent>

                </Box>
            </Card>
            <br/><br/><br/><br/><br/><br/>
            <Footer/>

        </div>
    )
}

export default Product