import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit {
  @Input() blogs!: any[];
  @Input() index!: number;
  @Input() display! :boolean;
  faTimes = faTimes;

  comment:any = {};

  @Output() displayChanged: EventEmitter<boolean> =   new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onCloseBlog(){
    this.display = false;
    this.displayChanged.emit(this.display);
  }

  addComment(comment:any){
    this.comment.comment= comment.value.comment;
    this.comment.commentBy=comment.value.name;
    this.comment.commentDate = Date.now();

    this.blogs[this.index].comments.unshift(this.comment);
    comment.reset();
  }

}
