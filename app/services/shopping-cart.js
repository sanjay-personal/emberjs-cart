import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ShoppingCartService extends Service {
 @tracked cartList = [];

  addItem(params) {
    this.cartList.findIndex(
      (x) =>
        x['productName'] == params['productName'] &&
        x['color'] == params['color']
    ) == -1
      ? this.cartList.push(params)
      : undefined;
//   or 
    // this.cartList = [...this.cartList,params]
  }
}
