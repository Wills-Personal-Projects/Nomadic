import React from 'react';

import './TextLabelTitle.css';
import './Container.css';
import GoogleMapReact from "google-map-react";
import NewCampsiteForm from './NewCampsiteForm';
import Legend from './Legend';
import {Button, Grid} from 'semantic-ui-react';
import CampMarker from './CampMarker';

class MapWithAddSite extends React.Component{
    constructor(){
        super();
        this.state={
            clickedAt:null,
            center: {lat: 39.8283, lng: -98.5795},
            zoom: 5
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
                              
                              onClick={this._onMapClick}
                              >
                              {this.state.filtFacs}
                          </GoogleMapReact>
              </div>
          </Grid.Column>
          <Grid.Column width={3}>
              <Grid.Row>
                  <div className='new-site-cont'>
                  <NewCampsiteForm ref={this.newSiteFormRef} handleMapClick={this._onMapClick} backEventHandler={this.props.searchSites} getNewUserFacID={this.props.getFacID} campStrings={this.props.campStrings}/>
                  </div>
              </Grid.Row>
              <Grid.Row>
                  <div className='add-site-btn-cont'>
                      <Button onClick={this.props.searchSites} className='search-site-btn'>
                          <div className='search-site-btn-txt'>
                              {'Search for campsite(s)!'}
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

export default MapWithAddSite;