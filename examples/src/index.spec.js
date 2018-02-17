import React from 'react';
import { shallow } from 'enzyme';

const Foo = () => (<div>foo</div>);

describe('Foo', () => {
  it('render', () => {
    const wrapper = shallow(<Foo />);
    expect(wrapper.length).toEqual(1);
  });
});
