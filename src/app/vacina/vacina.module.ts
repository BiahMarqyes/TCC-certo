import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacinaPageRoutingModule } from './vacina-routing.module';

import { VacinaPage } from './vacina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VacinaPageRoutingModule
  ],
  declarations: [VacinaPage]
})
export class VacinaPageModule {}
