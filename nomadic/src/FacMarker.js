import React, {Component} from "react";
import tent from './images/tent.png'

class FacMarker extends Component{

    render() {
        return (
                <button
                value={this.props.fac}
                key={this.props.key}
                onClick={this.props.facClick}
                lat={this.props.lat}
                lng={this.props.lng}
                style={{border: '2px solid black', backgroundColor: 'lightgray', borderRadius: 10, height: 20, width: 20}}
                />
        );
    }
}

export default FacMarker;
