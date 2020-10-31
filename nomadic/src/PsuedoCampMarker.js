import React, {Component} from "react";
import { Button,Icon } from 'semantic-ui-react'
import './Button.css';
import './TextLabelTitle.css';

class PsuedoCampMarker extends Component{

    render() {
        return (
            <div className='legend-item'>
                <Button 
                    key={this.props.key} 
                    lat={this.props.lat} 
                    lng={this.props.lng} 
                    className='camp-btn'>
                </Button>
            </div>
        );
    }
}

export default PsuedoCampMarker;