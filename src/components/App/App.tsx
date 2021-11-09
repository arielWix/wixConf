import React from 'react';
import { withTranslation, WithTranslation } from '@wix/wix-i18n-config';
import s from './App.scss';
import RenderProduct from '../Product/product';

import { Product } from '@wix/ambassador-crash-course-products-scala-app/types';

interface AppProps extends WithTranslation {
  product?: Product;
}

const App = (props: AppProps) => {
  let product = props?.product;
  if (!product) {
    product = {
      name: 'Keyboard',
      description: 'Best product ever!',
      img:
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2V5Ym9hcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
      price: '20$',
    };
  }

  return (
    <div className={s.root}>
      <h2 className={s.title} data-hook="app-title">
        Welcome to the FED Infra challenge!
      </h2>
      <iframe
        title="ss"
        src="https://giphy.com/embed/V4NSR1NG2p0KeJJyr5"
        width="480"
        height="360"
        frameBorder="0"
        allowFullScreen
      />
      <div>
        <RenderProduct product={product} />
      </div>
    </div>
  );
};

export default withTranslation()(App);
