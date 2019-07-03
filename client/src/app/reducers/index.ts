import { Action } from 'redux'

import {
    defaultInvestsDictState,
    investsDictReducer,
    InvestsDictState
} from './investsDict'
import {
    defaultInvestsListState,
    investsListReducer,
    InvestsListState
} from './investsList'

export interface AppState {
    entities: {
        invests: InvestsDictState
    },
    ui: {
        list: InvestsListState
    }
}

export function defaultState() {
    return {
        entities: {
            invests: defaultInvestsDictState()
        },
        ui: {
            list: defaultInvestsListState()
        }
    }
}

export function mainReducer(state: AppState = defaultState(), action: Action) {
    return {
        entities: {
            invests: investsDictReducer(state.entities.invests, action)
        },
        ui: {
            list: investsListReducer(state.ui.list, action, state.entities.invests)
        }
    }
}