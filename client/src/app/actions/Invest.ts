import { Action, Dispatch } from 'redux'

import { InvestModel } from 'app/models'
import { InvestService } from 'app/services'

export const ACTION_INVESTMENTS_FETCH = 'INVESTMENTS_FETCH'
export const ACTION_INVESTMENTS_FETCH_SUCCESS = 'INVESTMENTS_FETCH_SUCCESS'
export const ACTION_INVESTMENTS_FETCH_ERROR = 'INVESTMENTS_FETCH_ERROR'
export const ACTION_INVESTMENTS_SEARCH = 'INVESTMENTS_SEARCH'

export function isAction<A extends Action>(action: Action, type: string): action is A {
    return action.type === type
}

export interface IActionInvestsFetch extends Action {
    type: 'INVESTMENTS_FETCH'
}

export interface IActionInvestsFetchSuccess extends Action {
    type: 'INVESTMENTS_FETCH_SUCCESS',
    invests: InvestModel[]
}

export interface IActionInvestsFetchError extends Action {
    type: 'INVESTMENTS_FETCH_ERROR',
    errorMessage: string
}

export interface IActionSearchInvests {
    type: 'INVESTMENTS_SEARCH',
    options: {
        searchText: string
    }
}

export type AppActions = IActionInvestsFetch | IActionInvestsFetchSuccess | IActionInvestsFetchError | IActionSearchInvests

function dispatchFetchInvestsProgress(): IActionInvestsFetch {
    return {
        type: ACTION_INVESTMENTS_FETCH
    }
}

function dispatchFetchInvestsSuccess(invests: InvestModel[]): IActionInvestsFetchSuccess {
    return {
        type: ACTION_INVESTMENTS_FETCH_SUCCESS,
        invests
    }
}

function dispatchFetchInvestsError(e: Error): IActionInvestsFetchError {
    return {
        type: ACTION_INVESTMENTS_FETCH_ERROR,
        errorMessage: e.message
    }
}

export function actionFetchInvests() {
    return (dispatch: Dispatch) => {
        dispatch(dispatchFetchInvestsProgress())
        return InvestService.getAll()
            .then((invests) => {
                return dispatch(dispatchFetchInvestsSuccess(invests))
            })
            .catch((e: Error) => {
                return dispatch(dispatchFetchInvestsError(e))
            })
    }
}

interface SearchInvestsOptions {
    searchText: string,
}

export function actionSearchInvests(options: SearchInvestsOptions) {
    return (dispatch: Dispatch) => {
        return dispatch({
            type: ACTION_INVESTMENTS_SEARCH,
            options
        })
    }
}