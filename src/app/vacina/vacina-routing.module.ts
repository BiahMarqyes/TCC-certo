import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VacinaPage } from './vacina.page';

const routes: Routes = [
  {
    path: '',
    component: VacinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacinaPageRoutingModule {}
