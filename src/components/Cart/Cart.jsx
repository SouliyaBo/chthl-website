import React from 'react';
import { Container, Typography, Grid, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart, onUpdateCartQty, onRemoveFromCart }) => {
    console.log('cart: ', cart);

    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart,
            <Link to="/" className={classes.link}>
                start adding some
            </Link>!
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart?.map((item) => (
                    <Grid key={item?._id} item xs={12} sm={4} >
                        <Card>
                            <CardMedia image="https://cdn.chec.io/merchants/23249/assets/86FJbl0a7iY2tOGX|phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg" className={classes.media} alt='' />
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h4">{item.name}</Typography>
                                <Typography variant="h5">{item.buyPrice}</Typography>
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <div className={classes.buttons}>
                                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item._id, item.qty - 1)}>-</Button>
                                    <Typography>{item.qty}</Typography>
                                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item._id, item.qty + 1)}>+</Button>
                                </div>
                                <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {1000}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    );

    // if (!cart) return "Loading..."


    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterbottom>
                Your Shopping Cartss
            </Typography>
            { !cart?.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}



export default Cart