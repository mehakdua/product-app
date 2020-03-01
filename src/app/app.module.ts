//Module is collection of components, directives,pipes,services
//dependencies to other modules
import { NgModule, ErrorHandler } from "@angular/core";

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
//import { ProductRoutingModule } from './product/product-routing.module';
import {LocationStrategy, HashLocationStrategy,PathLocationStrategy} from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductHomeComponent } from './product/components/product-home/product-home.component';
import { ErrorHandlerService } from './services/error-handler.service';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AuthInterceptorService } from './services/auth-interceptor.service';
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
{
    path:'products',
    loadChildren:'./product/product-routing.module#ProductRoutingModule',
    canActivate:[AuthGuard]
},
{
    path:'auth/login',
    component:LoginComponent
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
       // ProductRoutingModule,
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
        NotFoundComponent,
        LoginComponent
    ],
    providers:[
        /*{
            provide:LocationStrategy,
            useClass:HashLocationStrategy
        }*/
        {
            provide: ErrorHandler,
            useClass: ErrorHandlerService
        },
        {
            provide:HTTP_INTERCEPTORS,
            useClass:AuthInterceptorService,
            multi:true
        }
    ],
    exports:[],
    bootstrap:[AppComponent]
})
export class AppModule{

}