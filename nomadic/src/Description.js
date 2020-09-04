import React, {Component} from "react";

class Description extends Component {

    render() {

        return(
            <div className="container btm-pad-10">
                        <div className="desc-row-title">
                            <h2>{'Campsite Description'}</h2>
                        </div>
                        <div className="desc-row-title">
                            {'Campsite Name'}
                        </div>
                        <div className="desc-row-value">
                            {this.props.campName}
                        </div>
                        <div className="desc-row-title">
                            {'Campsite Longitude'}
                        </div>
                        <div className="desc-row-value">
                            {this.props.lat}
                        </div>
                        <div className="desc-row-title">
                            {'Campsite Latitude'}
                        </div>
                        <div className="desc-row-value">
                            {this.props.lng}
                        </div>
                        <div className="desc-row-title">
                            {'Campsite Type'}
                        </div>
                        <div className="desc-row-value" >
                            {this.props.campType}
                        </div>
                        <div className="desc-row-title" >
                            {'Campsite Type Of Use'}
                        </div>
                        <div className="desc-row-value" >
                            {this.props.campUseType}
                        </div>
                        <div className="desc-row-title">
                            {'Campsite Updated At'}
                        </div>
                        <div className="desc-row-value">
                            {this.props.campUpdatedAt}
                        </div>
                        <div className="desc-row-title">
                            {'Campsite Created At'}
                        </div>
                        <div className="desc-row-value">
                            {this.props.campCreatedAt}
                        </div>
                        <div className="desc-row-title">
                            {'Campsite Loop'}
                        </div>
                        <div className="desc-row-value">
                            {this.props.campLoop}
                        </div>
            </div>
        );
    }
}

export default Description;