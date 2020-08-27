import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import campsites from "./data/Campsites_API_v1.json";

const campSiteStrings=[
    "CampsiteID",
    "CampsiteName",
    "CampsiteType",
    "TypeOfUse",
    "Loop",
    "CampsiteAccessible",
    "CreatedDate",
    "LastUpdatedDate",
    'CampsiteLatitude',
    'CampsiteLongitude',
    'FacilityID'
];

ReactDOM.render(
    <App
         campIdStr={campSiteStrings[0]}
         campNameStr={campSiteStrings[1]}
         campTypeStr={campSiteStrings[2]}
         campUseTypeStr={campSiteStrings[3]}
         campLoopStr={campSiteStrings[4]}
         campIsAccesibleStr={campSiteStrings[5]}
         campCreatedAtStr={campSiteStrings[6]}
         campLastUpdatedAtStr={campSiteStrings[7]}
         latStr={campSiteStrings[8]}
         lngStr={campSiteStrings[9]}
         facIdStr={campSiteStrings[10]}
         facilities={campsites['RECDATA']}
    />,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();