import React, {Component} from "react";

import tent from './images/tent.png';

class CampMarker extends Component{

    render() {
        return (
            <button
                value={this.props.campId}
                key={this.props.key}
                onClick={this.props.campClick}
                lat={this.props.lat}
                lng={this.props.lng}
                >
                    <img style={{pointerEvents: "none"}} src={tent}/>
                </button>
        );
    }
}

export default CampMarker;