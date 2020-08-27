import React, {Component} from "react";

class FacMarker extends Component{

    render() {
        return (
            <button
                value={this.props.fac}
                key={this.props.key}
                onClick={this.props.facClick}
                lat={this.props.lat}
                lng={this.props.lng}
                style={
                    {
                        height: 20,
                        width: 20,
                        backgroundColor: 'lightblue',
                        border: '2px solid black',
                        borderRadius: 15
                    }
                }/>
        );
    }
}

export default FacMarker;