import React from 'react';
import back from './images/back.png';
import './App.css';

class NewCampSiteForm extends React.Component{
    constructor() {
        super();
        this.state = {
            name: '',
            lat:0.0,
            lng:0.0,
            type: '',
            typeUse: '',
            updateAt: '',
            createAt: '',
            isAccess: '',
            loop: ''
        };
        this.handleMapClick = this.handleMapClick.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        //this.handleLatChange = this.handleLatChange.bind(this);
        //this.handleLngChange = this.handleLngChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleTypeUseChange = this.handleTypeUseChange.bind(this);
        this.handleUpdateChange = this.handleUpdateChange.bind(this);
        this.handleCreateChange = this.handleCreateChange.bind(this);
        this.handleAccessChange = this.handleAccessChange.bind(this);
        this.handleLoopChange = this.handleLoopChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.postCampsite = this.postCampsite.bind(this);
      }

      handleMapClick(){

      }

      handleLoopChange(event){
        this.setState({loop: event.target.value});
      }

      handleAccessChange(event){
        this.setState({isAccess: event.target.value});
      }

      handleCreateChange(event){
        this.setState({createAt: event.target.value});
      }

      handleUpdateChange(event){
        this.setState({updateAt: event.target.value});
      }

      handleTypeUseChange(event){
        this.setState({typeUse: event.target.value});
      }
    
      handleNameChange(event) {
        this.setState({name: event.target.value});
      }

      //handleLatChange(event) {
       
      //}

      //handleLngChange(event) {
       
      //}

      handleTypeChange(event) {
        this.setState({type: event.target.value});
      }

      postCampsite(newSite){
        Promise.resolve(this.props.getNewUserFacID()).then((val)=>{
            newSite["FacilityID"]=val.currentFacID;
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newSite)
            };
            fetch('https://campsite-service.herokuapp.com/postCampsite', requestOptions)
        });
      }
    
      handleSubmit() {
        let newSite = {
            "CampsiteName": this.state.name,
            "CampsiteLatitude":this.state.lat,
            "CampsiteLongitude":this.state.lng,
            "CampsiteType":this.state.type,
            "TypeOfUse": this.state.typeUse,
            "Loop":this.state.loop,
            "CreatedDate":this.state.createAt,
            "LastUpdatedDate": this.state.updateAt,
            "CampsiteAccessible":this.state.isAccess,
            "CampsiteID":"1"
        };
        this.postCampsite(newSite);
      }
    
      render() {
        return (
                 <div className="container left-pad-10 btm-pad-10">
                    <div className="back-arrow-title-row">
                      <div className="back-arrow-col">
            
                        <button className="back-arrow-btn" onClick={this.props.backEventHandler}>
                          <img style={{pointerEvents: "none"}} src={back}/>
                        </button>
                                
                      </div>
                      <div className="title-col">
                        <div className="desc-row-title">
                          <h4>{'Fill In Campsite Information'}</h4>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="column">
                          <div className="desc-row-title">
                            {'Campsite Name'}
                          </div>
                          <input value={this.state.name} onChange={this.handleNameChange}/>
                          <div className="desc-row-title">
                              {'Campsite Latitude'}
                          </div>
                          <div className="add-desc-lat-lng">{this.state.lat}</div>
                          <div className="desc-row-title">
                              {'Campsite Longitude'}
                          </div>
                          <div className="add-desc-lat-lng">{this.state.lng}</div>
                          <div className="desc-row-title">
                              {'Campsite Type'}
                          </div>
                          <input type="text" value={this.state.type} onChange={this.handleTypeChange} />
                          <div className="desc-row-title">
                              {'Campsite Type Of Use'}
                          </div>
                          <input type="text" value={this.state.typeUse} onChange={this.handleTypeUseChange} />
                          <div className="desc-row-title">
                              {'Campsite Updated At'}
                          </div>
                          <input type="text" value={this.state.updateAt} onChange={this.handleUpdateChange} />
                          <div className="desc-row-title">
                              {'Campsite Created At'}
                          </div>
                          <input type="text" value={this.state.creatAt} onChange={this.handleCreateChange} />
                          <div className="desc-row-title">
                              {'Campsite Is Accessible'}
                          </div>
                          <input type="text" value={this.state.isAccess} onChange={this.handleAccessChange} />
                          <div className="desc-row-title">
                              {'Campsite Loop'}
                          </div>
                          <input type="text" value={this.state.loop} onChange={this.handleLoopChange} />
                          <div className="desc-submit">
                              <button onClick={this.handleSubmit}>Submit</button>
                          </div>
                      </div>
                    </div>
                  </div>
        );
      }
    }

export default NewCampSiteForm;
    