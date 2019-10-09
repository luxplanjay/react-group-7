import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  border: 1px solid teal;
`;

const StyledImage = styled.img`
  display: block;
  max-width: 100%;
`;

const StyledTitle = styled.h2`
  font-weight: 500;
`;

const Product = ({ imageUrl, alt, title, price, quantity }) => (
  <StyledContainer>
    <StyledImage src={imageUrl} alt={alt} width={640} />
    <StyledTitle>{title}</StyledTitle>
    <p>Price: {price}$</p>
    <h1>Quantity: {quantity < 50 ? 'Few left' : 'In stock'}</h1>
    <button type="button">Add to cart</button>
  </StyledContainer>
);

Product.defaultProps = {
  alt: 'product image'
};

Product.propTypes = {
  imageUrl: T.string.isRequired,
  alt: T.string,
  title: T.string.isRequired,
  price: T.number.isRequired,
  quantity: T.number.isRequired
};

export default Product;
