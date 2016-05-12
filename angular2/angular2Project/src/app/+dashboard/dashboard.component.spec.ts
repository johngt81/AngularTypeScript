import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, provide } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';
import { Router } from '@angular/router';
import { Product, ProductService } from '../shared';

describe('Component: Dashboard', () => {
  let builder: TestComponentBuilder;
  class MockRouter{
    navigate(){}
  }
  beforeEachProviders(() => [DashboardComponent, ProductService, provide(Router, {useClass: MockRouter})]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([DashboardComponent],
      (component: DashboardComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(DashboardComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(DashboardComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <angular2-project-dashboard></angular2-project-dashboard>
  `,
  directives: [DashboardComponent]
})
class DashboardComponentTestController {
}

