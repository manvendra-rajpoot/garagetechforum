import { Component, OnInit } from '@angular/core';
import { BlogsServiceService } from '../blogs-service.service';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent implements OnInit {
  blog:any = [];
  index!: number;
  display = false;
  opacity!: number;
  
  constructor(private blogs:BlogsServiceService) { 
    this.blog = this.blogs.blogData;
  }

  ngOnInit(): void {
  }

  openBlogDetails(i:number){
      this.index=i;
      this.display = true;
  }

  displayChange(display:boolean){
    this.display=display;
  }

}
