import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
//import {MapMarker} from 'google-map-react';
import {Map, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
// import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };
  
  const greatPlaceStyle = {
    position: 'absolute',
    transform: 'translate(-50%, -50%)'
  }
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 39.816560,
      lng: -105.122780
    },
    zoom: 11
  };
 

  
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '50%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD0YyOVbQyTD7QpqAD5ndmnD17mB6jS7VM" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          
        //   yesIWantToUseGoogleMapApiInternals
        //   onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
  

  
 {/* <MyMarker lat ={ 39.816560}  lng= {-105.122780} style={{position: 'center', transform: 'translate(-50%, -50%)'}}  /> */}
{/* <SimpleMarker lat ={ 39.816560}  lng= {-105.122780} text={'Centre'} /> */}
    {/* title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 39.816560, lng: -105.122780}}
    style={{position: 'center', transform: 'translate(-50%, -100%)'}} /> */}
 

        </GoogleMapReact>
        
      </div>
    );
  }
}
 
export default SimpleMap;