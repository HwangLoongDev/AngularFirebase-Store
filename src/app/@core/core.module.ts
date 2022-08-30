import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../@shared/shared.module';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [BannerComponent, NavigationComponent, FooterComponent],
  declarations: [BannerComponent, NavigationComponent, FooterComponent],
  providers: [],
})
export class CoreModule {}
