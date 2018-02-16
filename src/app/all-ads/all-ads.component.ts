import { Component, OnInit, Input } from '@angular/core';
import {ProductService} from "../product.service";
import{ Routes, Router } from '@angular/router'

@Component({
  selector: 'app-all-ads',
  templateUrl: './all-ads.component.html',
  styleUrls: ['./all-ads.component.css']
})
export class AllAdsComponent implements OnInit {
  @Input()  Ads:any
  loading:boolean = true;

  constructor(private productService:ProductService, private router:Router) {
  }

  ngOnInit() {
    this.getProducts()
    setTimeout(() => {
      this.loading = false;
    }, 200)
  }

  //const id = +this.route.snapshot.paramMap.get('id');
  getProducts():any {
    let token = this.productService.getToken();
    if (!token) {
      return
    }
    this.productService.getProducts(token)
      .subscribe(
        res => {
          this.Ads = res.allAds
        },
        error => console.log(error)
      );
  }

  showDetails(ad):void {
    this.router.navigate(['/ad-details', ad._id]);
  }


}
