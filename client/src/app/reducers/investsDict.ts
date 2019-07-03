import { AppActions } from 'app/actions'
import { InvestModel } from 'app/models'

export type InvestsDict = {
    [Key: number]: InvestModel
}

export type InvestsDictState = {
    byId: InvestsDict,
    allIds: number[]
}

export function defaultInvestsDictState(): InvestsDictState {
    return {
        byId: {},
        allIds: []
    }
}

export function investsDictReducer(state: InvestsDictState, action: AppActions): InvestsDictState {
    if (action.type === 'INVESTMENTS_FETCH_SUCCESS') {
        return {
            byId: action.invests.reduce((acc, invest) => ({ ...acc, [invest._id]: invest }), state),
            allIds: action.invests.map((i) => i._id)
        }
    }
    return state
}

