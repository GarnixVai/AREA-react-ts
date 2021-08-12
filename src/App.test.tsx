import React from 'react';
import { render, screen } from '@testing-library/react';
import {act} from 'react-dom/test-utils';
import App from './App';

describe('App', function () {
  it('renders learn react link', () => {
    const { container } = render(<App/>)
    expect(container.firstChild).toBeDefined;
  });

});