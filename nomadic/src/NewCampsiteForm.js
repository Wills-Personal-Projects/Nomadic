import React from 'react';
import Button from 'react-bootstrap/Button'
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
            loop: '',
            inputType: false
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLatChange = this.handleLatChange.bind(this);
        this.handleLngChange = this.handleLngChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleTypeUseChange = this.handleTypeUseChange.bind(this);
        this.handleUpdateChange = this.handleUpdateChange.bind(this);
        this.handleCreateChange = this.handleCreateChange.bind(this);
        this.handleAccessChange = this.handleAccessChange.bind(this);
        this.handleLoopChange = this.handleLoopChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.postCampsite = this.postCampsite.bind(this);
        this.renderInput = this.renderInput.bind(this);
        this.switchInputType = this.switchInputType.bind(this);
      }

      switchInputType(){
        if(!this.state.inputType){
          this.setState({inputType:true});
        }else{
          this.setState({inputType: false});
        }
      }

      renderInput() {
        if(this.state.inputType){
          return (
              <div className='lat-lng-col'>
                <div >{'Campsite Latitude'}</div>
                <input type="text" value={this.state.lat} onChange={this.handleLatChange} />
                <button onClick={this.switchInputType}>Input by clicking map</button>
                <div >{'Campsite Longitude'}</div>
                <input type="text" value={this.state.lng} onChange={this.handleLngChange} />
                <button onClick={this.switchInputType}>Input by clicking map</button>
              </div>
          );
        }else{
          return (
            <>
              <div className="desc-row-title">{'Campsite Latitude'}</div>
              <div className='lat-lng-row'>{this.state.lat}</div>
              <button type='button' onClick={this.switchInputType} className='switch-btn'>Input by typing</button>
              <div className="desc-row-title">{'Campsite Longitude'}</div>
              <div className='lat-lng-row'>{this.state.lng}</div>
              <button type='button' onClick={this.switchInputType} className='switch-btn'>Input by typing</button>
            </>
          );
        }
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

      handleLatChange(event) {
       this.setState({lat:event.target.value})
      }

      handleLngChange(event) {
       this.setState({lng:event.target.value});
      }

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
                  <div className='info-col'>
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
                    <div className="desc-row-title">{'Campsite Name'}</div>
                    <input value={this.state.name} onChange={this.handleNameChange}/>
                    <div className="desc-row-title">{'Campsite Type'}</div>
                    <input type="text" value={this.state.type} onChange={this.handleTypeChange} />
                    {this.renderInput()}
                    <div className="desc-row-title">{'Campsite Type Of Use'}</div>
                    <input type="text" value={this.state.typeUse} onChange={this.handleTypeUseChange} />
                    <div className="desc-row-title">{'Campsite Updated At'}</div>
                    <input type="text" value={this.state.updateAt} onChange={this.handleUpdateChange} />
                    <div className="desc-row-title">{'Campsite Created At'}</div>
                    <input type="text" value={this.state.creatAt} onChange={this.handleCreateChange} />
                    <div className="desc-row-title">{'Campsite Is Accessible'}</div>
                    <input type="text" value={this.state.isAccess} onChange={this.handleAccessChange} />
                    <div className="desc-row-title">{'Campsite Loop'}</div>
                    <input type="text" value={this.state.loop} onChange={this.handleLoopChange} />
                    <div className="desc-submit"><button onClick={this.handleSubmit}>Submit</button></div>
                  </div>
        );
      }
    }

export default NewCampSiteForm;