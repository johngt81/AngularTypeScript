import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Product} from './product.model';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product(1,'fff','ddd',new Date(),12,'asdasdsa','asdasd')).toBeTruthy();
  });
});
