import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const cartRoutes: Routes = [{ path: '', component: CartComponent }];

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(cartRoutes),
  ],
})
export class CartModule {}
