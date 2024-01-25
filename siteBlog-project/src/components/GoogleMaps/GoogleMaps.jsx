import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useEffect } from 'react';
import './googleMaps.module.scss';


//Carrega as variáveis de ambiente do arquivo .env
//useEffect(() => {
//    require('dotenv').config();
//}, []);



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

