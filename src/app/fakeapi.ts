import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Fakeapi {
  constructor(private https: HttpClient) { }
  getFakeProducts() {
    return this.https.get("https://fakestoreapi.com/products")
  }
  getFakeProductById(id: string){
    return this.https.get(`https://fakestoreapi.com/products/${id}`)
  }
}
