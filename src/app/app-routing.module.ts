import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '',
  // redirectTo: '/tabs/tab1',
  // pathMatch: 'full'},
  // {path: '', redirectTo: '/tab1',pathMatch:'full'},
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'iftarmap', loadChildren: './iftarmap/iftarmap.module#IftarmapPageModule' },
  { path: 'basketmap', loadChildren: './basketmap/basketmap.module#BasketmapPageModule' },
  { path: 'iftarplacemodify', loadChildren: './iftarplacemodify/iftarplacemodify.module#IftarplacemodifyPageModule' },
  { path: 'giftplacemodify', loadChildren: './giftplacemodify/giftplacemodify.module#GiftplacemodifyPageModule' },
  { path: 'giftplace', loadChildren: './giftplace/giftplace.module#GiftplacePageModule' },
  { path: 'iftarplace', loadChildren: './iftarplace/iftarplace.module#IftarplacePageModule' },
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

