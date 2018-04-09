import React from 'react'
import { shallow, mount } from 'enzyme'

import Header from './header'

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<Header />)
  })

  // it('should restart game', () => {
  //   const callback = jest.fn()
  //   const wrapper = mount(<Header onRestartGame={callback} />)
  //   wrapper.find('.new').simulate('click')
  //   console.log(wrapper.state())
  //   expect(wrapper.state().feedback).to.equal('Make your guess!')
  // })
})
