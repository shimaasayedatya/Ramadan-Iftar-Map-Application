import { Injectable } from '@angular/core';
import {Locations} from './model/location'
import {AngularFireDatabase} from 'angularfire2/database'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiftServiceService {

  private gpsListRef = this.db.list<Locations>('giftmap')

  constructor(public db:AngularFireDatabase) { }


  getLocationList(){
    return this.gpsListRef;
  }

  addLocation(locations:Locations){
    return this.gpsListRef.push(locations)
  }

  updateLocation(locations:Locations){
    return this.gpsListRef.update(locations.key,locations)
  }

  removeLocation(locations){
    return this.gpsListRef.remove(locations)
  }
}
