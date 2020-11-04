import React from 'react';
import {Grid, Label, Button} from 'semantic-ui-react';
import './TextLabelTitle.css';
import './Button.css';

function CampDesc(props){
    if (!props.empty){
    return (
        <Grid>
            <Grid.Column>
                <Grid.Row>
                    <div className='desc-title'>{'Campsite Information'}</div>
                </Grid.Row>

                <Grid.Row>
                    <Label>
                        <div className='desc-label'>{'Campsite Name'}</div>
                    </Label>
                </Grid.Row>

                <Grid.Row>
                    <div className='desc-val'>{props.c.name}</div>
                </Grid.Row>
               
                <Grid.Row>
                    <Label>
                        <div className='desc-label'>{'Campsite Latitude'}</div>
                    </Label>
                </Grid.Row>

                <Grid.Row>
                    <div className='desc-val'>{props.c.lat}</div>
                </Grid.Row>

                <Grid.Row>
                    <Label>
                        <div className='desc-label'>{'Campsite Longitude'}</div>
                    </Label>
                </Grid.Row>

                <Grid.Row>
                    <div className='desc-val'>{props.c.lng}</div>
                </Grid.Row>

                <Grid.Row>
                    <Label>
                        <div className='desc-label'>{'Campsite Type'}</div>
                    </Label>
                </Grid.Row>

                <Grid.Row>
                    <div className='desc-val'>{props.c.type}</div>
                </Grid.Row>

                <Grid.Row>
                    <Label>
                        <div className='desc-label'>{'Campsite Type of Use'}</div>
                    </Label>
                </Grid.Row>

                <Grid.Row>
                    <div className='desc-val'>{props.c.typeUse}</div>
                </Grid.Row>

                <Grid.Row>
                    <Label>
                        <div className='desc-label'>{'Campsite Updated At'}</div>
                    </Label>
                </Grid.Row>

                <Grid.Row>
                    <div className='desc-val'>{props.c.updatedAt}</div>
                </Grid.Row>

                <Grid.Row>
                    <Label>
                        <div className='desc-label'>{'Campsite Created At'}</div>
                    </Label>
                </Grid.Row>

                <Grid.Row>
                    <div className='desc-val'>{props.c.createdAt}</div>
                </Grid.Row>

                <Grid.Row>
                    <Label>
                        <div className='desc-label'>{'Campsite Loop'}</div>
                    </Label>
                </Grid.Row>

                <Grid.Row>
                    <div className='desc-val'>{props.c.loop}</div>
                </Grid.Row>
            </Grid.Column>
        </Grid>
    );
    }else{
        return (
            <Grid>
                <Grid.Column>
                    <Grid.Row>
                        <div className='desc-title'>{'Campsite Information'}</div>
                    </Grid.Row>

                    <Grid.Row>
                        <Label>
                            <div className='desc-label'>{'Campsite Name'}</div>
                        </Label>
                    </Grid.Row>

                    <Grid.Row>
                        <div className='desc-val'>{'None Selected'}</div>
                    </Grid.Row>
                   
                    <Grid.Row>
                        <Label>
                            <div className='desc-label'>{'Campsite Latitude'}</div>
                        </Label>
                    </Grid.Row>

                    <Grid.Row>
                        <div className='desc-val'>{'None Selected'}</div>
                    </Grid.Row>

                    <Grid.Row>
                        <Label>
                            <div className='desc-label'>{'Campsite Longitude'}</div>
                        </Label>
                    </Grid.Row>

                    <Grid.Row>
                        <div className='desc-val'>{'None Selected'}</div>
                    </Grid.Row>

                    <Grid.Row>
                        <Label>
                            <div className='desc-label'>{'Campsite Type'}</div>
                        </Label>
                    </Grid.Row>

                    <Grid.Row>
                        <div className='desc-val'>{'None Selected'}</div>
                    </Grid.Row>

                    <Grid.Row>
                        <Label>
                            <div className='desc-label'>{'Campsite Type of Use'}</div>
                        </Label>
                    </Grid.Row>

                    <Grid.Row>
                        <div className='desc-val'>{'None Selected'}</div>
                    </Grid.Row>

                    <Grid.Row>
                        <Label>
                            <div className='desc-label'>{'Campsite Updated At'}</div>
                        </Label>
                    </Grid.Row>

                    <Grid.Row>
                        <div className='desc-val'>{'None Selected'}</div>
                    </Grid.Row>

                    <Grid.Row>
                        <Label>
                            <div className='desc-label'>{'Campsite Created At'}</div>
                        </Label>
                    </Grid.Row>

                    <Grid.Row>
                        <div className='desc-val'>{'None Selected'}</div>
                    </Grid.Row>

                    <Grid.Row>
                        <Label>
                            <div className='desc-label'>{'Campsite Loop'}</div>
                        </Label>
                    </Grid.Row>

                    <Grid.Row>
                        <div className='desc-val'>{'None Selected'}</div>
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        );
    }
}

export default CampDesc;