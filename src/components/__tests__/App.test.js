import React from 'react'
import { shallow } from 'enzyme'
import App from '../App.js'
import CommentBox from '../CommentBox.js'
import CommentList from '../CommentList.js'

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
