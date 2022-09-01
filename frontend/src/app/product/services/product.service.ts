import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { ProductI } from 'src/app/models/product.model';
import { GET_PRODUCT, GET_PRODUCTS } from 'src/app/querys/product.query';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apollo: Apollo) { }

  getProducts(): QueryRef<ProductI[]> {
    return this.apollo.watchQuery<ProductI[]>({
      query: GET_PRODUCTS
    })
  }
  
  getProduct(id: string): QueryRef<ProductI> {
    return this.apollo.watchQuery<ProductI>({
      query: GET_PRODUCT,
      variables: {
        id
      }
    })
  }
}
