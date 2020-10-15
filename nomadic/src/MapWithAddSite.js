import React from 'react';

import './App.css';
import GoogleMapReact from "google-map-react";
import NewCampsiteForm from './NewCampsiteForm';
import Legend from './Legend';
import CampMarker from './CampMarker';

class MapWithAddSite extends React.Component{
    constructor(){
        super();
        this.state={
            clickedAt:null
        };
        this.newSiteFormRef = React.createRef();
        this._onMapClick = this._onMapClick.bind(this);
        this.createCampMark = this.createCampMark.bind(this);
    }

    _handleApiLoaded() {
        
    }

    createCampMark(lat, lng){
        return (<CampMarker lat={lat} lng={lng}/>);
    }

    _onMapClick = ({lat, lng}) => {
        if(!this.newSiteFormRef.current.state.inputType){
            this.newSiteFormRef.current.setState({lat: lat});
            this.newSiteFormRef.current.setState({lng: lng});
            this.setState({clickedAt: this.createCampMark(lat,lng)});
        }
    }

    render(){
    return (
        <div className='container'>
            <div className='map-row'>
                <div className='map-col'>
                    <div className='google-map-container-add'>
                        <GoogleMapReact
                            bootstrapURLKeys={{key: 'AIzaSyBu0SCrLYdEBAfsEK8RfWgPs559QVVIkMw'}}
                            center={{lat: 39.8283, lng: -98.5795}}
                            zoom={4}
                            yesIWantToUseGoogleMapApiInternals={true}
                            onGoogleApiLoaded={(map, maps, places) => this._handleApiLoaded()}
                            onClick={this._onMapClick}
                        >
                            {this.state.clickedAt}
                        </GoogleMapReact>
                    </div>
                </div>
                <div className='info-col'>
                    <div className='info-row'>
                        <Legend/>
                    </div>
                    <div className='info-col'>
                        <NewCampsiteForm ref={this.newSiteFormRef} handleMapClick={this._onMapClick} backEventHandler={this.props.searchSites} getNewUserFacID={this.props.getFacID} campStrings={this.props.campStrings}/>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default MapWithAddSite;