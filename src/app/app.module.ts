//Module is collection of components, directives,pipes,services
//dependencies to other modules
import { NgModule } from "@angular/core";

import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CounterComponent } from './components/counter/counter.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartModule } from './cart/cart.module';
import {RouterModule,Route} from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductRoutingModule } from './product/product-routing.module';
import {LocationStrategy, HashLocationStrategy,PathLocationStrategy} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
const routes:Route[] = [
{
    path:'',
    component:HomeComponent
},
{   path:'about',
    component:AboutComponent
},
{   path:'contact',
    component:ContactComponent
},
{   path:'counter',
    component:CounterComponent
},
{   path:'**',
    component:NotFoundComponent
}
]; 
@NgModule({
    imports:[
        BrowserModule,
        SharedModule,
        FormsModule,
        CartModule,
        ProductRoutingModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
    ],
    declarations:[
        //components, pipes, directives
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        CounterComponent,
        HeaderComponent,
        FooterComponent,
        NotFoundComponent
    ],
    providers:[
        /*{
            provide:LocationStrategy,
            useClass:HashLocationStrategy
        }*/
    ],
    exports:[],
    bootstrap:[AppComponent]
})
export class AppModule{

}