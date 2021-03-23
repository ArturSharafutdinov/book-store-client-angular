import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {PageNotFoundComponent} from './components/shared/page-not-found/page-not-found.component';
import {OrderComponent} from './components/order/order.component';
import {ProfileComponent} from './components/profile/profile.component';
import {CreateProductComponent} from './components/create-product/create-product.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'shop', component: ShoppingCartComponent},
  {path: 'order', component: OrderComponent},
  {path: 'orders', component: ProfileComponent},
  {path: 'create', component: CreateProductComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{


}
