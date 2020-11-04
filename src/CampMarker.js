import React, {Component} from "react";
import { Button,Icon } from 'semantic-ui-react'
import './Button.css';

class CampMarker extends Component{

    render() {
        return (
            
            <Button key={this.props.key} 
            lat={this.props.lat} 
            lng={this.props.lng} 
            className='camp-btn'
            onClick={() => this.props.campClick(this.props.lat, this.props.lng, this.props.campId)}>
            </Button>
            
        );
    }
}

export default CampMarker;