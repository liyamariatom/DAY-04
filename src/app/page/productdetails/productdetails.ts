import { ChangeDetectorRef, Component } from '@angular/core';
import { Fakeapi } from '../../fakeapi';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  imports: [],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css',
})
export class Productdetails {
  productsDetails: any;
  id: any;
  constructor(private api: Fakeapi,private cdr : ChangeDetectorRef, private route :ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.api.getFakeProductById(this.id).subscribe((res: any) => {
      this.productsDetails = res;
      this.cdr.detectChanges()
    })
  }
}
