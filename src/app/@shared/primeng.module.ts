import { NgModule } from '@angular/core';

import { DividerModule } from 'primeng/divider';
import { StyleClassModule } from 'primeng/styleclass';
import { DropdownModule } from 'primeng/dropdown';

const primengModule = [DividerModule, StyleClassModule, DropdownModule];

@NgModule({
  imports: [...primengModule],
  exports: [...primengModule],
  declarations: [],
  providers: [],
})
export class PrimeNgModule {}
