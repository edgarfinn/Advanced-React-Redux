import { SAVE_COMMENT } from '../types.js'
import { saveComment } from '../index.js'

describe('save comment', () => {
  it('has the correct type', () => {
    const action = saveComment();

    expect(action.type).toEqual(SAVE_COMMENT)
  })

  it('has the correct payload', () => {
    const action = saveComment('comment123');

    expect(action.payload).toEqual('comment123')

  })
})
