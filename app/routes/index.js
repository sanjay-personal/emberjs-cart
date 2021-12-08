import Route from '@ember/routing/route';

import productsData from '../data/productsData';

export default class IndexRoute extends Route {
  model() {
    console.log('productsData', productsData);
    return productsData['products'];
  }
}
