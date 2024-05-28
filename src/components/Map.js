import { GoogleMap, useJsApiLoader,Marker, InfoBox, InfoWindow} from '@react-google-maps/api';
import TruckMarker from '../assets/1000_F_205634657_WlNw0jTd4rDdpQmXyXT95l8nFjzpdrh0.jpg'
import { useState } from 'react'
import React from "react";
import { mapOptions } from "./Mapconfig.js";
const  Map= (props)=>{
    const {isLoaded}=props;
    const [latitude,setlatitude]=useState();
  const [longitude,setlongitude]=useState();
  const [selectedMarker,setInfo]=useState("");
  
  const geo=navigator.geolocation
  geo.watchPosition(usercords)
  function  usercords(position){
    let userLatitude=position.coords.latitude;
    let userLongitude=position.coords.longitude;
    // console.log("Latitude:",userLatitude);
    // console.log("Longitude:",userLongitude);
    setlatitude(userLatitude);
    setlongitude(userLongitude);
    
    


  }


    const containerStyle = {
        width: '80vw',
        height: '90vh'
      };
      
       const  center = {
        lat: latitude,
        lng: longitude
      };
    return (
   
    isLoaded && (
        <>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          
        > 
        <Marker position={center}
        
        
        />  
        {selectedMarker && <InfoWindow position={center}>
          <h1>Current Status of Truck</h1>
          <button onClick={()=>{
            setInfo("")
          }}> Close</button>
          </InfoWindow>}
             
        
        </GoogleMap>
    
    </>
    )
);
}
export default React.memo(Map);