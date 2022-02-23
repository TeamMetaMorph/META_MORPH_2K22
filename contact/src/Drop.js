import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const fOptions = [
  {
    key: '1',
    text: '1',
    value: '1',
  },
  {
    key: '2',
    text: '2',
    value: '2',
  },
  {
    key: '3',
    text: '3',
    value: '3',
  },
  {
    key: '4',
    text: '4',
    value: '4',
  },

]

const DropdownExampleSelection = () => (
  <Dropdown
    placeholder='Year'
    fluid
    selection
    options={fOptions}
  />
)

export default DropdownExampleSelection
