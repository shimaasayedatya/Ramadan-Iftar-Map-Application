// import { Tab2PageModule } from './../tab2/tab2.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {Tab2Page} from'../tab2/tab2.page';

import { GiftplacePage } from './giftplace.page';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: GiftplacePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // Tab2PageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GiftplacePage]
})
export class GiftplacePageModule {}
