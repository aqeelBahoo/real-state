import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Ads:any[];
//  images:string[];
  commentUserImage:string = '../../assets/images/user.png';
  loading = true;
  warning:boolean = false;
  message:string;

  constructor(private productService:ProductService) {
  }

  ngOnInit() {
    this.getUserAds();
    setTimeout(() => {
      this.loading = false;
    }, 200)
  }

  getUserAds():any {
    let token = this.productService.getToken();
    if (!token) {
      return
    }
    this.productService.getUserAds({token: token})
      .subscribe(
        res => {
          if (!res.success) {
            this.warning = true;
            this.message = res.message;
            return setTimeout(() => this.warning = false, 2000);
          }
          if (res.ads) {
            res.ads.forEach(ad => ad.commentsShow = false);
            this.Ads = res.ads;
          }
          else {
            this.Ads = [];
          }
        }
      )
  }

}
