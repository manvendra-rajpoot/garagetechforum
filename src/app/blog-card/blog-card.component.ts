import { Component, Input, OnInit } from '@angular/core';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {

  @Input()cards!: any[];

  index!: number;
  display! :boolean;
  faHeart = faHeart;
  faComment = faComment;

  constructor() { }

  ngOnInit(): void {
  }

  openBlogDetails(i:number){
    this.index = i;
    this.display = true;
   }
 
   onLike(i:number){
     this.cards[i].likes++;
   }
 
   displayChange(display:boolean){
     this.display=display;
   }

}
