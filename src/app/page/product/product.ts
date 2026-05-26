import { ChangeDetectorRef, Component } from '@angular/core';
import { Card } from "../../component/card/card";
import { Fakeapi } from '../../fakeapi';

@Component({
  selector: 'app-product',
  imports: [Card],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  data: any[]=[];
  constructor(private api: Fakeapi,private cdr: ChangeDetectorRef ) {}
  ngOnInit() {
    this.api.getFakeProducts().subscribe((res: any) => {
      this.data = res;
      this.cdr.detectChanges()
    })
  }
}

