import React from 'react';
import T from 'prop-types';

const Product = ({ imageUrl, alt, title, price, quantity }) => (
  <div>
    <img src={imageUrl} alt={alt} width={640} />
    <h2>{title}</h2>
    <p>Price: {price}$</p>
    <h1>Quantity: {quantity < 50 ? 'Few left' : 'In stock'}</h1>
    <button type="button">Add to cart</button>
  </div>
);

Product.defaultProps = {
  alt: 'product image',
};

Product.propTypes = {
  imageUrl: T.string.isRequired,
  alt: T.string,
  title: T.string.isRequired,
  price: T.number.isRequired,
  quantity: T.number.isRequired,
};

export default Product;
