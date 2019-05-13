import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'giftplace',
        children: [
          {
            path: '',
            loadChildren: '../giftplace/giftplace.module#GiftplacePageModule'
          }
        ]
      },
      {
        path: 'basketmap',
        children: [
          {
            path: '',
            loadChildren: '../basketmap/basketmap.module#BasketmapPageModule'
          }
        ]
      },
      {
        path: 'iftarmap',
        children: [
          {
            path: '',
            loadChildren: '../iftarmap/iftarmap.module#IftarmapPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
