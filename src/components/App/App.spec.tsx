import React, { Suspense } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from '@wix/wix-i18n-config';
import i18n from '../__mocks__/i18n';
import App from './App';
import { aProduct } from '@wix/ambassador-crash-course-products-scala-app/builders';
import { Product } from '@wix/ambassador-crash-course-products-scala-app/types';

const renderApp = (product?: Product) =>
  render(
    <Suspense fallback="...loading">
      <I18nextProvider i18n={i18n}>
        <App product={product} />
      </I18nextProvider>
    </Suspense>,
  );

describe('App', () => {
  it('renders a title correctly', async () => {
    const { findByTestId } = renderApp();

    const el = await findByTestId('app-title');

    expect(el).toBeDefined();
  });

  it('renders product name', async () => {
    // Generating product
    const productToRender = aProduct().build();
    const { baseElement } = renderApp(productToRender);

    const productName =
      baseElement?.querySelector(`#product-name`)?.innerHTML || '';

    // Check that the product name exists
    expect(productName).toEqual('monitor');
  });
});
