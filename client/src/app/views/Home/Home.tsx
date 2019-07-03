import React from 'react'

import { compose } from 'redux'
import { connect } from 'react-redux'
import {
    Card,
    CardContent,
    CardHeader,
    Grid,
    Typography
} from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/core/styles'

import { actionFetchInvests } from 'app/actions'
import { AppState } from 'app/reducers'
import { InvestModel } from 'app/models'

import InvestsTableCard from 'app/components/InvestsTableCard'
import InvestStatusChart from 'app/components/InvestStatusChart'
import Map from 'app/components/Map'

import styles from './Home.style'

interface HomeProps extends WithStyles<typeof styles> {
    loadData: () => () => void,
    invests: InvestModel[],
    state: string,
    errorMessage?: string,
    classes: any
}

interface HomeState { }

class Home extends React.Component<HomeProps, HomeState> {

    // eslint-disable-next-line
    constructor(props: HomeProps, state: HomeState) {
        super(props, state)
    }

    componentDidMount() {
        if (this.props.state === 'INIT') {
            this.props.loadData()
        }
    }
    render() {
        const { classes } = this.props
        const apAmount = this.props.invests.reduce((acc, cur) => acc + (cur['montant_des_ap_votes_en_meu'] || 0), 0)
        const prevAmount = this.props.invests.reduce((acc, cur) => acc + (cur['enveloppe_prev_en_meu'] || 0), 0)
        let apAmountFormated = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(apAmount * 1000000)
        let prevAmountFormated = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(prevAmount * 1000000)
        return (
            <div className={classes.root}>
                <Grid container spacing={2} justify='space-around'>
                    <Grid item xs={12} sm={6}>
                        <InvestStatusChart invests={this.props.invests} />
                    </Grid>
                    <Grid item xs={12} sm={6} container direction='column' className={classes.rightGridContainer} spacing={2}>
                        <Grid item className={classes.rightGridItem}>
                            <Card className={classes.cardContainer}>
                                <CardHeader title='Montant des AP votés' />
                                <CardContent className={classes.cardContent}>
                                    <Typography variant='h3' color='primary'>
                                        {apAmountFormated}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item className={classes.rightGridItem}>
                            <Card className={classes.cardContainer}>
                                <CardHeader title='Enveloppe prévisionnelle' />
                                <CardContent className={classes.cardContent}>
                                    <Typography variant='h3' color='secondary'>
                                        {prevAmountFormated}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item style={{flex: 2}}>
                            <Card className={classes.cardContainer}>
                                <Map/>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Card className={classes.cardContainer}>
                            <InvestsTableCard />
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState, ownProps: HomeProps) => {
    return {
        invests: state.ui.list.invests.map((investId) => state.entities.invests.byId[investId]),
        state: state.ui.list.state,
        errorMessage: state.ui.list.errorMessage
    }
}

const mapDispatchToProps = (dispatch: any) => { // tslint:disable-line
    return {
        loadData: () => dispatch(actionFetchInvests()),
    }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps, mapDispatchToProps)
)(Home) as React.ComponentType<HomeProps>