import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home.component';
import { ItemsComponent } from './items/items.component';
import { PolicyComponent } from './policy/policy.component';
import { PromoComponent } from './promo/promo.component';

const homeRoutes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(homeRoutes)],
  exports: [],
  declarations: [
    HomeComponent,
    HeroComponent,
    CollectionsComponent,
    ItemsComponent,
    PolicyComponent,
    PromoComponent,
  ],
  providers: [],
})
export class HomeModule {}
