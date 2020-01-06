import { getSnapshot, onSnapshot } from 'mobx-state-tree'
import { reaction } from 'mobx';
import { WishListItem, WishList } from './WishList';

it('can create a instance of a model', () => {
  const item = WishListItem.create({
    name: 'Chronicles of Narnia',
    price: 28.73
  })

  expect(item.price).toBe(28.73)
  expect(item.image).toBe('')
})

it('can create a wishlist', () => {
  const list = WishList.create({
    items: [
      {
        name: 'Chronicles of Narnia',
        price: 28.73
      }
    ]
  })
  expect(list.items.length).toBe(1)
  expect(list.items[0].price).toBe(28.73)
})

it('can add new items', () => {
  const list = WishList.create()
  const states = []
  onSnapshot(list, snapshot => {
    states.push(snapshot)
  })

  list.add({
    name: 'Chronicles of Narnia',
    price: 28.73
  })
  expect(list.items.length).toBe(1)
  expect(list.items[0].name).toBe('Chronicles of Narnia')
  list.items[0].changeName('The Call of Cthullu')
  expect(list.items[0].name).toBe('The Call of Cthullu')

  expect(getSnapshot(list)).toMatchSnapshot()

  expect(states).toMatchSnapshot()
})

it('can calculate the total price of a wishlist', () => {
  const list = WishList.create({
    items: [
      {
        name: 'The Call of Cthullu',
        price: 19.25
      },
      {
        name: 'Zanoni',
        price: 40
      }
    ]
  })
  expect(list.totalPrice).toBe(59.25)
  let changed = 0
  reaction(() => list.totalPrice, () => changed++)

  expect(changed).toBe(0)
  list.items[0].changeName('Test')
  expect(changed).toBe(0)
  list.items[0].changePrice(10)
  expect(changed).toBe(1)
})