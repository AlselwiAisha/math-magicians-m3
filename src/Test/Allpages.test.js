import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../AllPages/Home';
import Calculator from '../AllPages/Calculator';
import Quote from '../AllPages/Quote';

describe('Home AllPages', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
describe('Calculator AllPages', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });
});
describe('Quote AllPages', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Quote />);
    expect(container).toMatchSnapshot();
  });
});
