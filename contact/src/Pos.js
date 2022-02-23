import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const pOptions = [
 
  {
    key: 'Volunteer',
    text: 'Volunteer',
    value: 'Volunteer',
  },
  {
    key: 'Executive',
    text: 'Executive',
    value: 'Executive',
  },
  {
    key: 'Core Coordinator',
    text: 'Core Coordinator',
    value: 'Core Coordinator',
  },
  {
    key: 'Ex-Core Coordinator',
    text: 'Ex-Core Coordinator',
    value: 'Ex-CoreCoordinator',
  },

]

const DropdownExampleSelection = () => (
  <Dropdown
    placeholder='Position'
    fluid
    selection
    options={pOptions}
  />
)

export default DropdownExampleSelection
