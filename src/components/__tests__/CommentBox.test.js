import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox.js';
import Root from '../../Root.js'
let wrapped;

beforeEach(() => {
  wrapped = mount(<Root><CommentBox /></Root>);
});

afterEach(() => {
  wrapped.unmount();
});

it('shows a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
});

describe('the text area', () => {

  beforeEach(() => {
    // 1) find the controlled component
    // 2) simulate a event
    // 3) provide fake event object
    // 4) force the tested component to update / re-render
    wrapped.find('textarea').simulate('change', {
      target: { value: 'my new comment' }
    });
    wrapped.update();
  })

  // user can enter some text
  it('lets users enter text into the textarea', () => {
    // 5) Assert that the controlled component has updated as expected
    expect(wrapped.find('textarea').prop('value')).toEqual('my new comment')
  });

  // when submitted, the textarea is blanked
  it('is cleared when submitted', () => {
    // 1) find the controlled component
    // 2) simulate a event
    expect(wrapped.find('textarea').prop('value')).toEqual('my new comment')
    wrapped.find('form').simulate('submit')
    // 4) force the tested component to update / re-render
    wrapped.update();
    // 5) Assert that the controlled component has updated as expected
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  });
})
