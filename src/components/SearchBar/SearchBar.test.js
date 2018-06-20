import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchBar from './index';


const handleSearch = jest.fn();
jest.useFakeTimers();



const setup = (renderShallow, handleSearch) => {
  const props = {
    handleSearch
  };

  const enzymeWrapper = renderShallow
    ? shallow(<SearchBar {...props} />)
    : mount(<SearchBar {...props} />);

  return enzymeWrapper;
};

describe('<SearchBar> component', () => {

  let enzymeWrapper;
  beforeEach(() => {
    enzymeWrapper = setup(false, handleSearch);
  });

  it('should render', () => {
    expect(enzymeWrapper.exists()).toBe(true);
  });

  it('form should submit on click', () => {
    enzymeWrapper.find(Button).simulate('click');
    expect(handleSearch.mock.calls.length).toBe(1);
  });

  it('form should submit on enter', () => {
    enzymeWrapper.find(TextField).simulate('keyDown', {keyCode: 40});
    expect(handleSearch.mock.calls.length).toBe(1);
  });

  it('textbox changes value on state change', () => {
    enzymeWrapper
      .find('input')
      .simulate('change', {
        target: {
          value: 'bar'
        }
      });
    expect(enzymeWrapper
      .find('input')
      .prop('value')
    ).toEqual('bar');
  });
});