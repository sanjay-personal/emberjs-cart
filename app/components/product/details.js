import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class DetailsComponent extends Component {
  @service('shopping-cart') shoppingCartService;

  @action
  addCart() {
    const { productName, productInfo, color, colorss } = this.args;
    console.log('arggss', this.args, productName, productInfo, color);
    this.shoppingCartService.addItem({
      productName,
      color,
      image: colorss.find((colorInfo) => colorInfo.color === color).image,
      price: productInfo.current,
    });
  }
}
