import { boomify } from 'boom'

import { InvestmentModel } from '../data'
import { Request, Response } from '../types'

export const listInvestments = async(req: Request, res: Response) => {
    try {
        return await InvestmentModel.find({})
    } catch(e) {
        throw boomify(e)
    }
}