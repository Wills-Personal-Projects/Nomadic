import React from 'react';
import PsuedoCampMarker from './PsuedoCampMarker';
import PsuedoFacMarker from './PsuedoFacMarker';
import {Icon, Grid} from 'semantic-ui-react';
import './TextLabelTitle.css';
import './Container.css';

function Legend(){
    return(
        <div className='legend-cont'>
            <Grid>
            <Grid.Row columns={2}>
                <Grid.Column width={2}>
                    <PsuedoFacMarker/>
                </Grid.Column>
                <Grid.Column width={9}>
                    <div className='legend-text'>
                        {'A group of campsites'}
                    </div>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={2}>
                    <div className='legend-arrow'>
                        <Icon size='large' name='arrow down'/>
                    </div>
                </Grid.Column>
                <Grid.Column width={11}>
                    <div className='legend-text'>
                        {'Click a group to see the campsite(s) it contains'}
                    </div>
                </Grid.Column>
                
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column width={2}>
                    <PsuedoCampMarker/>
                </Grid.Column>
                <Grid.Column width={9}>
                    <div className='legend-text'>
                        {'A single campsite'}
                    </div>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column width={2}>
                    <div className='legend-arrow'>
                        <Icon size='large' name='arrow down'/>
                    </div>
                </Grid.Column>
                <Grid.Column width={11}>
                    <div className='legend-text'>
                        {'Click a campsite to see its description'}
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </div>
    );
}

export default Legend;