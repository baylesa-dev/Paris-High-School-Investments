import React from 'react'
import { connect } from 'react-redux'
import { Theme, Tooltip, Typography, withStyles } from '@material-ui/core'
import GoogleMapReact from 'google-map-react'

import { Place } from '@material-ui/icons'

import { AppState } from 'app/reducers'
import { InvestModel } from 'app/models'

interface MapProps {
    invests: InvestModel[]
}

interface MapState {
    center: {
        lat: number,
        lng: number
    },
    zoom: number
}

const HtmlTooltip = withStyles((theme: Theme) => ({
    tooltip: {
        backgroundColor: '#F2F2F2',
        color: theme.palette.primary.main,
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: `1px solid ${theme.palette.secondary.main}`,
    },
}))(Tooltip);

const Marker = (props: { lat: number, lng: number, lycee: string, ville: string }) => {
    return (
        <HtmlTooltip
            title={
                <React.Fragment>
                    <Typography color="inherit">Lycée {props.lycee}</Typography>
                    {props.ville}
                </React.Fragment>
            }>
            <Place color='secondary' />
        </HtmlTooltip>
    )
}

class Map extends React.Component<MapProps, MapState> {
    constructor(props: MapProps, state: MapState) {
        super(props)
        this.state = {
            center: {
                lat: 48.85,
                lng: 2.34
            },
            zoom: 10
        }
    }

    render() {
        const googleMapsApiKey = 'AIzaSyCvBe9AEx9Jlg-jlv77K_x16_VTfKKd0K8'
        return (
            <div style={{ height: '100%' }}>
                <GoogleMapReact
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                    bootstrapURLKeys={{ key: googleMapsApiKey }}>
                    {this.props.invests.map((invest) => {
                        return (
                            <Marker
                                key={invest._id}
                                lat={invest.latitude}
                                lng={invest.longitude}
                                lycee={invest.lycee}
                                ville={invest.ville}/>
                        )
                    })}
                </GoogleMapReact>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        invests: state.ui.list.invests.map((investId) => state.entities.invests.byId[investId])
    }
}

export default connect(mapStateToProps)(Map)