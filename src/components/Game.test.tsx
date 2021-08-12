import { render, screen, fireEvent, waitForElement, act } from '@testing-library/react';
import { useEffect, useState } from "react";
import { unmountComponentAtNode } from "react-dom";
import '@testing-library/jest-dom';
import Enzyme, { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Game from './Game';
configure({adapter: new Adapter()});
let container: any = null;
let initial:any; 
// https://www.toptal.com/react/testing-react-hooks-tutorial

describe('Game', function () {
  const setState = jest.fn();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const useStateMock: any = (initState: any) => [initState, setState];
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    jest.useFakeTimers();
  });
  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    jest.useRealTimers();
  });

  it('renders game', () => {
    const container = render(<Game />);
    expect(container).toBeTruthy;
  });

  it('check initial state', ()=>{
    const onChange = jest.fn();
    act(() => {
      render(<Game mode={false} score={0} userChoice={"scissors"} setScore={onChange} />, container);
    });
    const information = document.getElementsByTagName("pre")[0];
    expect(information.textContent).toContain("Your Choice:scissors");

  });

  it('game rule case #1', ()=>{
    const onChange = jest.fn();
    act(() => {
      render(<Game mode={false} score={0} userChoice={"scissors"} setScore={onChange} />, container);
    });
    const information = document.getElementsByTagName("pre")[0];
    expect(information.textContent).toContain("Your Choice:scissors");

  });

});
  
  