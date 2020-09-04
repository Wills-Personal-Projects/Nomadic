import React, {Component} from 'react';
import Description from './Description';
import CampMarker from "./CampMarker";
import FacMarker from "./FacMarker";
import './App.css';
import GoogleMapReact from "google-map-react";
import HashMap from 'hashmap';
import InfoSideBar from './InfoSideBar';

class App extends Component{
    constructor(props) {
        super(props);
        /** allMarks contains every campsite in the database (facility ID, [campsite])
         * facMarks contains every facility in the database (facility ID, campsite)
         * campMarks contains every campsite in a given facility (campsite ID, campsite)
         * filtFacs contains the most recent set of Markers that should be rendered to the screen
         * **/
        this.state={
            filtFacs: [],
            campMarks: new HashMap(),
            facMarks: new HashMap(),
            allMarks: new HashMap(),
            campDesc: this._createDescription(-69)
        };
        /**allows markers on map to send click events to parent
        App class to initiate re-rendering of map with a new set of markers.**/
        this._onFacClick = this._onFacClick.bind(this);
        this._onCampClick = this._onCampClick.bind(this);
        this._onDescClick = this._onDescClick.bind(this);
        this._createDescription = this._createDescription.bind(this);
        this._getCampSite = this._getCampSite.bind(this);
    }

    _handleApiLoaded() {
        for (let i = 0;i < this.props.facilities.length; i++) {
            let facId = this.props.facilities[i][this.props.facIdStr];
            if (this.state.facMarks.get(facId) === undefined) {
                this.state.facMarks.set(facId, this.props.facilities[i]);
                this.state.allMarks.set(facId, [this.props.facilities[i]]);
            }else {
                this.state.allMarks.get(facId).push(this.props.facilities[i]);
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

    _getCampSite(campId){
        return this.state.campMarks.get(campId);
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

    _createDescription(campId){
        if (campId != -69){
            const c = this._getCampSite(campId);
            return (
                    <Description
                        lat={c.lat}
                        lng={c.lng}
                        key={-1}
                        campId={c.campId}
                        campName={c.name}
                        campType={c.type}
                        campUseType={c.typeUse}
                        campLoop={c.loop}
                        campUpdatedAt={c.updatedAt}
                        campCreatedAt={c.createdAt}
                    />
                );
        }else{
            return (
                <Description
                    lat={'None Selected'}
                    lng={'None Selected'}
                    key={-69}
                    campId={'None Selected'}
                    campName={'None Selected'}
                    campType={'None Selected'}
                    campUseType={'None Selected'}
                    campLoop={'None Selected'}
                    campUpdatedAt={'None Selected'}
                    campCreatedAt={'None Selected'}
                />
            );
        }
    }

    _onDescClick(){
        this.setState({campDesc: this._createDescription(-69)});
    }

    _onCampClick(e){
        this.setState({campDesc: this._createDescription(e.target.value)});
    }

    _onFacClick(e){
        console.log(e);
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
        this.setState({campDesc: this._createDescription(-69)});
        const d = 3;
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
    render() {
        return (
            <div className='container'>
                <div className='map-row'>
                    <div className='map-col'>
                        <div className='google-map-container'>
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
                        <InfoSideBar desc={this.state.campDesc}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;