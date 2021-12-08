import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | dynamicrout', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:dynamicrout');
    assert.ok(route);
  });
});
