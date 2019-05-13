import { IftarServiceService } from './../iftar-service.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, NavParams } from '@ionic/angular';
import { Locations } from './../model/location';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireObject,AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-iftarplacemodify',
  templateUrl: './iftarplacemodify.page.html',
  styleUrls: ['./iftarplacemodify.page.scss'],
})
export class IftarplacemodifyPage implements OnInit {

  iftarList : AngularFireObject<any>

  locations:Locations={
    latitude:'',
    longitude:'',
    info:''
  };

  itemArray=[];
  myObject=[];

  constructor(public alertCtrl: AlertController,
    public navCtrl: NavController,
    public db:AngularFireDatabase,
    public iftarServiceService:IftarServiceService) {

      this.iftarList = db.object('iftarmap');
      this.iftarList.snapshotChanges().subscribe(action =>{
        
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
    this.iftarServiceService.updateLocation(locations).then(() =>{
      this.navCtrl.navigateBack(['tab2'])
      console.log('updated')
      
    })
  }

  removeLocation(locations:Locations){
    this.iftarServiceService.removeLocation(locations).then(() =>{
      this.navCtrl.navigateBack(['tab2'])
      console.log('deleted');
    })
    console.log(locations);
    
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
