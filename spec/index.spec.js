import { default as expect } from 'expect'
import { default as isValid } from '../src'

describe('isValid', () => {
  it('validates that the path contains one of a list of file extensions', () => {
    expect(isValid('img.jpg', /jpg/)).toEqual(true)
    expect(isValid('img', /jpg/)).toEqual(null)
    expect(isValid('img.jpg', /png/)).toEqual(null)
    expect(isValid('img.jpg', /png|jpg/)).toEqual(true)
    expect(isValid('img.jpg', /\.jpg/)).toEqual(true)
    expect(isValid('img.jpg', /\.png/)).toEqual(null)
    expect(isValid('img.jpg', /\.jpg|\.jpeg|\.png|\.svg/)).toEqual(true)
    expect(isValid('img.jp', /\.jpg|\.jpeg|\.png|\.svg/)).toEqual(null)
  })
})
