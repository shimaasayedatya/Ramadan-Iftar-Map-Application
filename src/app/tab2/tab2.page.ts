import { IftarplacemodifyPage } from './../iftarplacemodify/iftarplacemodify.page';
import { GiftplacemodifyPage } from './../giftplacemodify/giftplacemodify.page';
import { IftarplacePage } from './../iftarplace/iftarplace.page';
import { GiftplacePage } from './../giftplace/giftplace.page';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import {Router} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public navCtrl: NavController ,private router: Router){}

  goToAddGitPage(){
    this.navCtrl.navigateForward('/giftplace');
    //  this.router.navigate(['giftplace']);
     console.log('goToAddGitPage');
     
  }

  goToAddIftarPage(){
    this.navCtrl.navigateForward(['iftarplace']);
    console.log('goToAddIftarPage');
  }

  goToShowGitPage(){
    this.navCtrl.navigateForward(['giftplacemodify']);
     console.log('goToShowGitPage');
     
  }

  goToShowIftarPage(){
    this.navCtrl.navigateForward(['iftarplacemodify']);
     console.log('goToShowIftarPage');
     
  }
}
