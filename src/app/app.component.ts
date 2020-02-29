import { Component, OnInit } from "@angular/core";

@Component({
selector:'app-root',
templateUrl:'./app.component.html',
styleUrls:['./app.component.scss']
})
export class AppComponent implements OnInit{
    //model attributes, bind to view //it is publci so can be accesed in view
    appTitle:string ='Product App';

    constructor(){
        console.log('App comp constructor')
    }

    //use ngOnInit for makng dynamic api calls
    ngOnInit() {
        console.log('init');
    }
}