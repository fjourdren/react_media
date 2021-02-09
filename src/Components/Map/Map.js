import React from "react";
import PropTypes from 'prop-types';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';
import '../../../node_modules/leaflet/dist/leaflet.css';
import icon from '../../../node_modules/leaflet/dist/images/marker-icon.png';
import iconShadow from '../../../node_modules/leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconUrl: icon,
    shadowUrl: iconShadow
});

export class Map extends React.Component {
    static defaultProps = {
        waypoints: [],
    };

    static propTypes = {
        waypoints: PropTypes.array.isRequired,
        timeHandler: PropTypes.func.isRequired
    };

    render() {
        return (
            <MapContainer className="map" center={ this.props.waypoints[0] } zoom={ 4 } scrollWheelZoom={ false } style={{height:"500px"}}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                { this.props.waypoints.map((item, index) => (
                    <Marker position={ item }>
                        <Popup>
                            <h4 className="placeLink" onClick={this.props.timeHandler.bind(this, item.timestamp)}>{ item.label }</h4>
                        </Popup>
                    </Marker>
                )) }
            </MapContainer>
        );
    };

};