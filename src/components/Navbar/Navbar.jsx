import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";

import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/commerce.png";
import useStyles from "./style.js";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
          >
            <img
              src={logo}
              alt="E-commerce"
              height="25px"
              className={classes.image}
            />
            E-Commerce
          </Typography>
          <div className={classes.grow} />
          {/* Check if location is on the same page i.e '/' then 
  we show the card if it is different than the root route
   then we don't show anything  */}
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show Cart Items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
