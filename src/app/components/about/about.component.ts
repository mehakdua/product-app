import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutLikes=3000;
  safeHtml:any;
  html=`<h1>Angular router</h1>`
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.safeHtml =this.sanitizer.bypassSecurityTrustHtml(this.html);
  }

}
