import React from 'react';

import './App.css'
import Legend from './Legend';

function InfoSideBar(props){
    return (
            <div className='info-col'>
                <div className='info-row'><Legend/></div>
                <div className='info-row'>{props.desc}</div>
            </div>
        );
}

export default InfoSideBar;