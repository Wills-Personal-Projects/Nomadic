import React from 'react';

import './App.css'
import tent from './images/tent.png';
import facCircle from './images/facility_circle.png'

function Legend(){
    return(
        <div className="container left-pad-10">
            <div class='legend-row'>
                <div className='legend-column'>
                    <h2>
                        {'Map Legend'}
                    </h2>
                </div>
            </div>
            <div class='legend-row btm-pad-10'>
                <div className='legend-column right-pad-10'>
                    <img style={{pointerEvents: "none"}} src={facCircle}/>
                </div>
                <div className='legend-column'>
                    {'A faciliy containing 1 or more campsites'}
                </div>   
            </div>
            <div class='legend-row'>
                <div className='legend-column right-pad-10'>
                    <img style={{pointerEvents: "none"}} src={tent}/>
                </div>
                <div className='legend-column'>
                    {'An individual campsite'}
                </div>   
            </div>
        </div>
    );
}

export default Legend;