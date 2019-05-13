import { Tab2Page } from './../tab2/tab2.page';
import { GiftServiceService } from './../gift-service.service';
import { Locations } from './../model/location';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
// import { AlertController } from 'ionic-angular';


@Component({
  selector: 'app-giftplace',
  templateUrl: './giftplace.page.html',
  styleUrls: ['./giftplace.page.scss'],
})
export class GiftplacePage implements OnInit {

  locations:Locations={
    latitude:'',
    longitude:'',
    info:''
  }

  constructor(private router: Router,public navCtrl: NavController,
    public giftServiceService:GiftServiceService,public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  addLocation(locations:Locations){
    this.giftServiceService.addLocation(locations).then(ref=>{
    this.presentAlert()
    this.navCtrl.navigateBack(['tab2']);
    })
    
  }

  async  presentAlert() {
    const alert = await this.alertCtrl.create({
      message: 'Thanks for helping people!',
      subHeader: 'Great!',
      buttons: ['OK']
    });
    await alert.present();
  }

}
