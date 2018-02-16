import { Component, OnInit } from '@angular/core';
import {Signup} from "../signup";
import {Router} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:Signup = {
    name: '',
    email: '',
    password: ''
  };
  loading:boolean = true;
  success:boolean = false;
  warning:boolean = false;
  message:string;

  constructor(private route:Router, private productService:ProductService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 150)
  }

  signUp(form, user):void {
    if (form.invalid) return alert("form is invalid")
    if (!user.name || !user.email || !user.password) {
      this.warning = true;
      this.message = "Please Fill All Fields"
      setTimeout(() => this.warning = false)
      return
    }
    this.productService.signup(user)
      .subscribe(
        res => {
          if (res.success) {
            this.success = true;
            this.warning = false;
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
              this.route.navigate(['/login']);
            }, 2000)
          }

        }
      )
  }

}
