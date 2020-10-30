import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { VendorsComponent } from './vendors/vendors.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {path: 'stores', component: VendorsComponent },
  {path: 'products', component: ProductsComponent },
  {path: 'login', component: LoginComponent },
  {path: 'registeration', component: RegisterationComponent },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
