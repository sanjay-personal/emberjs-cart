import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class CartController extends Controller {
  @service('shopping-cart') shoppingCartService;
  // @service shoppingCart;

  get subTotal() {
    console.log('servicee', this.shoppingCartService.cartList);
    return this.shoppingCartService.cartList.reduce(
      (acc, cur) => acc + cur['price'] * cur['count'],
      0
    );
  }
  get tax() {
    return this.subTotal * 0.09;
  }
  get total() {
    return this.subTotal + this.tax;
  }
  get cartList() {
    return this.shoppingCartService.cartList;
  }
}
