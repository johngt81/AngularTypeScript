import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ Product, ProductService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'angular2-project-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

products: Product[] = [];
  constructor(
    private _productService:ProductService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._productService.getProducts()
    .then(products=> this.products= products.slice(0,5));
  }

}
