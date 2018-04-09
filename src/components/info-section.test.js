import React from 'react'
import { shallow, mount } from 'enzyme'

import InfoSection from './info-section'

describe('<InfoSection />', () => {
  it('Renders without crashing', () => {
    shallow(<InfoSection />)
  })

  it('renders an element with an id of "what"', () => {
    const wrapper = shallow(<InfoSection />)
    expect(wrapper.is('#what')).toEqual(true)
  })
})
