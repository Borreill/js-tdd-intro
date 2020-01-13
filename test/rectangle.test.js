const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('Rectangle', () => {
  it('is a square', () => {
    const rectangleTest = new Rectangle(4, 4);
    assert.strictEqual(rectangleTest.isSquare(), true)
  });

  it('is not a square', () => {
    const rectangleTest = new Rectangle(6, 4);
    assert.strictEqual(rectangleTest.isSquare(), true)
  });

  it('get area', () => {
    const rectangleTest = new Rectangle(13, 7);
    assert.strictEqual(rectangleTest.getArea(), 91)
  });

  it('get perimeter', () => {
    const rectangleTest = new Rectangle(13, 7);
    assert.strictEqual(rectangleTest.getPerimeter(), 40)
  });
})