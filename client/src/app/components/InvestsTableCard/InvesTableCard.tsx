import React from 'react'

import { compose } from 'redux'
import { connect } from 'react-redux'
import MaterialTable from 'material-table'
import { withStyles } from '@material-ui/core/styles'

import { AppState } from 'app/reducers'
import { InvestModel } from 'app/models'

import styles from './InvestTableCard.style'

import { tableHeadCell, tableOptions } from './InvestTableConfiguration'
import InvestDetail from 'app/components/InvestDetail'

interface InvestTableCardProps {
    invests: InvestModel[],
    state: string,
    errorMessage?: string,
}

interface InvestTableCardState {
}

class InvestTableCard extends React.Component<InvestTableCardProps, { rowData: any, dialogOpened: boolean }> {
    constructor(props: InvestTableCardProps) {
        super(props)
        this.state = {
            rowData: null,
            dialogOpened: false
        }
    }

    setStateLookUp() {
        const states: string[] = this.props.invests.map(invests => invests.etat_d_avancement)

        const filterStates = (states: any) => states.filter((v: string, i: number) => states.indexOf(v) === i)

        return filterStates(states).sort()
    }

    setTownLookUp() {
        const towns: string[] = this.props.invests.map(invest => invest.ville)
        const filterTowns = (towns: any) => towns.filter((v: string, i: number) => towns.indexOf(v) === i)

        return filterTowns(towns).sort()
    }

    closeDialog() {
        this.setState({ dialogOpened: !this.state.dialogOpened, rowData: null })
    }

    render() {
        const { invests, state } = this.props
        const options = Object.assign(tableOptions, {
            showEmptyDataSourceMessage: state === 'LOADING' ? false : true,
        })

        return (
            <React.Fragment>
                <MaterialTable
                    title='Investissements'
                    columns={tableHeadCell(this.setTownLookUp(), this.setStateLookUp())}
                    data={invests}
                    isLoading={state === 'LOADING'}
                    localization={{
                        header: {
                            actions: 'Plus'
                        },
                        body: {
                            emptyDataSourceMessage: "Il n'y a rien à afficher :("
                        }
                    }}
                    options={options}
                    actions={
                        [
                            {
                                icon: 'more_vert',
                                tooltip: 'Plus',
                                onClick: (event, rowData: any) => this.setState({ rowData: rowData, dialogOpened: true })
                            }
                        ]}
                />
                <InvestDetail
                    rowData={this.state.rowData}
                    openState={this.state.dialogOpened}
                    handleClose={() => this.closeDialog()} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        invests: state.ui.list.invests.map((investId) => state.entities.invests.byId[investId]),
        state: state.ui.list.state,
        errorMessage: state.ui.list.errorMessage
    }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps)
)(InvestTableCard) as React.ComponentClass<{}, InvestTableCardProps>