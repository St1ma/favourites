import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import { EmptyPlaceholder, ErrorPlaceholder } from 'components/Placeholder';

Enzyme.configure({ adapter: new Adapter() });

describe('<EmptyPlaceholder />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = Enzyme.shallow(<EmptyPlaceholder />);
  });

  it('should have icon and text', () => {
    wrapper.setProps({ initial: true });

    expect(wrapper.children()).toHaveLength(2);
    expect(wrapper.childAt(0).props().name).toBe('dots-three-horizontal');
    expect(wrapper.childAt(1).props().children).toBe('Please, enter something to search field');
  });

  it('should have icon and 3 lines of text', () => {
    wrapper.setProps({ label: 'smth' });

    expect(wrapper.children()).toHaveLength(4);
    expect(wrapper.childAt(0).props().name).toBe('image');
    expect(wrapper.childAt(1).props().children).toBe('So pity!');
    expect(wrapper.childAt(2).props().children).toBe('No matchings found...');
    expect(wrapper.childAt(3).props().children).toBe('Please, try to rewrite your search text');
  });

  it('should have custom text', () => {
    wrapper.setProps({ initial: true, label: 'Custom label text' });

    expect(wrapper.children()).toHaveLength(2);
    expect(wrapper.childAt(0).props().name).toBe('dots-three-horizontal');
    expect(wrapper.childAt(1).props().children).toBe('Custom label text');
  });
});

describe('<ErrorPlaceholder />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = Enzyme.shallow(<ErrorPlaceholder />);
  });

  it('should render error message', () => {
    expect(wrapper.children()).toHaveLength(3);
    expect(wrapper.childAt(0).props().name).toBe('bug');
    expect(wrapper.childAt(1).props().children).toBe('Oops!');
    expect(wrapper.childAt(2).props().children).toBe('Something went wrong');
  });

  it('should render error message', () => {
    const onPress = () => {};
    wrapper.setProps({ onPress });

    expect(wrapper.children()).toHaveLength(4);
    expect(wrapper.childAt(0).props().name).toBe('bug');
    expect(wrapper.childAt(1).props().children).toBe('Oops!');
    expect(wrapper.childAt(2).props().children).toBe('Something went wrong');
    expect(wrapper.childAt(3).props().onPress).toBe(onPress);
  });
});
