import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Details from './Details';
const MapBox = ({jobs, isLoading, error}) => {
  

    const [ selected, setSelected ] = useState({});
    const onSelect = item => {
        setSelected(item);
        console.log(item)
  }
  
    const mapStyles = {        
        height: "80vh",
        width: "100%"};
      
      const defaultCenter =  jobs[0] ?  {
        lat:  jobs[0].latitude, lng:  jobs[0].longitude
      } : {
        lat: 40.7603, lng: -73.9933
      }

  
  
  return (
      <div>
          {isLoading && <div>Loading</div>}
          {error && <div>Error</div>}
    <LoadScript
    googleMapsApiKey='AIzaSyCuiTFlqd2WKrWORtmso9akM_zwM1oJVwc'>
     <GoogleMap
       mapContainerStyle={mapStyles}
       zoom={10}
       center={defaultCenter}>
      { 
        jobs ?
        jobs.map((item,index) => {
         return (
         <Marker key={item.adref} 
           position={{lat:item.latitude, lng:item.longitude}}
           onClick={() => onSelect(item)}
         />
         )
       }) : null
      }
      {
         selected.longitude && selected.latitude && 
         (
           <InfoWindow
           position={{lat:selected.latitude, lng:selected.longitude}}
           clickable={true}
           onCloseClick={() => setSelected({})}
         >
        
           <Details item={selected} />
         </InfoWindow>
         )
      }
  </GoogleMap>
  </LoadScript>
  </div>
)
}
export default MapBox