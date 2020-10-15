import React from 'react';

import './App.css';
import GoogleMapReact from "google-map-react";
import HashMap from 'hashmap';
import Legend from './Legend';
import FacMarker from './FacMarker';
import CampMarker from './CampMarker';
import Button from 'react-bootstrap/Button';

class MapWithDesc extends React.Component{
    constructor(){
        super();
        this._isMounted = false;
        this.state={
            facilities: [],
            userfacilities: [],
            filtFacs: [],
            campMarks: new HashMap(),
            facMarks: new HashMap(),
            allMarks: new HashMap(),
            siteDesc: this._getEmptyDesc()
        };
        this._onFacClick = this._onFacClick.bind(this);
        this._onCampClick = this._onCampClick.bind(this);
    }

    _createDesc(campId){
        let c = this.state.campMarks.get(campId);
        return (
            <div className='container btm-pad-10'>
                <div className='desc-row-title'>
                    <h4>{'Campsite Information'}</h4>
                </div>
                <div className='desc-row-title'>
                    {'Campsite Name'}
                </div>
                <div className='desc-row-value'>
                    {c.name}
                </div>
                <div className='desc-row-title'>
                    {'Campsite Latitude'}
                </div>
                <div className='desc-row-value'>
                    {c.lat}   
                </div>
                <div className='desc-row-title'>
                    {'Campsite Longitude'}
                </div>
                <div className='desc-row-value'>
                    {c.lng}
                </div>
                <div className='desc-row-title'>
                    {'Campsite Type'}
                </div>
                <div className='desc-row-value'>
                    {c.type}
                </div>
                <div className='desc-row-title'>
                    {'Campsite Type Of Use'}
                </div>
                <div className='desc-row-value'>
                    {c.typeUse}
                </div>
                <div className='desc-row-title'>
                    {'Campsite Updated At'}
                </div>
                <div className='desc-row-value'>
                    {c.updatedAt}
                </div>
                <div className='desc-row-title'>
                    {'Campsite Created At'}
                </div>
                <div className='desc-row-value'>
                    {c.createdAt}
                </div>
                <div className='desc-row-title'>
                    {'Campsite Loop'}
                </div>
                <div className='desc-row-value'>
                    {c.loop}
                </div>
                <div className='desc-row-title'>
                    {'Is Campsite Accessible'}
                </div>
                <div className='desc-row-value'>
                    {c.isAccess}
                </div>
            </div>
        );
    }

    _getEmptyDesc(){
        return (
            <div className='container btm-pad-10'>
                <div className='desc-row-title'>
                    <h4>{'Campsite Information'}</h4>
                </div>
                <div className='desc-row-title'>
                    {'Campsite Name'}
                </div>
                <div className='desc-row-value'>
                    {'None Selected'}
                </div>
                <div className='desc-row-title'>
                    {'Campsite Latitude'}
                </div>
                <div className='desc-row-value'>
                    {'None Selected'}   
                </div>
                <div className='desc-row-title'>
                    {'Campsite Longitude'}
                </div>
                <div className='desc-row-value'>
                    {'None Selected'}
                </div>
                <div className='desc-row-title'>
                    {'Campsite Type'}
                </div>
                <div className='desc-row-value'>
                    {'None Selected'}
                </div>
                <div className='desc-row-title'>
                    {'Campsite Type Of Use'}
                </div>
                <div className='desc-row-value'>
                    {'None Selected'}
                </div>
                <div className='desc-row-title'>
                    {'Campsite Updated At'}
                </div>
                <div className='desc-row-value'>
                    {'None Selected'}
                </div>
                <div className='desc-row-title'>
                    {'Campsite Created At'}
                </div>
                <div className='desc-row-value'>
                    {'None Selected'}
                </div>
                <div className='desc-row-title'>
                    {'Campsite Loop'}
                </div>
                <div className='desc-row-value'>
                    {'None Selected'}
                </div>
                <div className='desc-row-title'>
                    {'Is Campsite Accessible'}
                </div>
                <div className='desc-row-value'>
                    {'None Selected'}
                </div>
            </div>
        );
    }

    async componentDidMount(){
        this._isMounted = true;
        const response0 = this._isMounted && await fetch('https://campsite-service.herokuapp.com/getCampsites');
        const json0 = this._isMounted && await response0.json();
        this._isMounted && this.setState({facilities:json0});
        const response1 = this._isMounted && await fetch('https://campsite-service.herokuapp.com/getUserCampsites');
        const json1 = this._isMounted && await response1.json();
        this._isMounted && this.setState({userFacilities: json1});
        this._isMounted && this._generateDataStructures();
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    _generateDataStructures(){
        if(this.state.facilities !== undefined && this.state.userFacilities !== undefined){
            for (let i = 0;i < this.state.facilities.length; i++) {
                let facId = this.state.facilities[i]["FacilityID"];
                if (this.state.facMarks.get(facId) === undefined) {
                    this.state.facMarks.set(facId, this.state.facilities[i]);
                    this.state.allMarks.set(facId, [this.state.facilities[i]]);
                }else {
                    this.state.allMarks.get(facId).push(this.state.facilities[i]);
                }
            }

            for(let i = 0; i < this.state.userFacilities.length; i++){
                let uFacId = this.state.userFacilities[i]["FacilityID"];
                if (this.state.facMarks.get(uFacId) === undefined) {
                    this.state.facMarks.set(uFacId, this.state.userFacilities[i]);
                    this.state.allMarks.set(uFacId, [this.state.userFacilities[i]]);
                }else {
                    this.state.allMarks.get(uFacId).push(this.state.userFacilities[i]);
                }
            }
        }
    }

    _yDistance(p1y, p2y){
        if (p1y >= p2y){
            return p1y-p2y;
        }else{
            return p2y-p1y;
        }
    }

    _xDistance(p1x, p2x){
        if (p1x >= p2x){
            return p1x-p2x;
        }else{
            return p2x-p1x;
        }
    }

    _createFac(f){
        return (
            <FacMarker
                key={f[this.props.facIdStr]}
                lat={f[this.props.latStr]}
                lng={f[this.props.lngStr]}
                fac={f[this.props.facIdStr]}
                campId={f[this.props.campIdStr]}
                campName={f[this.props.campNameStr]}
                campType={f[this.props.campTypeStr]}
                campUseType={f[this.props.campUseTypeStr]}
                campLoop={f[this.props.campLoopStr]}
                campUpdatedAt={f[this.props.campLastUpdatedAtStr]}
                campCreatedAt={f[this.props.campCreatedAtStr]}
                facClick={this._onFacClick}
            />
        );
    }

    _createMarkers(FacArr){
        return FacArr.map(c=>{
            return (
                <CampMarker
                    key={c[this.props.campIdStr]}
                    lat={c[this.props.latStr]}
                    lng={c[this.props.lngStr]}
                    fac={c[this.props.facIdStr]}
                    campId={c[this.props.campIdStr]}
                    campName={c[this.props.campNameStr]}
                    campType={c[this.props.campTypeStr]}
                    campUseType={c[this.props.campUseTypeStr]}
                    campLoop={c[this.props.campLoopStr]}
                    campUpdatedAt={c[this.props.campLastUpdatedAtStr]}
                    campCreatedAt={c[this.props.campCreatedAtStr]}
                    campClick={this._onCampClick}
                />
            )
        });
    }

    _onCampClick(e){
        this.setState({siteDesc: this._createDesc(e.target.value)});
    }

    _onFacClick(e){
        let FacArr = this.state.allMarks.get(e.target.value);
        this.setState({filtFacs: this._createMarkers(FacArr)});
        let tempCamps = new HashMap();
        for (let i = 0; i < FacArr.length; i++){
            tempCamps.set(FacArr[i][this.props.campIdStr], {
                lat: FacArr[i][this.props.latStr],
                lng: FacArr[i][this.props.lngStr],
                name: FacArr[i][this.props.campNameStr],
                type: FacArr[i][this.props.campTypeStr],
                typeUse: FacArr[i][this.props.campUseTypeStr],
                loop: FacArr[i][this.props.campLoopStr],
                isAccess: FacArr[i][this.props.campIsAccesibleStr],
                updatedAt: FacArr[i][this.props.campLastUpdatedAtStr],
                createdAt: FacArr[i][this.props.campCreatedAtStr],
                fac: FacArr[i][this.props.facIdStr]
            });
        }
        this.setState({campMarks: tempCamps});
    }

    _onMapClick = ({lat, lng}) => {
        const d = 3;
        this.setState({siteDesc: this._getEmptyDesc()});
        this.setState({
            filtFacs: this.state.facMarks.values().map(x => {
                if (this._xDistance(x[this.props.latStr], lat) < d && this._yDistance(x[this.props.lngStr], lng) < d) {
                    return this._createFac(x);
                } else {
                    return null;
                }
            })
        });
    }

    _handleApiLoaded() {
        
    }

    render(){
        return (
            <div className='container'>
                <div className='top-banner-row'><div className='banner-text'>Click on the United States!</div></div>
                <div className='map-row'>  
                    <div className='map-col'>
                        <div className='google-map-container-desc'>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{key: 'AIzaSyBu0SCrLYdEBAfsEK8RfWgPs559QVVIkMw'}}
                                        center={{lat: 39.8283, lng: -98.5795}}
                                        zoom={4}
                                        yesIWantToUseGoogleMapApiInternals={true}
                                        onGoogleApiLoaded={(map, maps, places) => this._handleApiLoaded()}
                                        onClick={this._onMapClick}
                                    >
                                        {this.state.filtFacs}
                                    </GoogleMapReact>
                        </div>
                    </div>
                    
                    <div className='info-col'>
                        <div className='info-row'>
                            <Legend/>
                        </div>
                        <div className='info-row-btn'>
                            <Button onClick={this.props.addSite}>
                                <div className='btn-text'>Add Your Own Campsite!</div>
                            </Button>
                        </div>
                        <div className='info-row'>
                            {this.state.siteDesc}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MapWithDesc;