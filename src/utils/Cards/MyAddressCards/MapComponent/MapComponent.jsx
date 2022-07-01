import {Component} from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import css from './MapComponent.module.css'
 
export class MapComponent extends Component {
    constructor(){
        super()
        this.state = {
            selectedPlace: {
                name: "Hyderabad"
            },
            lat: navigator.geolocation.getCurrentPosition(val => val.coords.latitude),
            lng: navigator.geolocation.getCurrentPosition(val => val.coords.longitude)
        }
    }
   
  render() {
    console.log(navigator.geolocation.getCurrentPosition(val => {return val}), "test")
    return (
      <Map google={this.props.google} zoom={14} style={{width: "600px", height: "50%"}}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBhKe3SSGLFTzZc6L4XXCsBBhvq2R5Ohmg")
})(MapComponent)