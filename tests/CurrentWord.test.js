import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CurrentWord from '../client/components/CurrentWord.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<CurrentWord />', () => {
  it('CurrentWord component should exist', () => {
    const wrapper = shallow(<CurrentWord />);
    expect(wrapper).toBeDefined();
  });

});
