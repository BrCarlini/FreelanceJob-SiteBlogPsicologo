import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './googleMaps.module.scss';





export default function GoogleMaps() {

    const mapStyles = {
        height: '50vh',
        width: '100%',
        position: 'relative',
    };



    const defaultCenter = {
        lat: -3.745,
        lng: -38.523,
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyDZmPL0L5s3xUJJIEqfttNPUjpDpAjrq7E">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
                center={defaultCenter}
            />
        </LoadScript>
    );
};

