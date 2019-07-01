import React from 'react'

import { connect } from 'react-redux'

import { actionFetchInvests } from 'app/actions'
import { AppState } from 'app/reducers'
import { InvestModel } from 'app/models'

interface HomeProps {
    loadData: () => () => void,
    invests: InvestModel[],
    state: string,
    errorMessage?: string
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
        return (
            <React.Fragment>
                {this.renderInvests()}
            </React.Fragment>
        )
    }

    renderInvests() {
        if (this.props.state === 'LOADING') {
            return (<p>Loading ...</p>)
        } else if (this.props.state === 'ERROR') {
            return (<p>Error: {this.props.errorMessage}</p>)
        } else if (this.props.state === 'LOADED') {
            return (
                <ul>
                {this.props.invests.map((invest: InvestModel) => <li key={invest._id}>{invest.titreoperation}</li>)}
                </ul>
            )
        } else {
            return ''
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)