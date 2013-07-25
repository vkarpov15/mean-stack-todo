'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Todo list', function() {
  beforeEach(function() {
    browser().navigateTo('/');
    sleep(1);
  });

  it("should be able to add a todo", function() {
    expect(repeater('.not-done').count()).toBe(0);
    expect(repeater('.done').count()).toBe(0);

    input('newTodo.description').enter('Test todo');
    element('.btn-primary').click();
    sleep(1);

    expect(repeater('.not-done').count()).toBe(1);
    expect(repeater('.done').count()).toBe(0);
  });

  it("should move todo to correct list when user toggles checkbox", function() {
    expect(repeater('.not-done').count()).toBe(1);
    expect(repeater('.done').count()).toBe(0);

    element('.not-done:nth-child(1) input').click();
    sleep(0.1);
    expect(repeater('.not-done').count()).toBe(0);
    expect(repeater('.done').count()).toBe(1);

    element('.done:nth-child(1) input').click();
    sleep(0.1);
    expect(repeater('.not-done').count()).toBe(1);
    expect(repeater('.done').count()).toBe(0);
  });
});