import React, {Component} from "react";

class Description extends Component {

    render() {

        return(
            <div className="container">
                        <div className="desc-row">
                            {'Campsite Name'}
                        </div>
                        <div className="desc-row">
                            {this.props.campName}
                        </div>
                        <div className="desc-row">
                            {'Campsite Longitude'}
                        </div>
                        <div className="desc-row">
                            {this.props.lat}
                        </div>
                        <div className="desc-row">
                            {'Campsite Latitude'}
                        </div>
                        <div className="desc-row">
                            {this.props.lng}
                        </div>
                        <div className="desc-row">
                            {'Campsite Type'}
                        </div>
                        <div className="desc-row" >
                            {this.props.campType}
                        </div>
                        <div className="desc-row" >
                            {'Campsite Type Of Use'}
                        </div>
                        <div className="desc-row" >
                            {this.props.campUseType}
                        </div>
                        <div className="desc-row">
                            {'Campsite Updated At'}
                        </div>
                        <div className="desc-row">
                            {this.props.campUpdatedAt}
                        </div>
                        <div className="desc-row">
                            {'Campsite Created At'}
                        </div>
                        <div className="desc-row">
                            {this.props.campCreatedAt}
                        </div>
                        <div className="desc-row">
                            {'Campsite Loop'}
                        </div>
                        <div className="desc-row">
                            {this.props.campLoop}
                        </div>
            </div>
        );
    }
}

export default Description;