import React from 'react'
import { shallow, mount } from 'enzyme'

import Game from './game'

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game />)
  })

  it('should restart game', () => {
    const wrapper = mount(<Game />)
    wrapper.find('.new').simulate('click')
    expect(wrapper.state().feedback).toEqual('Make your guess!')
    expect(wrapper.state().guesses).toHaveLength(0)
  })
})
