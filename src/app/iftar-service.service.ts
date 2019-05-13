import { Injectable } from '@angular/core';
import {Locations} from './model/location'
import {AngularFireDatabase} from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class IftarServiceService {

  private gpsListRef = this.db.list<Locations>('iftarmap')


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
