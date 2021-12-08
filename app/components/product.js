import Component from '@glimmer/component';
// import {action} from '@ember/object'
// import {tracked} from '@glimmer/tracking'

export default class ProductComponent extends Component {
  //    @tracked numberCount =0;
  //     @action
  //     addnumber() {
  //         this.numberCount = ++ this.numberCount
  //     }
  productImage = this.args.product.colors[0]['image'];
}
