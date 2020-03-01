import { NgModule } from '@angular/core';
import {Route,RouterModule} from '@angular/router';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductModule } from './product.module';
import { CanEditGuard } from './guards/can-edit.guard';
import { SaveAlertGuard } from './guards/save-alert.guard';
import { ProductsResolveService } from './resolvers/products.service';
const routes:Route[]=[

    {
      //  path:'products',
        path:'', //products come from loadChildren
        component:ProductHomeComponent,
        children:[
            {
                path:'',
                component:ProductListComponent,
                resolve:{
                    products:ProductsResolveService
                },
                data:{
                    roles:['Admin','Mgr']
                }
            },
            {
                path:"create",
                component:ProductEditComponent,
                canDeactivate:[SaveAlertGuard]
            },
            {
                path:"edit/:id",
                component:ProductEditComponent,
                canActivate:[CanEditGuard],
                canDeactivate:[SaveAlertGuard]
            },
            {
                path:"search",
                component:ProductSearchComponent
            }
        ]

    },
]
@NgModule({
    imports:[
        ProductModule,
        RouterModule.forChild(routes)
    ]
})
export class ProductRoutingModule{

}