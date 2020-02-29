import { Component, OnInit,Input, ViewChild, ElementRef } from '@angular/core';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  d:Date =new Date();
  @Input("company") appCompany:string;
  @ViewChild('myHighLight',{static:true}) highlight:HighlightDirective;
  constructor() { }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    setTimeout(()=>{
      console.log("highlight view child",this.highlight.color);
    })
  }

}
