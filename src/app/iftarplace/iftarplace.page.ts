import { IftarServiceService } from './../iftar-service.service';
import { Component, OnInit } from '@angular/core';
import { Locations } from '../model/location';
import { AlertController, NavController } from '@ionic/angular';
import { Tab2Page } from './../tab2/tab2.page';

@Component({
  selector: 'app-iftarplace',
  templateUrl: './iftarplace.page.html',
  styleUrls: ['./iftarplace.page.scss'],
})
export class IftarplacePage implements OnInit {

  locations:Locations={
    latitude:'',
    longitude:'',
    info:''
  }

  constructor(public navCtrl: NavController,public iftarServiceService:IftarServiceService,public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  addLocation(locations:Locations){
    this.iftarServiceService.addLocation(locations).then(ref=>{
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
