import { Investment } from '../controllers'
import { Route } from '../types'

const routes: Route[] = [
    {
        method: 'GET',
        url: '/investments',
        handler: Investment.listInvestments
    }
]

export default routes