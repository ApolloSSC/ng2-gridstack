
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridStackItemDirective} from './gridstack.item.directive';
import { GridStackComponent} from './gridstack.component';


@NgModule({
  declarations: [
    GridStackComponent,
    GridStackItemDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridStackComponent,
    GridStackItemDirective
  ],
})
export class GridStackModule { }
