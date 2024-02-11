import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { SingleComponent } from './single/single.component';

export const routes: Routes = [
{path: 'homepage',component:HomepageComponent},
{path:'contact',component:ContactComponent},
{path:'product',component:ProductComponent},
{path:'product/:id',component:SingleComponent}
]
