import React from 'react';
import Map from 'react-map-gl';

interface MapSectionProps {
    viewport: {
        latitude: number;
        longitude: number;
        zoom: number;
        width: string;
        height: string;
    };
}

const MapSection: React.FC<MapSectionProps> = ({ viewport }) => {
    return (
        <div className="w-full h-[calc(100vh-96px)] xs:h-[calc(100vh-70vh)]">
            <Map
                initialViewState={{ ...viewport }}
                mapboxAccessToken="pk.eyJ1Ijoic2s5NiIsImEiOiJja3hycGFuN3owazlhMm9vMG40ZXJ2cHV5In0.tk1vTYSNN8-JUtvvKzT-ow"
                style={{ width: '100%', height: '100%' }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                attributionControl={false}
            />
        </div>
    );
};

export default MapSection;
