import React from 'react';
import { CImage } from '@coreui/react';

import img from './../../../assets/images/maps.png';

import '../css/mapOff.css';

const MapOff = () => {
    return (
        <div className="container-body-map">
            <CImage rounded thumbnail src={img} width={200} height={100} />
        </div>
    );
};

export default MapOff;
