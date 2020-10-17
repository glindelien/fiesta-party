import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/components/App.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('App component should exist', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  });

});
