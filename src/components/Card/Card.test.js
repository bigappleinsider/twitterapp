import React from 'react';
import Card from './index';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Linkify from 'react-linkify';
import format from 'date-fns/format';
import { shallow, mount } from 'enzyme';

const setup = (renderShallow, listing) => {
  const props = {
    item,
  };

  const enzymeWrapper = renderShallow
    ? shallow(<Card {...props} />)
    : mount(<Card {...props} />);

  return enzymeWrapper;
};

const item = {
  user: {
    name: 'Twitter Insider',
    profile_image_url: 'https://placeimg.com/200/200/tech',
  },
  created_at: 'Tue Jun 19 16:46:34 +0000 2018',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum molestie eleifend.',
};

describe('<Card> component', () => {
  let enzymeWrapper;
  beforeEach(() => {
    enzymeWrapper = setup(false, item);
  });

  it('should render name', () => {
    //debug()
    expect(enzymeWrapper.find(CardHeader).prop('title')).toEqual(
      item.user.name
    );
  });

  it('should render date created', () => {
    expect(enzymeWrapper.find(CardHeader).prop('subheader')).toEqual(
      format(item.created_at, 'MMMM DD, YYYY')
    );
  });

  it('should render user avatar', () => {
    expect(enzymeWrapper.find(Avatar).prop('aria-label')).toEqual(
      item.user.name
    );

    expect(enzymeWrapper.find(Avatar).prop('src')).toEqual(
      item.user.profile_image_url
    );
  });

  it('should render card content', () => {
    expect(
      enzymeWrapper
        .find(CardContent)
        .find(Linkify)
        .text('aria-label')
    ).toEqual(item.text);
  });
});
