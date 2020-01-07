import React from 'react'
import { observer } from 'mobx-react'

import './WishListItemEdit.css'

const WIshListItemEdit = ({ item }) => {
  const onNameChange = event => {
    item.changeName(event.target.value)
  }
  const onPriceChange = event => {
    const price = parseInt(event.target.value)
    if(!isNaN(price))
      item.changePrice(price)
  }
  const onImageChange = event => {
    item.changeImage(event.target.value)
  }

  return (
    <div className='item-edit'>
      <div style={{ marginTop: 15 }}>
        Name: <input value={item.name} onChange={onNameChange}/>
      </div>
      <br />
      <div>
        Price: <input value={item.price} onChange={onPriceChange} />
      </div>
      <br />
      <div>
        Image: <input value={item.image} onChange={onImageChange} />
      </div>
      <br />
    </div>
  )
}

export default observer(WIshListItemEdit)