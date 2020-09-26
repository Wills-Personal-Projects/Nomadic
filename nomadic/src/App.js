import React, {Component} from 'react';
import MapWithDesc from './MapWithDesc';
import MapWithAddSite from './MapWithAddSite';
import './App.css';


class App extends Component{
    constructor() {
        super();
        this.state={
            addSite: false
        };
        this._renderAddSite = this._renderAddSite.bind(this);
        this._renderWithDesc = this._renderWithDesc.bind(this);
        this._getNewFacID = this._getNewFacID.bind(this);
    }

    campSiteStrings=[
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

    async _getNewFacID(){
        const response = await fetch('https://campsite-service.herokuapp.com/getNewFacID');
        const json = await response.json();
        return json;
    }

    _renderAddSite(){
        this.setState({addSite: true});
    }

    _renderWithDesc(){
        this.setState({addSite: false});
    }
    
    render() {
        if (this.state.addSite){
            return (<MapWithAddSite getFacID={this._getNewFacID} campStrings={this._campSiteStrings} searchSites={this._renderWithDesc}/>);
        }else{
            return (
                <MapWithDesc
                    addSite={this._renderAddSite} 
                    campIdStr={this.campSiteStrings[0]}
                    campNameStr={this.campSiteStrings[1]}
                    campTypeStr={this.campSiteStrings[2]}
                    campUseTypeStr={this.campSiteStrings[3]}
                    campLoopStr={this.campSiteStrings[4]}
                    campIsAccesibleStr={this.campSiteStrings[5]}
                    campCreatedAtStr={this.campSiteStrings[6]}
                    campLastUpdatedAtStr={this.campSiteStrings[7]}
                    latStr={this.campSiteStrings[8]}
                    lngStr={this.campSiteStrings[9]}
                    facIdStr={this.campSiteStrings[10]}
                />
                );
        }    
    }
}

export default App;