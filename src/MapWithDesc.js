import React from 'react';

import './TextLabelTitle.css';
import './Container.css';
import CampDesc from './CampDesc';
import GoogleMapReact from "google-map-react";
import HashMap from 'hashmap';
import Legend from './Legend';
import FacMarker from './FacMarker';
import CampMarker from './CampMarker';
import {Label,Button, Grid} from 'semantic-ui-react';
import Loader from 'react-loader-spinner';


class MapWithDesc extends React.Component {
    constructor() {
        super();
        this._isMounted = false;
        this.state = {
            facilities: [],
            userfacilities: [],
            filtFacs: [],
            campMarks: new HashMap(),
            facMarks: new HashMap(),
            allMarks: new HashMap(),
            siteDesc: this._getEmptyDesc(),
            center: {lat: 39.8283, lng: -98.5795},
            zoom: 4,
            notReady: true
        };
        this._onFacClick = this._onFacClick.bind(this);
        this._onCampClick = this._onCampClick.bind(this);
        this._onBoundsChanged = this._onBoundsChanged.bind(this);
    }

    _createDesc(campId) {
        let camp = this.state.campMarks.get(campId);
        return (<CampDesc empty={false} c={camp}/>);
    }

    _getEmptyDesc() {
        return (<CampDesc empty={true} c={null}/>);
    }

    async componentDidMount() {
        this._isMounted = true;
        const response0 = this._isMounted && await fetch('https://campsite-service.herokuapp.com/getCampsites');
        const json0 = this._isMounted && await response0.json();
        this._isMounted && this.setState({ facilities: json0 });
        const response1 = this._isMounted && await fetch('https://campsite-service.herokuapp.com/getUserCampsites');
        const json1 = this._isMounted && await response1.json();
        this._isMounted && this.setState({ userFacilities: json1 });
        this._isMounted && this._generateDataStructures();
        this.setState({notReady: false})
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    _generateDataStructures() {
        if (this.state.facilities !== undefined && this.state.userFacilities !== undefined) {
            for (let i = 0; i < this.state.facilities.length; i++) {
                let facId = this.state.facilities[i]["FacilityID"];
                if (this.state.facMarks.get(facId) === undefined) {
                    this.state.facMarks.set(facId, this.state.facilities[i]);
                    this.state.allMarks.set(facId, [this.state.facilities[i]]);
                } else {
                    this.state.allMarks.get(facId).push(this.state.facilities[i]);
                }
            }

            for (let i = 0; i < this.state.userFacilities.length; i++) {
                let uFacId = this.state.userFacilities[i]["FacilityID"];
                if (this.state.facMarks.get(uFacId) === undefined) {
                    this.state.facMarks.set(uFacId, this.state.userFacilities[i]);
                    this.state.allMarks.set(uFacId, [this.state.userFacilities[i]]);
                } else {
                    this.state.allMarks.get(uFacId).push(this.state.userFacilities[i]);
                }
            }
        }
    }

    _yDistance(p1y, p2y) {
        if (p1y >= p2y) {
            return p1y - p2y;
        } else {
            return p2y - p1y;
        }
    }

    _xDistance(p1x, p2x) {
        if (p1x >= p2x) {
            return p1x - p2x;
        } else {
            return p2x - p1x;
        }
    }

    _createFac(f) {
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

    _createMarkers(FacArr) {
        return FacArr.map(c => {
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

    _onCampClick = (lat, lng, id) => {
        this.setState({center: {lat: lat, lng: lng}});
        this.setState({zoom: 20});
        this.setState({ siteDesc: this._createDesc(id) });
    }

    _onFacClick(facId, lat, lng) {
        let FacArr = this.state.allMarks.get(facId);
        this.setState({ filtFacs: this._createMarkers(FacArr) });
        this.setState({center: {lat: lat, lng: lng}});
        this.setState({zoom: 15});
        let tempCamps = new HashMap();
        for (let i = 0; i < FacArr.length; i++) {
            tempCamps.set(FacArr[i][this.props.campIdStr], {
                lat: FacArr[i][this.props.latStr],
                lng: FacArr[i][this.props.lngStr],
                name: FacArr[i][this.props.campNameStr],
                type: FacArr[i][this.props.campTypeStr],
                typeUse: FacArr[i][this.props.campUseTypeStr],
                loop: FacArr[i][this.props.campLoopStr],
                isAccess: FacArr[i][this.props.campIsAccessibleStr],
                updatedAt: FacArr[i][this.props.campLastUpdatedAtStr],
                createdAt: FacArr[i][this.props.campCreatedAtStr],
                fac: FacArr[i][this.props.facIdStr]
            });
        }
        this.setState({ campMarks: tempCamps });
    }

    _onMapClick = ({ lat, lng}) => {
        this.setState({zoom: 8});
        this.setState({center: {lat: lat, lng:lng}});
        const d = 2.5;
        this.setState({ siteDesc: this._getEmptyDesc() });
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

    _onBoundsChanged = ({ center, zoom, bounds, marginBounds }) => {
        this.setState({zoom: zoom});    
    }

    _handleApiLoaded() {

    }

    render() {
        if(this.state.notReady){
            return(
                <Grid textAlign="center">
                    <Grid.Column style={{paddingTop: '400px'}}>
                        <Loader type="Circles" color=" lightseagreen" height={80} width={80}/>
                    </Grid.Column>
                </Grid>
            );
        }else{
            return(
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <div className='banner-text'>
                                {'Click on the United States!'}
                            </div>
                            <div className='map-cont'>
                                <GoogleMapReact
                                            bootstrapURLKeys={{ key: 'AIzaSyBu0SCrLYdEBAfsEK8RfWgPs559QVVIkMw' }}
                                            center={this.state.center}
                                            zoom={this.state.zoom}
                                            yesIWantToUseGoogleMapApiInternals={true}
                                            onGoogleApiLoaded={(map, maps, places) => this._handleApiLoaded()}
                                            onChange={this._onBoundsChanged}
                                            onClick={this._onMapClick}
                                            >
                                            {this.state.filtFacs}
                                        </GoogleMapReact>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Grid.Row>
                                <Legend/>
                            </Grid.Row>
                            <Grid.Row>
                                <div className='desc-cont'>
                                    {this.state.siteDesc}
                                </div>
                            </Grid.Row>
                            <Grid.Row>
                                <div className='add-site-btn-cont'>
                                    <Button onClick={this.props.addSite} className='add-site-btn'>
                                        <div className='add-camp-btn-txt'>
                                            {'Add your own campsite(s)!'}
                                        </div>
                                    </Button>
                                </div>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            );
        }
    }
}

export default MapWithDesc;