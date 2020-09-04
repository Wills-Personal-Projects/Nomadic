import React from 'react';

import './App.css'
import Legend from './Legend';

function InfoSideBar(props){
    return (
        <div className='info-container'>
            <div className='row'>
                <div className='column'><Legend/></div>
                <div className='desc-col'><h2>{'Description'}</h2></div>
                <div className='column'>{props.desc}</div>
            </div>
        </div>
        );
}

export default InfoSideBar;