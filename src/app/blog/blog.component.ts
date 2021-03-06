import { Component, OnInit } from '@angular/core';
import { BlogsServiceService } from '../blogs-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog:any = {};
  constructor(private blogs:BlogsServiceService) { }

  createBlog(blogDetails:any){
    this.blog=blogDetails.value;
    this.blog.likes=0;
    this.blog.comment = [];
    this.blogs.blogData.unshift(this.blog);
    alert("Blog Submitted!");
    blogDetails.reset();
  }

  ngOnInit(): void {
  }

}
