import Route from '@ember/routing/route';
import productData from '../data/productsData';
export default class ItemRoute extends Route {
  model(params) {
    console.log(
      'itemroutr',
      productData['products'].find((x) => x['id'] === params['dynamicId'])
    );
    return productData['products'].find((x) => x['id'] === params['dynamicId']);
  }

  //   setupController(controller, model) {
  //     super.setupController(controller, model);
  //     controller.color = model.colors[0].color;
  //   }
  setupController(controller, model) {
    super.setupController(controller, model);
    controller.color = model.colors[0].color;
  }
}
