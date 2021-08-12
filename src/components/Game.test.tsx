import { render, screen } from '@testing-library/react';
// import Enzyme, { shallow, mount, configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Game from './Game';
// configure({adapter: new Adapter()});
beforeEach(() => {
     
  });

test('renders game', () => {
    const container = render(<Game/>)
    expect(container).toBeTruthy;
  });

test('test game rule', ()=>{
    // const wrapper = mount(<Game />);
    // expect(wrapper.instance().counter).toBe(0)
    
    // const result = renderer.getRenderOutput();
});
  
  