import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
// import { tracked } from '@glimmer/tracking';

export default class GeneralContainerComponent extends Component {
  @service('shopping-cart') shoppingCartService;

  //   cartcount = this.shoppingCartService.cartList.length
 get cartcount() { return this.shoppingCartService.cartList.reduce(
    (acc, val) => acc + val['count'],
    0
  );
 }
}
