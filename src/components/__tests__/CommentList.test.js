import React from 'react';
import { mount } from 'enzyme';
import CommentList from '../CommentBox.js';
import Root from '../../Root.js'

let wrapped;

beforeEach(() => {
const initialState = {
  comments: ['comment1', 'comment2']
}
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})

it('creates one <li> per comment', () => {
  wrapped.update()
  console.log(wrapped.find('li').length)
})
