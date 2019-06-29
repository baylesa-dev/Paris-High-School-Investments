import { Investment } from '../controllers'
import { Route } from '../types'

const routes: Route[] = [
    {
        method: 'GET',
        url: '/investments',
        handler: Investment.listInvestments
    },
    {
        method: 'GET',
        url: '/investments/:city-:progress',
        handler: Investment.listInvestmentsByCityOrProgress
    }
]

export default routes