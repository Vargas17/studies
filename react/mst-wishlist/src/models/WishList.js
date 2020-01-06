import { types } from 'mobx-state-tree';

const data = {
  name: 'Chronicles of Narnia',
  price: 28.73,
  image: 'https://picsum.photos/200'
}

export const WishListItem = types
  .model({
    name: types.string,
    price: types.number,
    image: ''
  })
  .actions(self => ({
    changeName(newName) {
      self.name = newName
    },
    changePrice(newPrice) {
      self.price = newPrice
    }
  }))

export const WishList = types
  .model({
    items: types.optional(types.array(WishListItem), []),
  })
  .actions(self => ({
    add(item) {
      self.items.push(item)
    }
  }))
  .views(self => ({
    get totalPrice() {
      return self.items.reduce((sum, entry) => sum + entry.price, 0)
    }
  }))
