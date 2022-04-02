import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/category/services/category.service';
import { CategoryI } from 'src/app/models/category.model';
import { ProductI } from 'src/app/models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  categorySubscription: Subscription
  categories: CategoryI[]
  products: ProductI[]

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.categorySubscription = this.categoryService.getAll().subscribe((result: any) => {
      this.categories = result?.data.getCategories
      this.categories = this.categories.filter(category => category.status)
    })
    this.productService.getProducts().subscribe((result: any) => {
      this.products = result?.data.getProducts
      console.log(this.products)
    })
  }

  filterCategory(id: number) {
    console.log(id)
  }

  ngOnDestroy(): void {
    this.categorySubscription.unsubscribe()
  }
}