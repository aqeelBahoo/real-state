import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../product.service";

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.css']
})
export class AdDetailsComponent implements OnInit {
  commentUserImage:any = '../../assets/images/user.png';
  adDetails:any;
  //adDetails:any={images: []};
  setActive:string = 'allComments';
  comment:any = '';
  commentAndUserDetail:any;
  allComments:any;
  loading:boolean = true;
  success:boolean = false;
  message:any;

  constructor(private routes:ActivatedRoute, private productService:ProductService) {

  }

  ngOnInit() {
    this.ad();
    setTimeout(() => {
      this.loading = false;
    }, 400)
  }

  ad():boolean {
    const _id = this.routes.snapshot.paramMap.get('id');
    const token = this.productService.getToken();
    if (!token) {
      return false;
    }
    this.productService.getAdDetails(_id, token).subscribe(
      res => {
        res.ad.comments.forEach(comment => {
          comment.updatedAt = new Date(comment.updatedAt).toLocaleString()
        })
        this.adDetails = res.ad;
        this.allComments = res.ad.comments;
        console.log(res)
      }
    )
  }

  commentSection(matric):void {
    this.setActive = matric;
  }

  doComment():void {
    if (this.comment.trim() == '') {
      return;
    }
    const _id = this.routes.snapshot.paramMap.get('id');
    this.commentAndUserDetail = {
      _id: _id,
      comment: this.comment.trim(),
      token: this.productService.getToken()
    };
    this.comment = '';
    this.productService.doComment(this.commentAndUserDetail).subscribe(
      res => {
        if (res.success) {
          this.success = true;
          this.message = res.message;
          setTimeout(() => this.success = false, 2000);
        }
      },
      err => console.log(err)
    )


  }

}

