import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./style";
import CartItem from "./CartItem/CartItem";
const Cart = ({ cart }) => {
  const classes = useStyles();

  if (!cart.line_items) return "Loading";
  // When Cart is Empty
  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your cart. Add item to Cart
    </Typography>
  );

  // When Cart has items show the items
  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem item={lineItem} />
          </Grid>
        ))}
        <div className={classes.cardDetails}>
          <Typography variant="h4">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <div>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
            >
              Empty Cart
            </Button>
            <Button
              className={classes.checkoutButton}
              size="large"
              type="button"
              variant="contained"
              color="primary"
            >
              Checkout
            </Button>
          </div>
        </div>
      </Grid>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
