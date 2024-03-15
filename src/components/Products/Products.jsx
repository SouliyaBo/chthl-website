import React from 'react';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Product from './Product/Product';
import useStyles from './styles'


const Products = ({ products, onAddToCart }) => {
    console.log('products: ', products);
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products?.map((product) => (
                    <Grid item key={product?._id} xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.root}>
                            <CardMedia className={classes.media} title={product.name} image={"https://cdn.chec.io/merchants/23249/assets/86FJbl0a7iY2tOGX|phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg"} />
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
                                <IconButton aria-label="Add to Cart">
                                    {product?.qty}
                                </IconButton>
                                <IconButton onClick={() => onAddToCart(product?._id, 1)}>
                                    <AddShoppingCart />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </main>
    );

}

export default Products;