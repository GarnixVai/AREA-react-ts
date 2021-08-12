import { render, screen, fireEvent, waitForElement, act } from '@testing-library/react';
import { useEffect, useState } from "react";
import '@testing-library/jest-dom';
import Enzyme, { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Game from './Game';
configure({adapter: new Adapter()});
let container: any = null;

// https://www.toptal.com/react/testing-react-hooks-tutorial

describe('Game', function () {
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  afterEach(() => {
    // cleanup on exiting
    // unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('renders game', () => {
    const container = render(<Game />);
    expect(container).toBeTruthy;
  });

  it('test', ()=>{
      render(<Game />);
      // fireEvent.change(screen.getByC);
      act(() => {
        render(<Game />, container);
      });
      // expect(container.textContent).toBe("loading");

  });

});
  
  