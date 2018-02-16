import { Component, OnInit } from '@angular/core';
import {Login} from "../login";
import { Router } from '@angular/router';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:Login = {email: '', password: ""};
  loading:boolean = true;
  success:boolean = false;
  warning:boolean = false;
  message:string;

  constructor(private router:Router, private productService:ProductService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 200)
  }

  login(form, userData):void {
    if (!userData.email || !userData.password) {
      this.warning = true;
      this.message = "Please Fill All Fields"
      setTimeout(() => this.warning = false)
      return
    }
    this.productService.login(userData)
      .subscribe(
        res => {
          if (res.success) {
            this.success = true;
            this.warning = false;
            this.productService.setToken(res.token);
          }
          else {
            this.success = false;
            this.warning = true;
          }
          this.message = res.message;
          setTimeout(() => {
            this.success = false;
            this.warning = false;
          }, 2000);
          if (res.success) {
            setTimeout(() => {
              this.router.navigate(['/dashboard']);
            }, 2000)
          }
        },
        errror => console.log(errror)
      )
  }

}
