import React, { FC } from 'react';

import { Product } from '@wix/ambassador-crash-course-products-scala-app/rpc';

interface IRenderProductProps {
  product: Product;
}

const RenderProduct: FC<IRenderProductProps> = (props: IRenderProductProps) => {
  const { product } = props;

  return (
    <div>
      <div id="product-name">{`${product.name}`}</div>
      <img
        id="product-image"
        src={`${product.img}`}
        alt="Girl in a jacket"
        width="100"
        style={{ borderRadius: '10px' }}
        height="100"
      />
    </div>
  );
};

export default RenderProduct;
