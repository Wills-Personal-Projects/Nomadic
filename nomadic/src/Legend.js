import React from 'react';

import './App.css'
import tent from './images/tent.png';
import facCircle from './images/facility_circle.png'

function Legend(){
    return(
        <div className="container left-pad-10 btm-pad-10">
            <div className='legend-row'>
                <div className='legend-column'>
                    <h4>
                        {'Map Legend'}
                    </h4>
                </div>
            </div>
            <div className='legend-row btm-pad-10'>
                <div className='legend-column right-pad-10'>
                    <img style={{pointerEvents: "none"}} src={facCircle}/>
                </div>
                <div className='legend-column'>
                    <div className='legend-text'>{'A facility containing 1 or more campsites'}</div>
                </div>   
            </div>
            <div className='legend-row'>
                <div className='legend-column right-pad-10'>
                    <img style={{pointerEvents: "none"}} src={tent}/>
                </div>
                <div className='legend-text'>{'An individual campsite'}</div>   
            </div>
        </div>
    );
}

export default Legend;