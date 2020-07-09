import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const FilterMenu = () => (
<Dropdown text="All">
<Dropdown.Menu>
  <Dropdown.Item text='All'/>
  <Dropdown.Item text='Tops'/>
  <Dropdown.Item text='Bottoms'/>
  <Dropdown.Item text='Headwear'/>
  <Dropdown.Item text='Footwear'/>

</Dropdown.Menu>
</Dropdown>
)

export default FilterMenu