import Route from '@ember/routing/route';

export default class DynamicroutRoute extends Route {
  model(params) {
    console.log('paramss', params);
    const { dynamicId } = params;

    return dynamicId;
  }
}
