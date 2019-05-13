import { GiftplacemodifyPageModule } from './../giftplacemodify/giftplacemodify.module';
import { GiftplacePageModule } from './../giftplace/giftplace.module';
import { IftarplacemodifyPageModule } from './../iftarplacemodify/iftarplacemodify.module';
import { BasketmapPageModule } from './../basketmap/basketmap.module';
import { IftarmapPageModule } from './../iftarmap/iftarmap.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { Tab1PageModule } from '../tab1/tab1.module';
import { Tab3PageModule } from '../tab3/tab3.module';
import { Tab2PageModule } from '../tab2/tab2.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    GiftplacemodifyPageModule,
    IftarplacemodifyPageModule,
    GiftplacePageModule,
    TabsPageRoutingModule,
    IftarmapPageModule,
    BasketmapPageModule,
    Tab3PageModule,
    Tab2PageModule,
    Tab1PageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
