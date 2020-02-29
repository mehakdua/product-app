import { Directive, HostListener,OnInit,OnDestroy,ElementRef, Renderer2 ,Input} from '@angular/core';

@Directive({
  //[]-must represent property
    //[]-used at any tag/component
  selector: '[appHighlight]',
  exportAs:'appHighlight' //for #myHighLight="appHighlight"
})

//<h2 appHighlight this h2 is hots element
export class HighlightDirective implements OnInit,OnDestroy {
  //is injected with host element elementRef
  //color='red';
  @Input('appHighlight') color:string;
  @HostListener('click') clicked(){
    console.log('clicked');
  }
  @HostListener('mouseenter') mouseEnter(){
    this.highlight("red");
  }
  @HostListener('mouseleave') mouseLeave(){
    this.renderer.removeStyle(this.hostElement.nativeElement, 'background');
    // this.highlight("yellow");
  }
  constructor(private hostElement:ElementRef,private renderer:Renderer2) {
    console.log("highlight created");
  }
  ngOnInit(){
    console.log('Highlight init');
    console.log('Host Tag', this.hostElement.nativeElement.tagName);
  }
  highlight(color){
    this.renderer.setStyle(this.hostElement.nativeElement, 'background',this.color);
    //this.hostElement.nativeElement.style.color=color;
  }
  ngOnDestroy(){
    console.log('Highlight destroyed');
  }

}
