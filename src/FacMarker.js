import React, {Component} from "react";
import { Button,Icon } from 'semantic-ui-react'
import './Button.css';

class FacMarker extends Component{

    render() {
        return (
            <Button 
                key={this.props.key} 
                lat={this.props.lat} 
                lng={this.props.lng} 
                className='fac-btn'
                onClick={() => this.props.facClick(this.props.fac, this.props.lat, this.props.lng)}>
                   
            </Button>
        );
    }
}

export default FacMarker;