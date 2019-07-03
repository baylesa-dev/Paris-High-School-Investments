import { AppActions } from 'app/actions'
import { InvestModel } from 'app/models'

import { InvestsDictState } from './investsDict'

export interface InvestsSearchOptions {
    searchText: string
}

export interface InvestsListState {
    state: string,
    invests: number[],
    errorMessage?: string,
    searchOptions: InvestsSearchOptions
}

export function defaultInvestsListState() {
    return {
        state: 'INIT',
        invests: [],
        searchOptions: {
            searchText: ''
        }
    }
}

function filterByText(text: string): (i: InvestModel) => boolean {
    return (invest: InvestModel): boolean => {
        return invest.titreoperation.toLowerCase().indexOf(text) > -1
    }
}

export function investsListReducer(state: InvestsListState, action: AppActions, invests: InvestsDictState): InvestsListState {
    if (action.type === 'INVESTMENTS_FETCH') {
        return {
            ...state,
            state: 'LOADING',
            invests: []
        }
    }
    if (action.type === 'INVESTMENTS_FETCH_SUCCESS') {
        return {
            ...state,
            state: 'LOADED',
            invests: [...action.invests.map((i: InvestModel) => i._id)]
        }
    }
    if (action.type === 'INVESTMENTS_FETCH_ERROR') {
        return {
            ...state,
            invests: [],
            errorMessage: action.errorMessage
        }
    }
    if (action.type === 'INVESTMENTS_SEARCH') {
        return {
            ...state,
            invests: invests.allIds
                .map((id) => invests.byId[id])
                .filter(filterByText(action.options.searchText.toLowerCase()))
                .map((i) => i._id)
        }
    }
    return state
}