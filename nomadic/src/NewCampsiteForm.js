import React from 'react';
import {Grid, Form, Button, Label} from 'semantic-ui-react';
import './TextLabelTitle.css';
import './Button.css';

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
            <Form>
                  <Form.Group grouped>
                    <Form.Field>
                      <Label className='desc-label'>
                        {'Campsite Latitude'}
                      </Label>
                    </Form.Field>
                    <Form.Field>
                      <input value={this.state.lat} onChange={this.handleLatChange}/>
                    </Form.Field>
                    <Form.Field>
                    <Button  onClick={this.switchInputType} className='switch-btn'>Input by Clicking</Button>
                    </Form.Field>
                    <Form.Field>
                      <Label className='desc-label'>
                        {'Campsite Longitude'}
                      </Label>
                    </Form.Field>
                    <Form.Field>
                      <input value={this.state.lng} onChange={this.handleLngChange}/>
                    </Form.Field>
                    <Form.Field>
                    <Button  onClick={this.switchInputType} className='switch-btn'>Input by Clicking</Button>
                    </Form.Field>
                  </Form.Group>
                </Form>
          );
        }else{
          return (
            
             <Form>
                  <Form.Group grouped>
                    <Form.Field>
                      <Label className='desc-label'>
                        {'Campsite Latitude'}
                      </Label>
                    </Form.Field>
                    <Form.Field>
                    <div className='disp-lat'>
                        {this.state.lat}
                      </div>
                    </Form.Field>
                    <Form.Field>
                    <Button  onClick={this.switchInputType} className='switch-btn'>Input by typing</Button>
                    </Form.Field>
                    <Form.Field>
                      <Label className='desc-label'>
                        {'Campsite Longitude'}
                      </Label>
                    </Form.Field>
                    <Form.Field>
                      <div className='disp-lng'>
                        {this.state.lng}
                      </div>
                    </Form.Field>
                    <Form.Field>
                    <Button onClick={this.switchInputType} className='switch-btn'>Input by typing</Button>
                    </Form.Field>
                  </Form.Group>
                </Form>
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
          <Grid>
            <Grid.Column>
              <Grid.Row>
                <Form>
                  <Form.Group>
                  <Form.Field>
                        <div className='add-title'>{'Fill In Campsite Information'}</div>
                  </Form.Field>
                  </Form.Group>
                </Form>
              </Grid.Row>
              <Grid.Row>
        
                <Form>
                  <Form.Group grouped>
                    <Form.Field>
                      <Label className='desc-label'>
                        <div >{'Campsite Name'}</div>
                      </Label>
                    </Form.Field>
                    <Form.Field>
                      <input value={this.state.name} onChange={this.handleNameChange}/>
                    </Form.Field>
                  </Form.Group>
                </Form>
        
              </Grid.Row>
              <Grid.Row>
                
                   
                      {this.renderInput()}
                    
                  
              </Grid.Row>
              <Grid.Row>
              <Form>
                  <Form.Group grouped>
                    <Form.Field>
                      <Label className='desc-label'>
                        {'Campsite Type'}
                      </Label>
                    </Form.Field>
                    <Form.Field>
                      <input value={this.state.type} onChange={this.handleTypeChange}/>
                    </Form.Field>
                  </Form.Group>
                </Form>
              </Grid.Row>
              <Grid.Row>
              <Form>
                  <Form.Group grouped>
                    <Form.Field>
                      <Label className='desc-label'>
                        {'Campsite Type of Use'}
                      </Label>
                    </Form.Field>
                    <Form.Field>
                      <input value={this.state.typeUse} onChange={this.handleTypeUseChange}/>
                    </Form.Field>
                  </Form.Group>
                </Form>
              </Grid.Row>
              <Grid.Row>
              <Form>
                  <Form.Group grouped>
                    <Form.Field>
                      <Label className='desc-label'>
                        {'Campsite Updated At'}
                      </Label>
                    </Form.Field>
                    <Form.Field>
                      <input value={this.state.updateAt} onChange={this.handleUpdateChange}/>
                    </Form.Field>
                  </Form.Group>
                </Form>
              </Grid.Row>
              <Grid.Row>
              <Form>
                  <Form.Group grouped>
                    <Form.Field>
                      <Label className='desc-label'>
                        {'Campsite Created At'}
                      </Label>
                    </Form.Field>
                    <Form.Field>
                      <input value={this.state.createAt} onChange={this.handleCreateChange}/>
                    </Form.Field>
                  </Form.Group>
                </Form>
              </Grid.Row>
              <Grid.Row>
              <Form>
                  <Form.Group grouped>
                    <Form.Field>
                      <Label className='desc-label'>
                       {'Campsite Loop'}
                      </Label>
                    </Form.Field>
                    <Form.Field>
                      <input value={this.state.loop} onChange={this.handleLoopChange}/>
                    </Form.Field>
                    <Form.Field>
                      <Button className='sub-btn' onClick={this.handleSubmit}>Submit</Button>
                    </Form.Field>
                  </Form.Group>
                </Form>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        );
      }
    }

export default NewCampSiteForm;