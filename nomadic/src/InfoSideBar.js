import React from 'react';

import './App.css'
import Legend from './Legend';

function InfoSideBar(props){
    return (
        <div className='info-container'>
            <div className='row'>
                <div className='column'><Legend/></div>
                <div className='desc-col'><h2>{'Campsite Description'}</h2></div>
                <div className='desc-cols'>{props.desc}</div>
            </div>
        </div>
        );
}

export default InfoSideBar;