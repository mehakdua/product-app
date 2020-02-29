import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  @Input() likes:number;
  @Output() likesChange:EventEmitter<number> =new EventEmitter();
  isMouseOver:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  up(){
    this.likesChange.emit(this.likes+1);
  }
  down(){
    this.likesChange.emit(this.likes-1);
  }

}
