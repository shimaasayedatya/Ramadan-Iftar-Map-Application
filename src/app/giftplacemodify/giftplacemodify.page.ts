import { AlertController, NavController, NavParams } from '@ionic/angular';
import { Locations } from './../model/location';
import { GiftServiceService } from './../gift-service.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireObject,AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-giftplacemodify',
  templateUrl: './giftplacemodify.page.html',
  styleUrls: ['./giftplacemodify.page.scss'],
})
export class GiftplacemodifyPage implements OnInit {
  
  giftList : AngularFireObject<any>

  locations:Locations={
    latitude:'',
    longitude:'',
    info:''
  };

  itemArray=[];
  myObject=[];

  constructor(public giftServiceService:GiftServiceService,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public db:AngularFireDatabase) { 

      this.giftList = db.object('giftmap');
      this.giftList.snapshotChanges().subscribe(action =>{
        
        if(action.payload.val() == null || action.payload.val()== undefined){
          console.log('no data')
        }else {

       
        // let y=action.payload.toJSON()
        // y['key']=action.key
        this.itemArray.push(action.payload.val() as Locations)
        console.log(this.itemArray)
        this.myObject = Object.entries(this.itemArray[0])
        console.log('myObject'+this.myObject)
        }
        
      });

    }
  ngOnInit() {
  }

  updateLocation(locations:Locations){
    this.giftServiceService.updateLocation(locations).then(() =>{
      this.navCtrl.navigateBack(['tab2'])
      console.log('updated')
      
    })
  }

  removeLocation(locations:Locations){
    this.giftServiceService.removeLocation(locations).then(() =>{
      this.navCtrl.navigateBack(['tab2'])
      console.log('deleted');
    })
    

  }
 async showPrompt(key ,info, latitude, longitude) {
    const prompt = await this.alertCtrl.create({
      header: 'edit',
      message: "Edit current information",
      inputs: [
        {
          name: 'Info',
          value: info
        },
        {
          name: 'Latitude',
          value: latitude
        },
        {
          name: 'Longitude',
          value: longitude
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.locations.info= data.Info
            this.locations.latitude = data.Latitude
            this.locations.longitude = data.Longitude
            this.locations.key = key
            // this.updateLocation(this.locations)
            console.log(this.locations)
            this.updateLocation(this.locations)
          }
        }
      ]
    });
   return await prompt.present();
  }
}
