import { Component, OnInit } from '@angular/core';

import {Ad} from "../ad";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";

//import {FileUploadModule} from 'primeng/fileupload';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  adImages:any = [];
  adDetails:Ad = {title: '', description: '', images: [], phone: '', token: '', rs: ''};
  loading:boolean = true;

  constructor(private productService:ProductService, private router:Router) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 200)
  }

  onUploadFinished(event:any):void {
    event.id = new Date().getTime();
    this.adImages.push({'url': event.src, id: event.id});
    console.log(this.adImages);
  }

  onRemoved(event:any):void {
    console.log(event.id);
    this.adImages.forEach((fileHolder, i) =>  fileHolder.id === event.id ?
      this.adImages.splice(i, 1) : null);
    console.log(this.adImages)
  }

  adForm(form:any, userData:any):any {
    if (!userData.title || !userData.description || !userData.phone || !userData.rs) {
      return alert('please fill all fields');
    }
    if (this.adImages.length == 0) {
      return alert('please add photos');
    }
    console.log(this.adDetails)
    //  this.submitAd();
  }

  submitAd():any {
    // this.adDetails.images = ['http://placehold.it/600/771796', 'http://placehold.it/600/771796'];
    this.adDetails.images = this.adImages;

    let token = this.productService.getToken();
    if (!token) {
      return alert("please login again");
    }
    this.adDetails.token = token;
    this.productService.adSubmit(this.adDetails)
      .subscribe(
        product => {
          setTimeout(() => {
            this.loading = false;
            this.router.navigate(['/dashboard']);
          }, 200)
        },
        error => console.log(error)
      );
  }

}
