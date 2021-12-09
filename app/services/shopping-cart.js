import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class Item {
  @tracked count
  productName
  color
  image
  price

  constructor(item) {
   this.count = item.count
   this.productName = item.productName
   this.color = item.color
   this.image = item.image
   this.price = item.price

  }
}

export default class ShoppingCartService extends Service {
  @tracked cartList = [];

  addItem(params) {
    // this.cartList.findIndex((x) => x['productName'] == params['productName'] && x['color'] == params['color']) === -1 ? this.cartList.push(params)  : undefined;
    // this.cartList = this.cartList.filter(x=> x!== undefined)

    //   or

    const existingItem = this.cartList.find(
      (x) =>
        x['productName'] == params['productName'] &&
        x['color'] == params['color']
    );
    if (existingItem) {
      existingItem['count'] = ++existingItem['count'];
    } else {
      this.cartList = [...this.cartList, new Item({ ...params, count: 1 })];
      // this.cartList.push(params)
    }

    console.log('servuces', this.cartList);
  }
}
