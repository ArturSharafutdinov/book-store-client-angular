import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {AppRoutingModule} from './app-routing.module';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OrderComponent } from './components/order/order.component';
import {JwtInterceptor} from './helpers/jwt.inceptor';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileItemComponent } from './components/profile/profile-item/profile-item.component';
import { ProductComponent } from './components/product/product.component';
import { CreateProductComponent } from './components/create-product/create-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    ProductItemComponent,
    CartItemComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    OrderComponent,
    ProfileComponent,
    ProfileItemComponent,
    ProductComponent,
    CreateProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
