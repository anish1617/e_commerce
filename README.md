# Ecommerce Website using React and Commerce Js

This project is a simple web commerce app where there is products with cart, checkout functionality. Implemented commerce api for adding, deleting, editing and emptying the cart items. As for the checkout Stripe payment method is integrated.

## Learning and Implementation on this project

Learned and Implemented the React Basics like react components, react-hooks, react-router-dom, react-form-hooks, useState, useEffect, asynchoronous function, commerce js api, stripe payment function, and for the UI i used Material UI.

### Install Dependencies with npm

```bash
npm install @material-ui/core @material-ui/icons @chec/commerce.js @stripe/react-stripe-js @stripe/stripe-js react-router-dom react-hook-form
```

## Tools Used

<p align="center">

<a href="https://commercejs.com/" rel="noopener sponsored" target="_blank"><img height="128" width="128" src="data:image/png;base64,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" alt="commerce" /></a>
<a href="https://mui.com/" rel="noopener sponsored" target="_blank"><img height="128" width="128" src="data:image/png;base64,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" alt="material ui" title="The React UI library" loading="lazy" /></a>
<a href="https://stripe.com/" rel="noopener sponsored" target="_blank"><img height="128" width="128" src="data:image/png;base64,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" alt="stripe" title="Stripe Payment Gateway" /></a>

</p>

## Quick Note

Stripe Payment gateway functionality is coded but due to unavailability of credit card, the commerce js integration with stripe payment gateway could not be seen in this project, so Successful purchase is just hard coded.

## Resources for successfully completing the project

Check out material-ui documentation [MUI](https://mui.com/).

Check out commerce js documentation [Commercejs](https://commercejs.com/docs/).

Check out Stripe documentation [Stripe](https://stripe.com/docs).

Check out Reactjs documentation [Reactjs](https://reactjs.org/docs/getting-started.html).

Check out React-hook-form documentation [react-hook-form](https://react-hook-form.com/).

Check out React Router documentation [React Router](https://v5.reactrouter.com/web/guides/quick-start).

## Hosted on

#### **Click on the icon to see Project Demo**

---

[<img loading="lazy" alt="GitHub" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" height="25">](https://anish1617.github.io/e_commerce/)

GitHub allows us to host the Git repository and coordinate contributions.

[<img loading="lazy" alt="Netlify" src="https://cdn.netlify.com/15ecf59b59c9d04b88097c6b5d2c7e8a7d1302d0/1b6d6/img/press/logos/full-logo-light.svg" height="30">](https://commercejsreactproject.netlify.app/)

Netlify allows us to deploy app faster.


