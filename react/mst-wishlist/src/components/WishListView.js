import React from 'react'
import WishListItemView from './WishListItemView'

const WishListView = ({ wishList }) => (
  <div className='list'>
    <ul>{wishList.items.map((item, idx) => <WishListItemView key={idx} item={item}></WishListItemView>)}</ul>
    Total: {wishList.totalPrice}
  </div>
)

export default WishListView