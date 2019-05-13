import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GiftplacemodifyPage } from './giftplacemodify.page';

const routes: Routes = [
  {
    path: '',
    component: GiftplacemodifyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GiftplacemodifyPage]
})
export class GiftplacemodifyPageModule {}
