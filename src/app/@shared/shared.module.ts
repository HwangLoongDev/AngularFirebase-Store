import { NgModule } from '@angular/core';
import { PrimeNgModule } from './primeng.module';

@NgModule({
  imports: [PrimeNgModule],
  exports: [PrimeNgModule],
  declarations: [],
  providers: [],
})
export class SharedModule {}
