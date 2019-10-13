import React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'

import config from '../enzymeConfig'
import {
  createSchema,
  Autoform,
} from '../../src/index'

const custom = createSchema('binarier', {
  bin: {
    type: 'boolean'
  }
})

test('Allows checkboxes', () => {
  const app = mount(
    <Autoform schema={custom} />
  )

  const input = app.find('#bin')
  expect(input.prop('type')).toBe('checkbox')

  const label = app.find('label')
  expect(label).toHaveLength(1)
  expect(label.prop('htmlFor')).toBe('bin')
  expect(label.contains('models.binarier.bin')).toBe(true)
})

