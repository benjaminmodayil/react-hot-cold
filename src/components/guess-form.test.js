import React from 'react'
import { shallow, mount } from 'enzyme'

import GuessForm from './guess-form'

describe('<GuessForm />', () => {
  it('should submit a guess', () => {
    const callback = jest.fn()
    const wrapper = mount(<GuessForm onMakeGuess={callback} />)
    const value = '23'
    wrapper.find('input[type="number"]').instance().value = value
    wrapper.simulate('submit')
    wrapper.update()
    expect(callback).toHaveBeenCalledWith(value)
  })
})
