import 'jsdom-global/register';
import 'jest-enzyme';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import CurrentWord from '../client/components/CurrentWord.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<CurrentWord />', () => {

  it('CurrentWord component should exist', () => {
    const wrapper = mount(<CurrentWord />);
    expect(wrapper).toBeDefined();
  });

  it('<CurrentWord /> should render current word to the page', () => {
    let word = 'test';
    const wrapper = mount(<CurrentWord word={word} />);
    expect(wrapper).toExist();
    expect(wrapper).toIncludeText('test');
  });

  it('<CurrentWord /> should contain props "word" and "chooseLevel"', () => {
    let word = 'test';
    let func = () => {return true};
    const wrapper = mount(<CurrentWord word={word} chooseLevel={func}/>);
    expect(wrapper).toHaveProp('word');
    expect(wrapper).toHaveProp('chooseLevel');
  })

});
