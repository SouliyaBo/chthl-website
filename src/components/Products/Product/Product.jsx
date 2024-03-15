import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';



const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

    

    return (
     <Card className={classes.root}>
         {/* <CardMedia className={classes.media} image={"https://cdn.chec.io/merchants/23249/assets/86FJbl0a7iY2tOGX|phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg"} title={product.name} /> */}
         <CardMedia className={classes.media} title={product.name} image={"https://cdn.chec.io/merchants/23249/assets/86FJbl0a7iY2tOGX|phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg"}/>

        <CardContent>
            <div className={classes.cardContent}>

                <Typography variant="h5" gutterBottom>
                    {product.name}
                </Typography>

                <Typography variant="h5">
                    {product?.buyPrice} {product?.typeMoney}
                </Typography>
                </div>

                {/* <Typography dangerouslySetInnerHTML={{ __html: product.description}} variant="body2" color="textSecondary" /> */}
                <Typography variant="body2" color="textSecondary">sdk,fklsdfklsdjfsjdf</Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardContent}>
            <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
               {product?.qty}
            </IconButton>
            <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                <AddShoppingCart />
            </IconButton>
        </CardActions>
     </Card>
    );
}

export default Product


