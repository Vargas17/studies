import React, { useState } from 'react'
import { clone, getSnapshot, applySnapshot } from 'mobx-state-tree'
import WishListItemEdit from './WishListItemEdit'
import './WishListItemView.css'

const WishListItemView = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [itemClone, setItemClone] = useState(null)

  const onToggleEdit = () => {
    setIsEditing(!isEditing)
    setItemClone(clone(item))
  }

  const onCancelEdit = () => {
    setIsEditing(false)
  }

  const onSaveEdit = () => {
    applySnapshot(item, getSnapshot(itemClone))
    setIsEditing(false)
    setItemClone(null)
  }

  const renderEditable = () => {
    return (
      <li className='item'>
        <WishListItemEdit item={itemClone} />
        <button onClick={onSaveEdit}>Save</button>
        <button onClick={onCancelEdit}>Cancel</button>
      </li>
    )
  }
  return (
    isEditing
      ? renderEditable()
      : (
      <li className='item'>
        <div>
          {item.image && <img src={item.image} alt='' />}
          <h3>{item.name}</h3>
        </div>
        <span>
          R$ {item.price}
          <div>
            <button onClick={onToggleEdit}>Edit</button>
            <button onClick={item.remove}>remove</button>
          </div>
        </span>
      </li>
    )
  )
}

export default WishListItemView