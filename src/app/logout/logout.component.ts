import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private productService:ProductService, private router:Router) {
  }

  ngOnInit() {
    this.logout()
  }

  logout():void {
    this.productService.deleteToken();
    setTimeout(() => {
      this.router.navigate(['/login']);
    },200)

  }


}
