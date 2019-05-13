import { GiftServiceService } from './gift-service.service';
import { GiftplacePageModule } from './giftplace/giftplace.module';
import { Tab2Page } from './tab2/tab2.page';
import { Tab1Page } from './tab1/tab1.page';
import { IftarplacemodifyPage } from './iftarplacemodify/iftarplacemodify.page';
import { IftarplacePage } from './iftarplace/iftarplace.page';
import { IftarmapPage } from './iftarmap/iftarmap.page';
import { GiftplacemodifyPage } from './giftplacemodify/giftplacemodify.page';
import { GiftplacePage } from './giftplace/giftplace.page';
import { BasketmapPage } from './basketmap/basketmap.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { IftarServiceService } from './iftar-service.service';




export const firebaseConfig = {
  apiKey: "AIzaSyB5UYwTx8epfpEDKKXkbc66z1j21FAxSdw",
  authDomain: "ramadan-e8fa8.firebaseapp.com",
  databaseURL: "https://ramadan-e8fa8.firebaseio.com",
  projectId: "ramadan-e8fa8",
  storageBucket: "ramadan-e8fa8.appspot.com",
  messagingSenderId: "495276054192",
  appId: "1:495276054192:web:ceddb71b4ac06111"
};
                                    

@NgModule({

  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    FormsModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      AngularFireDatabaseModule,
      AngularFireModule.initializeApp(firebaseConfig),
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GiftServiceService,
    IftarServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
