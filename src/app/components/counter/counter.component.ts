import { Component, OnInit, OnDestroy } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit,OnDestroy {
  counter:number =1;
  timerHandle:any;
  constructor() { }

  ngOnInit() {
    this.timerHandle = setInterval(()=>{
      this.counter++;
      console.log("counter is",this.counter);
    },5000)
  }
  increment(e:Event){
    console.log(e);
    console.trace();
    this.counter++;
  }
  ngOnDestroy(){
    clearInterval(this.timerHandle);
  }
}
