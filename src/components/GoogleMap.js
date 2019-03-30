import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class GoogleMap extends Component {
    
    render() {
        const styles = {
            height: '200px',
            width: '250px'    
        };
        
        const { lat, lng } = this.props;

        return (
            <Map google={this.props.google} 
                zoom={12}
                style={styles}
                initialCenter={{lat, lng}}>
                <Marker
                    title={this.props.name}
                    name={this.props.name}
                    position={{lat, lng}} />
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAq06l5RUVfib62IYRQacLc-KAy0XIWAVs'
  })(GoogleMap)