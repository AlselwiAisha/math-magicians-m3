import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Btn from '../Components/Btn';
import renderWithRouter from '../Components/testPage';
import Layout from '../Components/Layout';
import NavBar from '../Components/Header';
import Calculator from '../Components/Calculator';
import Quote from '../Components/Quotes';
import ClcScrn from '../Components/ClcScrn';

describe('Btn component', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Btn />);
    expect(container).toMatchSnapshot();
    expect(screen.getByText('undefined'))
      .toBeInTheDocument('<button class="num btn" type="button">undefined</button>');
  });
});

describe('Calculator component', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });
});

describe('ClcScrn component', () => {
  it('should match the snapshot', () => {
    const { container } = render(<ClcScrn />);
    expect(container).toMatchSnapshot();
    expect(screen.getByText('undefinedundefinedundefined')).toMatchSnapshot();
  });
});

describe('Layout component', () => {
  it('should match the snapshot', () => {
    const { container } = renderWithRouter(<Layout />);
    expect(container).toMatchSnapshot();
  });
});

describe('NavBar component', () => {
  it('should match the snapshot', () => {
    const { container } = renderWithRouter(<NavBar />);
    expect(container).toMatchSnapshot();
  });
});
describe('Quote component', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Quote />);
    expect(container).toMatchSnapshot();
  });
});
