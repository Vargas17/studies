import React from 'react'
import { observer } from 'mobx-react'
import WishListItemView from './WishListItemView'
import WishListItemEntry from './WishListItemEntry'
import './WishListView.css'

const WishListView = ({ wishList }) => (
  <div className='list'>
    <ul>{wishList.items.map((item, idx) => <WishListItemView key={idx} item={item}></WishListItemView>)}</ul>
    <span>Total: R$ {wishList.totalPrice}</span>
    <WishListItemEntry wishList={wishList} />
  </div>
)

export default observer(WishListView)