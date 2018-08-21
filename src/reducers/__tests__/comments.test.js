import commentsReducer from '../comments.js'
import { SAVE_COMMENT } from '../../actions/types'

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'comment2'
  }
  const newState = commentsReducer(['comment1'], action);

  expect(newState).toEqual(['comment1', 'comment2'])
})

it('handles irrelevant actions without erroring', () => {
  const newState = commentsReducer(['hi hi'], {type: 'SHOW_SPINNER'});

  expect(newState).toEqual(['hi hi'])
})
