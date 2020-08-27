import React, {Component} from "react";

class Description extends Component {

    render() {
        const rTitleStyle={backgroundColor: 'lightblue',padding: 2,fontSize: 19};
        const rContentStyle={backgroundColor: 'lightblue',padding: 2, fontSize: 16};

        return(
            <div className="container" style={
                {
                    width:300,
                    height: 400
                }
            }>
                <div className="col-sm-12">
                    <div className="row-lg-12" style={{border: '4px solid black',backgroundColor: 'lightblue',padding: 3, borderRadius: 15}}>
                        <div className="row-lg-12" style={rTitleStyle}>
                            {'-------Campsite Name-------'}
                        </div>
                        <div className="row-lg-12 " style={rContentStyle}>
                            {this.props.campName}
                        </div>
                        <div className="row-lg-12" style={rTitleStyle}>
                            {'-----Campsite Latitude------'}
                        </div>
                        <div className="row-lg-12" style={rContentStyle}>
                            {this.props.lat}
                        </div>
                        <div className="row-lg-12" style={rTitleStyle}>
                            {'----Campsite Longitude----'}
                        </div>
                        <div className="row-lg-12" style={rContentStyle}>
                            {this.props.lng}
                        </div>
                        <div className="row-lg-12" style={rTitleStyle}>
                            {'--------Campsite Type--------'}
                        </div>
                        <div className="row-lg-12" style={rContentStyle}>
                            {this.props.campType}
                        </div>
                        <div className="row-lg-12" style={rTitleStyle}>
                            {'--Campsite Type Of Use--'}
                        </div>
                        <div className="row-lg-12" style={rContentStyle}>
                            {this.props.campUseType}
                        </div>
                        <div className="row-lg-12" style={rTitleStyle}>
                            {'-Campsite Last Updated-'}
                        </div>
                        <div className="row-lg-12" style={rContentStyle}>
                            {this.props.campUpdatedAt}
                        </div>
                        <div className="row-lg-12" style={rTitleStyle}>
                            {'-----Campsite Created------'}
                        </div>
                        <div className="row-lg-12  " style={rContentStyle}>
                            {this.props.campCreatedAt}
                        </div>
                        <div className="row-lg-12" style={rTitleStyle}>
                            {'--------Campsite Loop--------'}
                        </div>
                        <div className="row-lg-12" style={rContentStyle}>
                            {this.props.campLoop}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Description;